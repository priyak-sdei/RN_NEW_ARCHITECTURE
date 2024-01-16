import {CustomButton} from '@components/index';
import {strings} from '@localization/Localization';
import {Icon} from '@rneui/themed';
import COLORS from '@theme/colors';
import {moderateScale} from '@theme/common';
import React from 'react';
import {View} from 'react-native';
import {LoginManager, Profile} from 'react-native-fbsdk-next';
import {styles} from './FacebookSignin.styles';
const signInIcon = (
    <Icon name="facebook" type="Entypo" color={COLORS.WHITE} size={moderateScale(25)} />
);
interface FacebookSignInProps {
    onSignInSuccess: (userInfo) => void;
}
const FacebookSignIn: React.FC<FacebookSignInProps> = ({onSignInSuccess}) => {
    /**Handle Sign In button click */
    const signIn = async () => {
        try {
            const permissionStatus = await LoginManager.logInWithPermissions(['public_profile']);
            if (permissionStatus.isCancelled) {
                console.log('Login cancelled');
            } else {
                const userInfo = await Profile.getCurrentProfile();
                handleSignInSuccess(userInfo);
            }
        } catch (error) {
            console.log('Login fail with error: ' + error);
        }
    };

    /**Handle user data on succesfull login */
    function handleSignInSuccess(userInfo: Profile | null): void {
        onSignInSuccess(userInfo);
    }

    /** Function to get user access token ****
    function getUserAccessToken(): void {
        AccessToken.getCurrentAccessToken().then(data => {
            console.log(data?.accessToken.toString());
        });
    }
    /**Handle user logout
    function handleUserLogOut() {
        LoginManager.logOut();
    }
   */
    return (
        <View>
            <CustomButton
                customButtonStyle={styles.buttonStyle}
                title={strings.login.fbLogin}
                btnIcon={signInIcon}
                onBtnPress={signIn}
            />
        </View>
    );
};

export default FacebookSignIn;
