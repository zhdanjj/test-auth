import {
  AUTH_USER,
  RESET_AUTH_ERROR
} from '@/redux/actions/login';

const initialState = {
  isFetching: false,
  isAuth: false,
  errMsg: '',
};

export function loginReducer(state = initialState, action) {
  switch (action.type) {
    case AUTH_USER:
      if (!action.payload) {
        return {...state, isFetching: true};
      } else if (action.error) {
        return {
          ...state,
          isFetching: false,
          errMsg: 'msg.noUserFound',
        }
      } else {
        return {
          ...state, 
          isFetching: false,
          isAuth: true,
        };
      }
    case RESET_AUTH_ERROR:
      return {
        ...state,
        errMsg: ''
      }
    default: return state;
  }
};
