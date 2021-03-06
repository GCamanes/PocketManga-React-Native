import firebase from 'react-native-firebase';
import {Actions} from 'react-native-router-flux';
import {put, takeLatest} from '@redux-saga/core/effects';
import AppConstants from '../../../app/app.constants';
import showAlert from '../../../utils/showAlert';

export function* getScansSaga(action) {
  yield put({
    type: AppConstants.EVENTS.SET_LOADER,
    payload: {scene: AppConstants.ROUTES.SCANS, loading: true},
  });
  try {
    const {chapter, manga} = action.payload;
    yield put({
      type: AppConstants.EVENTS.SET_PAGE_REDUX,
      payload: null,
    })
    Actions.jump(AppConstants.ROUTES.SCANS, {
      title: `Chapter ${chapter.number}`,
      chapter,
    });
    const scansData = yield firebase
      .firestore()
      .collection(AppConstants.FIRESTORE.COLLECTION_MANGAS_CHAPTERS)
      .doc(manga)
      .collection(AppConstants.FIRESTORE.COLLECTION_CHAPTERS)
      .doc(chapter.id)
      .get();
    yield put({
      type: AppConstants.EVENTS.GET_SCAN_INFOS_SAGA,
      payload: {
        url: scansData._data.pages[0].url,
        index: 0,
        total: scansData._data.pages.length,
      },
    })
    yield put({
      type: AppConstants.EVENTS.SET_SCANS_REDUX,
      payload: scansData._data.pages,
    });
  } catch (error) {
    console.log('\nerror is getScansSaga', error);
    showAlert('Error while getting Firebase data', 'Error');
  }
  yield put({
    type: AppConstants.EVENTS.SET_LOADER,
    payload: {scene: AppConstants.ROUTES.SCANS, loading: false},
  });
}

/**
 * Watch event saga.
 *
 * @returns {IterableIterator<ForkEffect>}
 */
export default function* watch() {
  yield takeLatest(AppConstants.EVENTS.GET_SCANS_SAGA, getScansSaga);
}
