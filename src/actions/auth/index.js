import GLOBALS from '../../constants';
const { actionType } = GLOBALS;
export function login(data) {
  return async (dispatch, getState) => {
    dispatch({
      type: 'increment',
      payload: data,
    });
  };
}

export function addLoginUserData(data) {
  return async (dispatch, getState) => {
    dispatch({
      type: 'addLoginData',
      payload: data,
    });
  };
}

export function addition() {
  return async (dispatch, getState) => {
    dispatch({
      type: 'add',
      payload: { num1: 5, num2: 4 },
    });
  };
}

export function saveEvent(data) {
  return async (dispatch) => {
    dispatch({
      type: 'addEvent',
      payload: data,
    });
  };
}
