/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import GLOBAL_THEME from '@theme/index';
import React, {useEffect, useState} from 'react';
import {ActivityIndicator, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
const {COLORS} = GLOBAL_THEME;
// import CustomHeader from '@components/common/CustomHeader';

import {useLazyLoginQuery} from '@/redux/api/authService';
import styles from './Profile.style';

type requestBodyType = {
    userId: number;
    title: string;
    body: string;
};

const requestBody: requestBodyType = {
    title: 'foo',
    body: 'bar',
    userId: 0,
};
function Profile(props): JSX.Element {
    const dispatch = useDispatch();
    const {message} = useSelector((state: any) => state.user);
    const [isLoading, setIsLoading] = useState(true);
    const [Login] = useLazyLoginQuery();

    const getTodoData = async () => {
        try {
            const response = await Login({});
            setIsLoading(false);
            console.log('Response ----->', response);
        } catch (error) {
            console.log('Error ----->', error);
            setIsLoading(false);
        }
    };

    useEffect(() => {
        getTodoData();
    }, []);
    useEffect(() => {
        console.log(message, 'UpdateMessageee...');
    }, [message]);

    return (
        <View style={styles.mainContainer}>
            {/* <CustomHeader
                onRightIconPress={() => console.log('right click')}
                onLeftIconPress={() => props.navigation.openDrawer()}
                headerTitle={'Profile'}
                showBack={false}
                leftIcon={<Icon name="menu" color={COLORS.WHITE} type="ionicon" />}
                rightIcon={[<Icon key={1} name="logout" color={COLORS.WHITE} type="material" />]}
            /> */}
            {isLoading ? (
                <ActivityIndicator
                    size={'large'}
                    color={COLORS.THEME}
                    style={styles.activityIndicator}
                />
            ) : (
                <Text>Welcome to Profile page</Text>
            )}
        </View>
    );
}

export default Profile;
