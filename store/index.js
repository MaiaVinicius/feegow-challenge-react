import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import appRedux from './reducer';
import appSagas from './sagas';

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(appRedux, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(appSagas);
