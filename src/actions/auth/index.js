import GLOBALS from '../../constants';
const {actionType} = GLOBALS;
export function login(data) {
  return async (dispatch, getState) => {
    dispatch({
      type: 'increment',
      payload: data,
    });
  };
}
