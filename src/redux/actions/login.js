import axios from 'axios';

export const AUTH_IS_FETCHING = 'AUTH_IS_FETCHING';
export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const AUTH_ERROR = 'AUTH_ERROR';

export function setAuthIsFetching() {
  return {type: AUTH_IS_FETCHING};
}

export function setAuthSuccess(payload) {
  return {type: AUTH_SUCCESS, payload};
}

export function setAuthError(error) {
  return {type: AUTH_ERROR, error};
}

export function authUser(userEmail, userPass) {
  return function(dispatch) {
    dispatch(setAuthIsFetching());

    const params = new URLSearchParams();
    params.append('client_id', process.env.REACT_APP_CLIENT_ID);
    params.append('client_secret', process.env.REACT_APP_CLIENT_SECRET);
    params.append('username', userEmail);
    params.append('password', userPass);
    params.append('grant_type', 'password');

    axios
      .post(process.env.REACT_APP_ENDPOINT, params)
      .then((_response) => {
        dispatch(setAuthSuccess('payload'));
      })
      .catch(() => {
        dispatch(setAuthError('msg.noUserFound'));
      });
  }
}
