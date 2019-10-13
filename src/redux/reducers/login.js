import {
  AUTH_IS_FETCHING,
  AUTH_SUCCESS,
  AUTH_ERROR,
} from '@/redux/actions/login';

const initialState = {
  isFetching: false,
  isAuth: false,
  errMsg: '',
};

export function loginReducer(state = initialState, action) {
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
    default: return state;
  }
};
