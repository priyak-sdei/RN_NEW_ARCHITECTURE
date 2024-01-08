import {IMAGES} from '@assets/images/index';
import {
    CustomButton,
    CustomHeader,
    CustomInput,
    CustomTextView,
    ParentContainer,
} from '@components/index';
import {useAuth} from './hooks/useAuth';
import {strings} from '@localization/Localization';
import {Icon} from '@rneui/themed';
import GLOBAL_THEME from '@theme/index';
import React, {useEffect, useState} from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import styles from './Login.styles';
const {COLORS, FONTS, moderateScale} = GLOBAL_THEME;

import {
    useAllPostQuery,
    useCurrentPostMutation,
    useUpdateCurrentPostMutation,
} from '@/redux/service/userService';

const leftIcon = (
    <Icon
        name="account-outline"
        type="material-community"
        color={COLORS.THEME}
        size={moderateScale(20)}
    />
);
const signInIcon = (
    <Icon name="login" type="simple-line-icon" color={COLORS.WHITE} size={moderateScale(15)} />
);
function Login(_props): JSX.Element {
    // const {data, isLoading, isSuccess, isError, error} = useAllPostQuery();
    const [currentPost, {data}] = useCurrentPostMutation();
    const [updateCurrentPost] = useUpdateCurrentPostMutation();
    const {username, password, setUsername, setPassword, onSignInPress} = useAuth();
    console.log(data, 'data........');

    useEffect(() => {
        console.log('hiiiii', data);
    }, []);
    return (
        <ParentContainer>
            <CustomHeader title={strings.login.signIn} />
            <KeyboardAwareScrollView
                enableAutomaticScroll={true}
                contentContainerStyle={styles.mainContainer}>
                <View style={styles.innerContainer}>
                    <Image
                        source={IMAGES.logoShort}
                        style={styles.logoStyle}
                        resizeMode="contain"
                    />
                    <CustomInput
                        value={username}
                        errorMessage={''}
                        label={strings.login.username}
                        placeholder={strings.login.usernameHint}
                        leftIcon={leftIcon}
                        onChangeText={setUsername}
                    />
                    <CustomInput
                        value={password}
                        errorMessage={''}
                        label={strings.login.password}
                        placeholder={strings.login.passwordHint}
                        leftIcon={leftIcon}
                        onChangeText={setPassword}
                    />
                    <TouchableOpacity style={styles.forgotContainer}>
                        <CustomTextView text={strings.login.forgotPassword} />
                    </TouchableOpacity>

                    <CustomButton
                        customContainerStyle={{marginTop: 20}}
                        title={strings.login.signIn}
                        btnIcon={signInIcon}
                        //  onBtnPress={onSignInPress}
                        onBtnPress={async () => {
                            await updateCurrentPost({
                                id: 1,
                                title: 'foo',
                                body: 'bar',
                                userId: 1,
                            });
                        }}
                    />
                    <TouchableOpacity
                        style={styles.signUpContainer}
                        onPress={async () => {
                            await currentPost({
                                id: 1,
                                title: 'Meeee',
                                body: 'Mee11',
                                userId: 1,
                            });
                        }}>
                        <CustomTextView attr={{h3: true}} text={strings.login.account} />
                        <CustomTextView
                            attr={{h3: true}}
                            customh3Style={styles.accountText}
                            text={` ${strings.login.signup}!`}
                        />
                    </TouchableOpacity>
                </View>
            </KeyboardAwareScrollView>
        </ParentContainer>
    );
}

export default Login;
