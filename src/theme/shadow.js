import {Platform, StyleSheet} from "react-native";
import {moderateScale} from "./common";

import COLORS from "./colors";

/*
 * generated with https://ethercreative.github.io/react-native-shadow-generator/
 * to get the same shadow on both platforms
 */
export const SHADOW = StyleSheet.create({
    headerShadow: {
        elevation: moderateScale(15),
        shadowColor: Platform.OS === "ios" ? COLORS.blackAlpha4 : COLORS.BLACK,
        shadowOffset: {height: moderateScale(10)},
        shadowOpacity: 0.15,
        shadowRadius: moderateScale(4),
    },
    primary: {
        elevation: 5,
        shadowColor: COLORS.BLACK,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
});
