import {
  AUTH_IS_FETCHING,
  AUTH_SUCCESS,
  AUTH_ERROR,
  SET_LOCALE,
} from '../actions'

const initialState = {
  isFetching: false,
  isAuth: false,
  errMsg: '',
  locale: 'en'
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case AUTH_IS_FETCHING:
      return {...state, isFetching: true};
    case AUTH_SUCCESS:
      return {
        ...state, 
        isFetching: false,
        isAuth: true,
      };
    case AUTH_ERROR:
      return {
        ...state,
        isFetching: false,
        errMsg: action.error
      };
    case SET_LOCALE:
      return {
        ...state,
        locale: action.locale
      }

    default: return state;
  }
};

export default rootReducer;
