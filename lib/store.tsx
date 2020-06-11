import { createStore, applyMiddleware, Store } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware, { Task } from 'redux-saga';
import { MakeStore, Context, createWrapper } from 'next-redux-wrapper';
import rootReducer from './reducer';
import rootSaga from './saga';

export interface SagaStore extends Store {
  sagaTask: Task;
}

const makeStore: MakeStore = (context: Context) => {
  // 1: Create the middleware
  const sagaMiddleware = createSagaMiddleware();

  // 2: Add an extra parameter for applying middleware:
  const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware, logger),
  );
  // 3: Run your sagas on server
  (store as SagaStore).sagaTask = sagaMiddleware.run(rootSaga);

  // 4: now return the store:
  return store;
};

export const wrapper = createWrapper(makeStore);
