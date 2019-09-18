import firebase from 'react-native-firebase';
import {put, takeLatest} from 'redux-saga/effects';
import {Actions} from 'react-native-router-flux';

import AppConstants from '../../../app/app.constants';
import Storage from '../../../utils/storage';
import showAlert from '../../../utils/showAlert';

const getUserInfos = async () => {
  let userMail = '';
  let userPassword = '';
  try {
    userMail = (await Storage.getItem('userMail')) || '';
    userPassword = (await Storage.getItem('userPassword')) || '';
  } catch (error) {
    // Error retrieving data
    console.log(error.message);
  }
  return {userMail: userMail, userPassword: userPassword};
};

export function* initLoginPage(action) {
  const userInfos = yield getUserInfos();
  yield action.payload(userInfos.userMail, userInfos.userPassword);
}

export function* loginSaga(action) {
  yield put({
    type: AppConstants.EVENTS.SET_LOADER,
    payload: {scene: AppConstants.ROUTES.USER_LOGIN, loading: true},
  });
  try {
    const {userMail, userPassword, userRemember} = action.payload
    yield firebase.auth().signInWithEmailAndPassword(userMail, userPassword);
    if (userRemember) {
      yield Storage.setItem('userMail', userMail);
      yield Storage.setItem('userPassword', userPassword);
    } else {
      yield Storage.removeItem('userMail');
      yield Storage.removeItem('userPassword');
    }
    yield put({type: AppConstants.EVENTS.LOGIN_REDUX, payload: action.payload});
    // Redirect
    Actions.reset(AppConstants.ROUTES.HOME);
  } catch (error) {
    console.log('error', error);
    showAlert('Wrong mail or password', 'Error');
  }
  yield put({
    type: AppConstants.EVENTS.SET_LOADER,
    payload: {scene: AppConstants.ROUTES.USER_LOGIN, loading: false},
  });
}

/**
 * Watch event saga.
 *
 * @returns {IterableIterator<ForkEffect>}
 */
export default function* watch() {
  yield takeLatest(AppConstants.EVENTS.INIT_LOGIN_PAGE_SAGA, initLoginPage);
  yield takeLatest(AppConstants.EVENTS.LOGIN_SAGA, loginSaga);
}
