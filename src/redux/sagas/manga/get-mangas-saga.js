import firebase from 'react-native-firebase';
import { put, takeLatest } from '@redux-saga/core/effects';
import AppConstants from '../../../app/app.constants';

export function* getMangasSaga(action) {
  yield put({
    type: AppConstants.EVENTS.SET_LOADER,
    payload: {scene: AppConstants.ROUTES.HOME, loading: true},
  });
  try {
    console.log('\n MANGAS');
  } catch (error) {
    console.log('\nerror is getMangasSaga', error);
  }
  yield put({
    type: AppConstants.EVENTS.SET_LOADER,
    payload: {scene: AppConstants.ROUTES.HOME, loading: false},
  });
}

/**
 * Watch event saga.
 *
 * @returns {IterableIterator<ForkEffect>}
 */
export default function* watch() {
  yield takeLatest(AppConstants.EVENTS.GET_MANGAS_SAGA, getMangasSaga);
}
