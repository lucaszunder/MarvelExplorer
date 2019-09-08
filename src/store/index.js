import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from './modules/logger';
import rootSaga from './modules/rootSaga';
import rootReducer from './modules/rootReducer';

const sagaMiddleware = createSagaMiddleware();

const middleware = applyMiddleware(sagaMiddleware, logger);

const store = createStore(rootReducer, middleware);

sagaMiddleware.run(rootSaga);

export default store;
