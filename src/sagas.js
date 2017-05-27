import fetch from 'isomorphic-fetch';
import { receivePosts, REQUEST_POSTS } from './actions';
import { call, fork, takeLatest, put } from 'redux-saga/effects';

function fetchCityCodes(prefCode) {
  const URL = `http://www.land.mlit.go.jp/webland/api/CitySearch?area=${prefCode}`;
  return fetch(URL)
    .then(response => response.json())
    .then(json => {
      const data = json.data;
      return { data };
    });
}

function* fetchPostsIfNeeded(action) {
  const { data } = yield call(fetchCityCodes, action.prefCode);
  yield put(receivePosts(data));
}

export default function* rootSaga() {
  yield takeLatest(REQUEST_POSTS, fetchPostsIfNeeded);
}