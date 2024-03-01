import {ParentContainer} from '@components/index';
import {IMAGES} from '@assets/images/index';
import React, {useRef, useEffect} from 'react';
import {Text, View, Image, Animated, Button} from 'react-native';
import styles from './ForgotPassword.styles';
import {Easing} from 'react-native-reanimated';
import {createTable, insertData, getData, updateData, deleteData} from '@utils/sqliteDb';

function ForgotPassword(): JSX.Element {
    return (
        <ParentContainer style={styles.mainContainer}>
            <View></View>
        </ParentContainer>
    );
}

export default ForgotPassword;
function createUserTable() {
    throw new Error('Function not implemented.');
}
