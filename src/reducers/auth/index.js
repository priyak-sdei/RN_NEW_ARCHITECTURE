const initialState = {
  isLoggedIn: false,
  isLoading: false,
  loginData: null,
  total: 0,
  event_list: [],
  value: 0,
};

function authReducer(state = initialState, action) {
  switch (action.type) {
    case 'increment':
      return { ...state, value: action.payload };
    case 'add':
      return { ...state, total: action.payload.num1 + action.payload.num2 };
    case 'addLoginData':
      return { ...state, loginData: action.payload };
    case 'addEvent':
      return { ...state, event_list: action.payload };
    default:
      return state;
  }
}
export default authReducer;
