import {
  AUTH_USER_REQUEST,
  AUTH_USER_SUCCESS,
  AUTH_USER_FAILURE,
  RESET_AUTH_ERROR
} from '@/redux/actions/login';

const initialState = {
  isFetching: false,
  isAuth: false,
  errMsg: '',
};

export function loginReducer(state = initialState, action) {
  switch (action.type) {
    case AUTH_USER_REQUEST:
      return {...state, isFetching: true};
    case AUTH_USER_SUCCESS: 
      return {
        ...state, 
        isFetching: false,
        isAuth: true,
      };
    case AUTH_USER_FAILURE:
      return {
        ...state,
        isFetching: false,
        errMsg: 'msg.noUserFound',
      };
    case RESET_AUTH_ERROR:
      return {
        ...state,
        errMsg: '',
      };
    default: return state;
  }
};
