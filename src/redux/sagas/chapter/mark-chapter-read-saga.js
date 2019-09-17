import {put, takeLatest} from '@redux-saga/core/effects';
import {Actions} from 'react-native-router-flux';
import AppConstants from '../../../app/app.constants';
import Storage from '../../../utils/storage';

export function* markChapterReadSaga(action) {
  try {
    const {payload} = action;
    if (payload.isRead) {
      yield Storage.setItem(payload.id, 'on');
    } else {
      yield Storage.removeItem(payload.id);
    }
    yield put({
      type: AppConstants.EVENTS.CHAPTER_MARKED_AS_READ,
      payload,
    });
    if (payload.routerPop) Actions.pop();
  } catch (error) {
    console.log('\nerror is markMangaFavoriteSaga', error);
  }
}

/**
 * Watch event saga.
 *
 * @returns {IterableIterator<ForkEffect>}
 */
export default function* watch() {
  yield takeLatest(AppConstants.EVENTS.MARK_CHAPTER_READ_SAGA, markChapterReadSaga);
}
