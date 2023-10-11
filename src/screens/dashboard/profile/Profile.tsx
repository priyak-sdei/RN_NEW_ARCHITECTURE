/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import GLOBALS from '@constants/index';
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const {FONTS} = GLOBALS;

function Profile(): JSX.Element {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>Welcome to Profile page</Text>
        </View>
    );
}

const styles = StyleSheet.create({});

export default Profile;