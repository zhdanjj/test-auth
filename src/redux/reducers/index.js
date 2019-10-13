import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { loginReducer } from '@/redux/reducers/login';
import { localeReducer } from '@/redux/reducers/locale';

export default combineReducers({
  login: loginReducer,
  locale: localeReducer,
  form: formReducer,
});
