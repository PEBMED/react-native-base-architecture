// ...
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';

import reducers from './reducers';
import rootSagas from './sagas';

const configureStore = () => {
  const middleware = [];
  const sagaMiddleware = createSagaMiddleware();

  middleware.push(sagaMiddleware);

  if (process.env.NODE_ENV === 'development') {
    middleware.push(logger);
  }

  const store = createStore(reducers, applyMiddleware(...middleware));

  sagaMiddleware.run(rootSagas);
  return store;
};

export default configureStore;
