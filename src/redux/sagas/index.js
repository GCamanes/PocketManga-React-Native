import getMangasSaga from './manga/get-mangas-saga';
import loginSaga from './user/login-saga';
import {all} from 'redux-saga/effects';

const sagas = [
  getMangasSaga(),
  loginSaga(),
];

function* rootSaga() {
  yield all(sagas);
}

export default rootSaga;
