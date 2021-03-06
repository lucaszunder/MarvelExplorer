import { call, put, all, takeLatest } from 'redux-saga/effects';

import { API, ts, hash, publicKey } from '../../../services/API';
import { searchSuccess } from './actions';

function* searchHero({ query, steps }) {
  const response = yield call(
    API.get,
    `characters?orderBy=name&${
      query !== '' ? `nameStartsWith=${query}` : ''
    }&limit=8&offset=${steps}&apikey=${publicKey}&ts=${ts}&hash=${hash}`
  );

  yield put(searchSuccess(response.data.data));
}
export default all([takeLatest('SEARCH_REQUEST', searchHero)]);
