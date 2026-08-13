import {
  call,
  put,
  takeLatest,
} from 'redux-saga/effects';

import {
  fetchUsersRequest,
  fetchUsersSuccess,
  fetchUsersFailure,
} from './userSlice';

import {fetchUsersApi} from '../../api/userApi';

function* fetchUsersSaga(): Generator {
  try {
    const users: any = yield call(fetchUsersApi);

    yield put(fetchUsersSuccess(users));
  } catch (error) {
    yield put(
      fetchUsersFailure('Failed to fetch users'),
    );
  }
}

export function* userSaga(): Generator {
  yield takeLatest(
    fetchUsersRequest.type,
    fetchUsersSaga,
  );
}