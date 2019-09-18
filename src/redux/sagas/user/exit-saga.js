import {put, takeLatest} from 'redux-saga/effects';

import AppConstants from '../../../app/app.constants';

export function* exitSaga() {
  yield put({type: AppConstants.EVENTS.CLEAR_CHAPTERS_REDUCER});
  yield put({type: AppConstants.EVENTS.CLEAR_MANGAS_REDUCER});
  yield put({type: AppConstants.EVENTS.CLEAR_SCANS_REDUCER});
  yield put({type: AppConstants.EVENTS.LOGOUT_REDUX});
  yield put({type: AppConstants.EVENTS.CLEAR_APP_REDUCER});
}

/**
 * Watch event saga.
 *
 * @returns {IterableIterator<ForkEffect>}
 */
export default function* watch() {
  yield takeLatest(AppConstants.EVENTS.EXIT_APPLICATION, exitSaga);
}
