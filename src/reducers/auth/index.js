const initialState = {
  isLoggedIn: false,
  isLoading: false,
  loginData: null,
};

function authReducer(state = initialState, action) {
  switch (action.type) {
    case 'increment':
      return {...state, value: action.payload};
    case 'decrement':
      return {...state, value: state.value - 1};
    case 'incrementByAmount':
      return {...state, value: state.value + action.payload};
    default:
      return state;
  }
}
export default authReducer;
