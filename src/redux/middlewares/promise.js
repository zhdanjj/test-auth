import isPromise from 'is-promise';

const middleware = ({ dispatch }) => (next) => (action) => {
  if (isPromise(action.payload) && action.meta && action.meta.types) {
    dispatch({type: action.meta.types.request});
    return action.payload
      .then(payload => {
        dispatch({type: action.meta.types.success, payload})
      })
      .catch(error => {
        dispatch({
          type: action.meta.types.failure,
          payload: error,
          error: true
        });
        return Promise.reject(error);
      })
  } else {
    return next(action);
  }
}

export default middleware;
