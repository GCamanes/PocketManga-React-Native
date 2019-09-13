import firebase from 'react-native-firebase';
import { put, takeLatest } from '@redux-saga/core/effects';
import AppConstants from '../../../app/app.constants';
import Storage from '../../../utils/storage';

export function* getMangasSaga(action) {
  yield put({
    type: AppConstants.EVENTS.SET_LOADER,
    payload: {scene: AppConstants.ROUTES.HOME, loading: true},
  });
  try {
    const mangasData = yield firebase
      .firestore()
      .collection(AppConstants.FIRESTORE.COLLECTION_MANGAS_LIST)
      .doc(AppConstants.FIRESTORE.DOC_MANGAS)
      .get();
    var promisesManga = [];
    mangasData._data.list.map((item, index) => {
      promisesManga.push(
        Storage.getItem(item.name, 'off').then(isFavorite => {
          return {
            name: item.name,
            status: item.status,
            imgUrl: item.imgUrl,
            authors: item.authors,
            lastChapter: item.lastChapter,
            number: index,
            isFavorite: isFavorite === 'on',
          };
        }),
      );
    });
    const mangas = yield Promise.all(promisesManga);
    yield put({
      type: AppConstants.EVENTS.SET_MANGAS_REDUX,
      payload: mangas,
    });
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
