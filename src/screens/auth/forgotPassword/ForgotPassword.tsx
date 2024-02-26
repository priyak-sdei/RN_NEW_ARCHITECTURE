import {ParentContainer} from "@components/index";
import {IMAGES} from "@assets/images/index";
import React, {useRef, useEffect} from "react";
import {Text, View, Image, Animated, Button} from "react-native";
import styles from "./ForgotPassword.styles";
import {Easing} from "react-native-reanimated";
function ForgotPassword(): JSX.Element {
    const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0

    const scaleValue = useRef(new Animated.Value(1)).current;
    const opacityValue = useRef(new Animated.Value(1)).current;

    const a = new Animated.Value(1);
    const b = Animated.divide(1, a);

    console.log(new Animated.Value(0), "new Animated.Value");
    console.log(fadeAnim, scaleValue, opacityValue, "fadeAnim");
    useEffect(() => {
        applyFadeOutAnimation();
    }, [fadeAnim]);

    function applyFadeOutAnimation() {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 10000,
            useNativeDriver: true,
        }).start();
    }

    const composingAnimation = () => {
        // Compose animations using Animated.parallel or Animated.sequence
        Animated.parallel([
            Animated.timing(scaleValue, {
                toValue: 3,
                duration: 10000,
                useNativeDriver: false, // Set to true if possible
            }),
            Animated.timing(opacityValue, {
                toValue: 0,
                duration: 10000,
                useNativeDriver: false, // Set to true if possible
            }),
        ]).start();
    };

    const combineAnimation = () => {
        Animated.spring(a, {
            toValue: 2,
            useNativeDriver: true,
        }).start();
    };

    return (
        <ParentContainer style={styles.mainContainer}>
            <View>
                <Animated.Image
                    source={IMAGES.logoShort}
                    style={[
                        styles.logoStyle,
                        {
                            opacity: fadeAnim, // Binds directly
                            transform: [
                                {
                                    translateX: fadeAnim.interpolate({
                                        inputRange: [0, 1],
                                        outputRange: [150, 0], // 0 : 150, 0.5 : 75, 1 : 0
                                    }),
                                },
                            ],
                        },
                    ]}
                    resizeMode="contain"
                />
                <Button
                    onPress={combineAnimation}
                    title="Interpolate Animation"
                    color="#841584"
                    accessibilityLabel="Learn more about this purple button"
                />
                {/* <Animated.Image
                    source={IMAGES.logoShort}
                    style={[styles.logoStyle, {transform: [{scale: b}]}]}
                    resizeMode="contain"
                />
                <Button
                    onPress={combineAnimation}
                    title="Spring Animation"
                    color="#841584"
                    accessibilityLabel="Learn more about this purple button"
                /> */}
                {/* <Animated.Image
                    source={IMAGES.logoShort}
                    style={[
                        styles.logoStyle,
                        {opacity: opacityValue, transform: [{scale: scaleValue}]},
                    ]}
                    resizeMode="contain"
                />
                <Button
                    onPress={composingAnimation}
                    title="Composing Animation"
                    color="#841584"
                    accessibilityLabel="Learn more about this purple button"
                /> */}
                {/* 
                  <Animated.Image
                    source={IMAGES.logoShort}
                    style={[styles.logoStyle, {opacity: fadeAnim}]}
                    resizeMode="contain"
                />
                <Button
                    onPress={applyFadeOutAnimation}
                    title="Fade Out"
                    color="#841584"
                    accessibilityLabel="Learn more about this purple button"
                />

               */}

                {/* <Animated.Image
                    source={IMAGES.logoShort}
                    style={[styles.logoStyle, {transform: [{scale: a}]}]}
                    resizeMode="contain"
                />
              
                 */}
                {/* <Animated.Image
                    source={IMAGES.logoShort}
                    style={[
                        styles.logoStyle,
                        {
                            opacity: fadeAnim, // Binds directly
                            transform: [
                                {
                                    translateY: fadeAnim.interpolate({
                                        inputRange: [0, 1],
                                        outputRange: [150, 0], // 0 : 150, 0.5 : 75, 1 : 0
                                    }),
                                },
                            ],
                        },
                    ]}
                    resizeMode="contain"
                />
                <Button
                    onPress={combineAnimation}
                    title="Interpolate Animation"
                    color="#841584"
                    accessibilityLabel="Learn more about this purple button"
                /> */}
            </View>
        </ParentContainer>
    );
}

export default ForgotPassword;
