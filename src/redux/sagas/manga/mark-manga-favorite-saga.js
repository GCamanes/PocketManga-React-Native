import {put, takeLatest} from '@redux-saga/core/effects';
import AppConstants from '../../../app/app.constants';
import Storage from '../../../utils/storage';

export function* markMangaFavoriteSaga(action) {
  try {
    const {payload} = action;
    if (payload.value) {
      yield Storage.setItem(payload.manga, 'on');
    } else {
      yield Storage.removeItem(payload.manga);
    }
    yield put({
      type: AppConstants.EVENTS.MANGA_MARKED_AS_FAVORITE,
      payload: {manga: payload.manga, isFavorite: payload.value},
    });
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
  yield takeLatest(AppConstants.EVENTS.MARK_MANGA_FAVORITE_SAGA, markMangaFavoriteSaga);
}
