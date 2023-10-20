/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import GLOBALS from '@constants/index';
import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';

const {FONTS} = GLOBALS;

function Home(props): JSX.Element {
    console.log(props, 'kooooooo');

    useEffect(() => {
        //  props.navigation.openDrawer();
        return () => {};
    }, []);

    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>Welcome to home page</Text>
        </View>
    );
}

const styles = StyleSheet.create({});

export default Home;
