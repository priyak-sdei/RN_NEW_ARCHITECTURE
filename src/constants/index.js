import actionType from './actions';
import Fonts from './fonts';
import COLOR from './colors';
import Strings from './string';
import API_URL from './urls';
export default {
  BASE_URL: '',
  NETWORK_STATUS: {
    SUCCESS: 200,
    FAILURE: 400,
    AUTH_ERROR: 401,
    SESSION_ERROR: 417,
    SERVER_ERROR: 500,
  },
  actionType,
  Fonts,
  COLOR,
  Strings,
  API_URL,
};
