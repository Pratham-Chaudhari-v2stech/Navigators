import {all} from 'redux-saga/effects';
import {userSaga} from './users/userSaga';

export function* rootSaga() {
  yield all([
    userSaga(),
  ]);
}