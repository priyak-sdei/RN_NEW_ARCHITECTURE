import {IMAGES} from '@assets/images/index';
import {CustomButton, CustomHeader, CustomInput, ParentContainer} from '@components/index';
import React, {useEffect} from 'react';
import {Image, View} from 'react-native';
import {strings} from '@localization/Localization';
import {Icon} from '@rneui/themed';
import COLORS from '@theme/colors';
import {moderateScale} from '@theme/common';
import styles from './ForgotPassword.styles';
import {useForgotPassword} from './hooks/useForgotPassword';

const leftIcon = (
    <Icon
        name="account-outline"
        type="material-community"
        color={COLORS.THEME}
        size={moderateScale(20)}
    />
);
function ForgotPassword(): JSX.Element {
    const {email, setEmail, onForgotPress, isLoading} = useForgotPassword();

    return (
        <View style={styles.mainContainer}>
            <ParentContainer isLoading={isLoading}>
                <CustomHeader title={strings.login.forgot} showBack={true} />
                <View style={styles.outerContainer}>
                    <Image
                        source={IMAGES.logoShort}
                        style={styles.logoStyle}
                        resizeMode="contain"
                    />
                    <View style={styles.innerContainer}>
                        <CustomInput
                            value={email}
                            label={strings.signUp.email}
                            placeholder={strings.login.usernameHint}
                            leftIcon={leftIcon}
                            onChangeText={setEmail}
                        />
                        <CustomButton
                            title={strings.common.proceed}
                            onBtnPress={() => onForgotPress()}
                        />
                    </View>
                </View>
            </ParentContainer>
        </View>
    );
}

export default ForgotPassword;
