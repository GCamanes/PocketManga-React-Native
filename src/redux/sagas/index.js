import loginSaga from './user/login-saga';

import { all } from 'redux-saga/effects';

const sagas = [
  loginSaga(),
];

function* rootSaga() {
  yield all(sagas);
}

export default rootSaga;
