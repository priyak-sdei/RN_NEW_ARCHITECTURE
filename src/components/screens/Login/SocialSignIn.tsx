import {AppleSignIn, FacebookSignIn, GoogleSignIn} from '@components/index';
import {User} from '@react-native-google-signin/google-signin';
import {AppleAuthRequestResponse} from '@type/index';
import React from 'react';
import {View} from 'react-native';
import {ProfileMap} from 'react-native-fbsdk-next';
interface SocialSignInProps {
    onFbSuccess: (userInfo: ProfileMap) => void;
    onGoogleSuccess: (userInfo: User) => void;
    onAppleSuccess: (userInfo: AppleAuthRequestResponse) => void;
}
const SocialSignIn: React.FC<SocialSignInProps> = ({
    onFbSuccess,
    onGoogleSuccess,
    onAppleSuccess,
}) => {
    return (
        <View>
            <GoogleSignIn onSignInSuccess={onGoogleSuccess} />
            <FacebookSignIn onSignInSuccess={onFbSuccess} />
            <AppleSignIn onSignInSuccess={onAppleSuccess} />
        </View>
    );
};

export default SocialSignIn;
