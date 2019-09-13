import getMangasSaga from './manga/get-mangas-saga';
import loginSaga from './user/login-saga';
import logoutSaga from './user/logout-saga';
import markMangaFavoriteSaga from './manga/mark-manga-favorite-saga';
import {all} from 'redux-saga/effects';

const sagas = [
  getMangasSaga(),
  loginSaga(),
  logoutSaga(),
  markMangaFavoriteSaga(),
];

function* rootSaga() {
  yield all(sagas);
}

export default rootSaga;
