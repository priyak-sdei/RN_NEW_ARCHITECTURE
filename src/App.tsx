/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import 'react-native-gesture-handler';
import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Provider} from 'react-redux';
import store from './redux/store';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

import Navigator from './navigation/Navigator';
GoogleSignin.configure({
    iosClientId: '191749400981-sboe438b8rk5dvhfk66rhkkikvu79gt1.apps.googleusercontent.com',
    webClientId: '191749400981-hg38o6jkvk04tb5qp7pe94t203v1nf9h.apps.googleusercontent.com', // Replace with your web client ID
});
console.log(store.getState(), 'Store.1...');
function App(): JSX.Element {
    return (
        <Provider store={store}>
            <View style={styles.container}>
                <Navigator />
            </View>
        </Provider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default App;
