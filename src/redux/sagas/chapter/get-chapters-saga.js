import firebase from 'react-native-firebase';
import {Actions} from 'react-native-router-flux';
import {put, takeLatest} from '@redux-saga/core/effects';
import AppConstants from '../../../app/app.constants';
import Storage from '../../../utils/storage';

const getChapterNumber = chapter => {
  const indexOfUnderscore = chapter.indexOf('_');
  const number = chapter.substring(indexOfUnderscore + 1, chapter.length);
  const lengthStr = number.length;
  if (number.substring(0, 3) === '000') {
    return number.substring(3, lengthStr);
  } else if (number.substring(0, 2) === '00') {
    return number.substring(2, lengthStr);
  } else if (number[0] === '0') {
    return number.substring(1, lengthStr);
  } else {
    return number;
  }
};

export function* getChaptersSaga(action) {
  yield put({
    type: AppConstants.EVENTS.SET_LOADER,
    payload: {scene: AppConstants.ROUTES.CHAPTERS, loading: true},
  });
  try {
    Actions.jump(AppConstants.ROUTES.CHAPTERS, {
      title: action.payload,
      manga: action.payload,
    });
    const chaptersData = yield firebase
      .firestore()
      .collection(AppConstants.FIRESTORE.COLLECTION_MANGAS_CHAPTERS)
      .doc(action.payload)
      .get();
    var promisesChapter = [];
    chaptersData._data.chaptersList.map(item => {
      promisesChapter.push(
        Storage.getItem(item.name, 'off').then(isChapterRead => {
          return {
            id: item,
            number: getChapterNumber(item),
            isChapterRead: isChapterRead === 'on',
          };
        }),
      );
    });
    const chapters = yield Promise.all(promisesChapter);
    yield put({
      type: AppConstants.EVENTS.SET_CHAPTERS_REDUX,
      payload: chapters,
    });
  } catch (error) {
    console.log('\nerror is getChaptersSaga', error);
  }
  yield put({
    type: AppConstants.EVENTS.SET_LOADER,
    payload: {scene: AppConstants.ROUTES.CHAPTERS, loading: false},
  });
}

/**
 * Watch event saga.
 *
 * @returns {IterableIterator<ForkEffect>}
 */
export default function* watch() {
  yield takeLatest(AppConstants.EVENTS.GET_CHAPTERS_SAGA, getChaptersSaga);
}
