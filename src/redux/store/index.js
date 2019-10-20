import { applyMiddleware, createStore } from 'redux';
import promiseMiddleware from '@/redux/middlewares/promise';
import rootReducer from '@/redux/reducers';

const store = createStore(
  rootReducer,
  applyMiddleware(promiseMiddleware),
);

export default store;
