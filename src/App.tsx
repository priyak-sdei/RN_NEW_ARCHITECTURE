/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import 'react-native-gesture-handler';
import React from 'react';
import {View, StyleSheet} from 'react-native';

import Navigator from './navigation/Navigator';

function App(): JSX.Element {
    return (
        <View style={styles.container}>
            <Navigator />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default App;
