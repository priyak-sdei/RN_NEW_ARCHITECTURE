/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import {strings} from "@localization/Localization";
import React, {useEffect} from "react";
import {View, Text, StyleSheet} from "react-native";
import GLOBAL_THEME from "@theme/index";
import styles from "./Home.style";
const {COLORS, FONTS, SPACING, moderateScale} = GLOBAL_THEME;

function Home(props): JSX.Element {
    useEffect(() => {
        console.log("COLORS", COLORS);
        //  props.navigation.openDrawer();
    }, []);

    return (
        <View style={styles.mainContainer}>
            <Text>hi{strings.common.loading}</Text>
            <Text>Welcome to home page</Text>
        </View>
    );
}

export default Home;
