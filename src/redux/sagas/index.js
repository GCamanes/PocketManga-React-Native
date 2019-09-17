import exitSaga from './user/exit-saga';
import getChaptersSaga from './chapter/get-chapters-saga';
import getMangasSaga from './manga/get-mangas-saga';
import getScanInfosSaga from './scan/get-scan-infos-saga';
import getScansSaga from './scan/get-scans-saga';
import loginSaga from './user/login-saga';
import logoutSaga from './user/logout-saga';
import markChapterReadSaga from './chapter/mark-chapter-read-saga';
import markMangaFavoriteSaga from './manga/mark-manga-favorite-saga';
import {all} from 'redux-saga/effects';

const sagas = [
  exitSaga(),
  getChaptersSaga(),
  getMangasSaga(),
  getScanInfosSaga(),
  getScansSaga(),
  loginSaga(),
  logoutSaga(),
  markChapterReadSaga(),
  markMangaFavoriteSaga(),
];

function* rootSaga() {
  yield all(sagas);
}

export default rootSaga;
