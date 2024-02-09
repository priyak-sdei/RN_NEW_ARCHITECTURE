import GLOBAL_THEME from "@theme/index";
const {COLORS, moderateScale, scale, FONTS} = GLOBAL_THEME;
import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    buttonStyle: {
        backgroundColor: COLORS.THEME,
        borderRadius: moderateScale(5),
        width: "100%",
    },
    containerStyle: {
        margin: moderateScale(5),
    },
    disabledStyle: {
        borderColor: COLORS.GRAY_LINE,
        borderWidth: 1,
    },
    disabledTitleStyle: {color: COLORS.THEME},
    headerRight: {
        display: "flex",
        flexDirection: "row",
        marginTop: scale(5),
    },
    headingTitle: {
        color: COLORS.WHITE,
        fontFamily: FONTS.SEMI_BOLD,
        fontSize: moderateScale(22),
    },
    leftMargin: {
        marginLeft: scale(10),
    },
    titleStyle: {
        color: COLORS.WHITE,
        fontFamily: FONTS.SEMI_BOLD,
        fontSize: moderateScale(18),
        marginHorizontal: moderateScale(10),
    },
});
