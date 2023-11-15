import GLOBAL_THEME from "@theme/index";
import {Platform, StyleSheet} from "react-native";
const {COLORS, moderateScale} = GLOBAL_THEME;

export const styles = StyleSheet.create({
    activityIndicator: {
        // ios activity indicator is not centered by default
        transform: [
            {translateX: Platform.OS === "ios" ? 2 : 0},
            {translateY: Platform.OS === "ios" ? 2 : 0},
        ],
    },
    activityIndicatorWrapper: {
        alignItems: "center",
        backgroundColor: COLORS.PRIMARY,
        borderRadius: moderateScale(30),
        display: "flex",
        height: moderateScale(60),
        justifyContent: "space-around",
        width: moderateScale(60),
    },
    modalBackground: {
        alignItems: "center",
        backgroundColor: COLORS.blackAlpha4,
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-around",
    },
});
