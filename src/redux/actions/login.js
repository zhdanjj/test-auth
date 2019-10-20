import axios from 'axios';

export const RESET_AUTH_ERROR = 'RESET_AUTH_ERROR';
export function resetAuthError() {
  return { type: RESET_AUTH_ERROR };
}

export const AUTH_USER_REQUEST = 'AUTH_USER_REQUEST';
export const AUTH_USER_SUCCESS = 'AUTH_USER_SUCCESS';
export const AUTH_USER_FAILURE = 'AUTH_USER_FAILURE';

export function authUser(userEmail, userPass) {
  const params = new URLSearchParams();
  params.append('client_id', process.env.REACT_APP_CLIENT_ID);
  params.append('client_secret', process.env.REACT_APP_CLIENT_SECRET);
  params.append('username', userEmail);
  params.append('password', userPass);
  params.append('grant_type', 'password');

  return {
    meta: {
      types: {
        request: AUTH_USER_REQUEST,
        success: AUTH_USER_SUCCESS,
        failure: AUTH_USER_FAILURE,
      },
    },
    payload: axios.post(process.env.REACT_APP_ENDPOINT, params),
  }
}
