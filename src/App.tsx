/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';
import {View, StyleSheet} from 'react-native';
import 'react-native-gesture-handler';
import Navigator from './navigation/Navigator';

function App(): JSX.Element {
    return (
        <View style={{flex: 1}}>
            <Navigator />
        </View>
    );
}

const styles = StyleSheet.create({});

export default App;
