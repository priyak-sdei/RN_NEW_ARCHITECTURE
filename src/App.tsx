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

import Navigator from './navigation/Navigator';

console.log(store.getState(), 'Store....');
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
