import axios from 'axios';

export const RESET_AUTH_ERROR = 'RESET_AUTH_ERROR';
export function resetAuthError() {
  return { type: RESET_AUTH_ERROR };
}

export const AUTH_USER = 'AUTH_USER';
export function authUser(userEmail, userPass) {
  const params = new URLSearchParams();
  params.append('client_id', process.env.REACT_APP_CLIENT_ID);
  params.append('client_secret', process.env.REACT_APP_CLIENT_SECRET);
  params.append('username', userEmail);
  params.append('password', userPass);
  params.append('grant_type', 'password');

  return {
    type: AUTH_USER,
    payload: axios.post(process.env.REACT_APP_ENDPOINT, params),
  }
}
