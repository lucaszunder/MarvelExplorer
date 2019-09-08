import { call, put, all, takeLatest } from 'redux-saga/effects';

import { API, ts, hash, publicKey } from '../../../services/API';
import { seriesSuccess } from './actions';

function* searchSeries({ id, steps }) {
  const response = yield call(
    API.get,
    `characters/${id}/series?orderBy=title&limit=8&offset=${steps}&apikey=${publicKey}&ts=${ts}&hash=${hash}`
  );

  yield put(seriesSuccess(response.data.data));
}

export default all([takeLatest('SERIES_REQUEST', searchSeries)]);
