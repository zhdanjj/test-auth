import isPromise from 'is-promise';

const middleware = ({ dispatch }) => (next) => (action) => {
  if (isPromise(action.payload)) {
    dispatch({type: action.type});
    return action.payload
      .then(payload => {
        dispatch({ ...action, payload })
      })
      .catch(error => {
        dispatch({ ...action, payload: error, error: true });
        return Promise.reject(error);
      })
  } else {
    return next(action);
  }
}

export default middleware;
