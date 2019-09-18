import {Image} from 'react-native';
import {put, takeLatest} from '@redux-saga/core/effects';
import AppConstants from '../../../app/app.constants';

export function* getScanInfosSaga(action) {
  yield put({
    type: AppConstants.EVENTS.SET_LOADER,
    payload: {scene: AppConstants.ROUTES.SCAN_INFOS, loading: true},
  });
  try {
    yield put({type: AppConstants.EVENTS.UPDATE_ZOOM_REDUX, payload: false});
    yield put({
      type: AppConstants.EVENTS.SET_PAGE_REDUX,
      payload: {page: action.payload.index + 1, total: action.payload.total},
    })
    const infos = yield new Promise(function(resolve, reject) {
      Image.getSize(
        action.payload.url,
        (width, height) => {
          resolve({height: height, width: width});
        },
        error => {
          reject({error: error});
        },
      );
    });
    yield put({
      type: AppConstants.EVENTS.SET_SCAN_INFOS_REDUX,
      payload: {
        height: infos.height,
        width: infos.width,
        imgRatioHW: infos.height / infos.width,
        imgRatioWH: infos.width / infos.height,
      },
    });
  } catch (error) {
    console.log('\nerror is getScanInfosSaga', error);
  }
  yield put({
    type: AppConstants.EVENTS.SET_LOADER,
    payload: {scene: AppConstants.ROUTES.SCAN_INFOS, loading: false},
  });
}

/**
 * Watch event saga.
 *
 * @returns {IterableIterator<ForkEffect>}
 */
export default function* watch() {
  yield takeLatest(AppConstants.EVENTS.GET_SCAN_INFOS_SAGA, getScanInfosSaga);
}
