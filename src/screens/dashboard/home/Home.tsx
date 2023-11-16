/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import { strings } from "@localization/Localization";
import React, { useEffect } from "react";
import { View, Text, Alert, NativeModules } from "react-native";
import GLOBAL_THEME from "@theme/index";
import styles from "./Home.style";
import CustomButton from "@components/common/CustomButton";
const { COLORS, FONTS, SPACING, moderateScale } = GLOBAL_THEME;

function Home(props): JSX.Element {
    const { CustomModule } = NativeModules
    const buttonsTitle = [
        {
            id: 1,
            title: "Simple Function"
        },
        {
            id: 2,
            title: "Function With Callback"
        },
        {
            id: 3,

            title: "Function With Arguments"
        },
        {
            id: 4,
            title: "Function With Promise"
        },
    ]


    const onButtonClick = async (index: number) => {
        if (index === 0) {
            CustomModule.simpleMethod();
        }
        else if (index === 1) {
            CustomModule.simpleMethodReturns((result: any) => {
                Alert.alert(result)
            })
        } else if (index === 2) {
            CustomModule.simpleMethodWithParams(
                "User",
                (result: any) => {
                    Alert.alert(result)
                }
            )
        }
        else {
            const result = await CustomModule.resolvePromise();
            Alert.alert(result)
        }
    }
    useEffect(() => {
        console.log("COLORS", COLORS);
        //  props.navigation.openDrawer();
    }, []);

    return (
        <View style={styles.mainContainer}>
            <Text>hi{strings.common.loading}</Text>
            <Text>Welcome to home page</Text>
            {buttonsTitle.map((item, index) => (
                <View style={styles.buttonContainer} key={index}>
                    <CustomButton onClick={() => onButtonClick(index)} label={item.title} />
                </View>
            ))}
            <CustomButton onClick={() => CustomModule.NativeView()} label={"Go in Native Screen"} additionalStyle={{ width: "90%" }} />
        </View>
    );
}

export default Home;
