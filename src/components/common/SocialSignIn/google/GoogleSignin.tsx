import {View} from 'react-native';
import React from 'react';
import {
    GoogleSignin,
    GoogleSigninButton,
    User,
    statusCodes,
    NativeModuleError,
    GoogleSigninButtonProps,
} from '@react-native-google-signin/google-signin';
import {styles} from './GoogleSignin.styles';

const GoogleSignIn: React.FC = () => {
    /**Handle Sign In button click */
    const signIn = async () => {
        try {
            await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn();
            handleSignInSuccess(userInfo as User);
        } catch (error) {
            handleSignInError(error as NativeModuleError);
        }
    };

    /**Handle user data on succesfull login */
    function handleSignInSuccess(userInfo: User): void {
        console.log(userInfo, 'handleSignInSuccess.....');
    }

    /**Handle sign in errors based on errro code */
    function handleSignInError(error: NativeModuleError): void {
        console.log(error, 'error...');
        switch (error.code) {
            case statusCodes.SIGN_IN_CANCELLED:
                // User cancelled the sign-in process
                break;
            case statusCodes.IN_PROGRESS:
                // Sign-in is in progress already
                break;
            case statusCodes.PLAY_SERVICES_NOT_AVAILABLE:
                // Play services not available or outdated
                break;
            default:
                // Some other error
                console.error('Google Sign-In Error:', error);
        }
    }

    const googleSignInButtonProps: GoogleSigninButtonProps = {
        style: styles.googleSignInButton,
        size: GoogleSigninButton.Size.Wide,
        color: GoogleSigninButton.Color.Dark,
        onPress: signIn,
    };

    return (
        <View>
            <GoogleSigninButton {...googleSignInButtonProps} />
        </View>
    );
};

export default GoogleSignIn;
