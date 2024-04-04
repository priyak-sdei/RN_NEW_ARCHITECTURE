import {IMAGES} from '@assets/images/index';
import {
    CustomButton,
    CustomHeader,
    CustomInput,
    CustomTextView,
    ParentContainer,
    SocialSignIn,
} from '@components/index';
import {StackParamList} from '@constants/index';
import {strings} from '@localization/Localization';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Icon} from '@rneui/themed';
import GLOBAL_THEME from '@theme/index';
import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import styles from './Login.styles';
import {useAuth} from './hooks/useAuth';
const {COLORS, FONTS, moderateScale} = GLOBAL_THEME;
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
function Login(): JSX.Element {
    const navigation = useNavigation<NativeStackNavigationProp<StackParamList>>();

    const {username, password, setUsername, setPassword, onSignInPress, isLoading} = useAuth();

    return (
        <ParentContainer
            isLoading={isLoading}
            keyboardAvoidingView={true}
            keyboardContentContainerStyle={styles.mainContainer}>
            <CustomHeader title={strings.login.signIn} />
            <View style={styles.outerContainer}>
                <Image source={IMAGES.logoShort} style={styles.logoStyle} resizeMode="contain" />
                <View style={styles.innerContainer}>
                    <CustomInput
                        value={username}
                        label={strings.login.username}
                        placeholder={strings.login.usernameHint}
                        leftIcon={leftIcon}
                        onChangeText={setUsername}
                    />
                    <CustomInput
                        value={password}
                        label={strings.login.password}
                        placeholder={strings.login.passwordHint}
                        leftIcon={leftIcon}
                        onChangeText={setPassword}
                    />
                    <TouchableOpacity
                        style={styles.forgotContainer}
                        onPress={() => navigation.navigate('ForgotPassword')}>
                        <CustomTextView text={strings.login.forgotPassword} />
                    </TouchableOpacity>

                    <CustomButton
                        title={strings.login.signIn}
                        btnIcon={signInIcon}
                        onBtnPress={async () => onSignInPress()}
                    />
                    <TouchableOpacity
                        style={styles.signUpContainer}
                        onPress={async () => {
                            navigation.navigate('SignUp');
                        }}>
                        <CustomTextView attr={{h3: true}} text={strings.login.account} />
                        <CustomTextView
                            attr={{h3: true}}
                            customh3Style={styles.accountText}
                            text={` ${strings.login.signup}!`}
                        />
                    </TouchableOpacity>

                    <SocialSignIn
                        onFbSuccess={res => console.log(res, 'res fb')}
                        onGoogleSuccess={res => console.log(res, 'res onGoogleSuccess')}
                        onAppleSuccess={res => console.log(res, 'res onAppleSuccess')}
                    />
                </View>
            </View>
        </ParentContainer>
    );
}

export default Login;
