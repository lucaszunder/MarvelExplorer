import { all } from 'redux-saga/effects';

import heroes from './heroes/sagas';
import series from './series/sagas';

export default function* rootSaga() {
  return yield all([heroes, series]);
}
