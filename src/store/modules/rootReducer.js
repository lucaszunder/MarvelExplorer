import { combineReducers } from 'redux';

import heroes from './heroes/reducer';
import series from './series/reducer';

export default combineReducers({
  heroes,
  series,
});
