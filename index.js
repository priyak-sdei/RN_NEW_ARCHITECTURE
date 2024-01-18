/**
 * @format
 */

import {AppRegistry} from 'react-native';
import Login from './src/screens/auth/login/Login';
import {name as appName} from './app.json';
import App from 'src/App';
import {decode, encode} from 'base-64';
// Configure base-64 library
if (!global.btoa) {
    global.btoa = encode;
}

if (!global.atob) {
    global.atob = decode;
}
AppRegistry.registerComponent(appName, () => App);
