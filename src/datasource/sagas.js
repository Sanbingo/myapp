import {call, put, takeEvery} from 'redux-saga/effects';
import {fetchData} from './api';

function* fetchUser(action) {
  console.warn('fethch', action);
  try {
    const user = yield call(fetchData, action?.payload?.userId);
    console.warn('user', user);
    yield put({type: 'USER_FETCH_SUCCEEDED', user: user?.data?.entries});
  } catch (e) {
    yield put({type: 'USER_FETCH_FAILED', message: e.message});
  }
}

function* mySaga() {
  yield takeEvery('USER_FETCH_REQUESTED', fetchUser);
}

export default mySaga;
