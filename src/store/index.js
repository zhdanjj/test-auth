import { createStore, combineReducers } from 'redux';
import app from '../reducers/index';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  app,
  form: formReducer
});

const store = createStore(rootReducer);

window.store = store

export default store;
