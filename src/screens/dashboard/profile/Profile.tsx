/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import GLOBALS from '@constants/index';
import React, {useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
const {FONTS, COLORS} = GLOBALS;
import {setMessage} from 'src/redux/slices/userSlice';
import CustomHeader from '@components/common/CustomHeader';
import {Icon} from '@rneui/themed';
import styles from './Profile.style';
function Profile(props): JSX.Element {
    const dispatch = useDispatch();
    const {message} = useSelector((state: any) => state.user);

    useEffect(() => {
        dispatch(setMessage('Update....'));
    }, []);
    useEffect(() => {
        console.log(message, 'UpdateMessageee...');
    }, [message]);
    return (
        <View style={styles.mainContainer}>
            <CustomHeader
                onRightIconPress={() => console.log('right click')}
                onLeftIconPress={() => props.navigation.openDrawer()}
                headerTitle={'Profile'}
                showBack={false}
                leftIcon={<Icon name="menu" color={COLORS.WHITE} type="ionicon" />}
                rightIcon={[<Icon key={1} name="logout" color={COLORS.WHITE} type="material" />]}
            />
            <Text>Welcome to Profile page</Text>
        </View>
    );
}

export default Profile;
