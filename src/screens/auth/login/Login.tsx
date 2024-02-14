import {IMAGES} from "@assets/images/index";
import {
    CustomButton,
    CustomHeader,
    CustomInput,
    CustomTextView,
    ParentContainer,
    SocialSignIn,
} from "@components/index";
import analytics from "@react-native-firebase/analytics";
import {StackParamList} from "@constants/index";
import {useAuth} from "./hooks/useAuth";
import {strings} from "@localization/Localization";
import {Icon} from "@rneui/themed";
import GLOBAL_THEME from "@theme/index";
import React, {useEffect, useState} from "react";
import {Image, TouchableOpacity, View} from "react-native";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";
import styles from "./Login.styles";
const {COLORS, FONTS, moderateScale} = GLOBAL_THEME;
import {useNavigation} from "@react-navigation/native";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import crashlytics from "@react-native-firebase/crashlytics";

import {
    useAllPostQuery,
    useCurrentPostMutation,
    useUpdateCurrentPostMutation,
} from "@/redux/api/userService";

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

    // const {data, isLoading, isSuccess, isError, error} = useAllPostQuery();
    const [currentPost, {data}] = useCurrentPostMutation();
    const [updateCurrentPost] = useUpdateCurrentPostMutation();
    const {username, password, setUsername, setPassword, onSignInPress} = useAuth();
    console.log(data, "data........");
    crashlytics().log("Login scrren enter");
    useEffect(() => {
        crashlytics().log("App mounted.");
        crashlytics().setAttributes({
            role: "admin",
            followers: "13",
            email: "user.email",
            username: "user.username",
        });
    }, []);
    return (
        <ParentContainer>
            <CustomHeader title={strings.login.signIn} />
            <KeyboardAwareScrollView
                enableAutomaticScroll={true}
                contentContainerStyle={styles.mainContainer}>
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
                    <TouchableOpacity style={styles.forgotContainer}>
                        <CustomTextView text={strings.login.forgotPassword} />
                    </TouchableOpacity>

                    <CustomButton
                        title={strings.login.signIn}
                        btnIcon={signInIcon}
                        onBtnPress={async () => {
                            navigation.navigate("Home");
                            // await updateCurrentPost({
                            //     id: 1,
                            //     title: 'foo',
                            //     body: 'bar',
                            //     userId: 1,
                            // });
                        }}
                    />

                    <TouchableOpacity
                        style={styles.signUpContainer}
                        onPress={async () => {
                            console.log("data", "data");
                            try {
                                await analytics().logEvent("basket", {
                                    id: 3745092,
                                    item: "mens grey t-shirt",
                                    description: ["round neck", "long sleeved"],
                                    size: "L",
                                });
                            } catch (error) {
                                console.log(error, "error");
                            }

                            // crashlytics().crash();
                            // navigation.navigate('SignUp');
                            // await currentPost({
                            //     id: 1,
                            //     title: 'Meeee',
                            //     body: 'Mee11',
                            //     userId: 1,
                            // });
                        }}>
                        <CustomTextView attr={{h3: true}} text={strings.login.account} />
                        <CustomTextView
                            attr={{h3: true}}
                            customh3Style={styles.accountText}
                            text={` ${strings.login.signup}!`}
                        />
                    </TouchableOpacity>

                    <SocialSignIn
                        onFbSuccess={res => console.log(res, "res fb")}
                        onGoogleSuccess={res => console.log(res, "res onGoogleSuccess")}
                        onAppleSuccess={res => console.log(res, "res onAppleSuccess")}
                    />
                </View>
            </KeyboardAwareScrollView>
        </ParentContainer>
    );
}

export default Login;
