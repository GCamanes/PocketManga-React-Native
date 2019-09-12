import { put, takeLatest } from 'redux-saga/effects';
import { Actions } from 'react-native-router-flux';

import AppConstants from '../../../app/app.constants';

export function* loginSaga(action) {
  try {
    yield put({ type: AppConstants.EVENTS.LOGIN_REDUX, payload: action.payload });
    // Redirect
    Actions.reset(AppConstants.ROUTES.HOME);
  } catch (error) {
    console.log('error', error);
  }
}

/**
 * Watch event saga.
 *
 * @returns {IterableIterator<ForkEffect>}
 */
export default function* watch() {
  yield takeLatest(AppConstants.EVENTS.LOGIN_SAGA, loginSaga);
}
