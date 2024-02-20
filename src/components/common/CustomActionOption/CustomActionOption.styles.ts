import GLOBAL_THEME from "@theme/index";
const {COLORS, moderateScale, scale, FONTS} = GLOBAL_THEME;
import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    deleteIcon: {
        tintColor: COLORS.MAROON,
    },
    deleteText: {
        color: COLORS.MAROON,
    },
    menuIcon: {
        height: moderateScale(25),
        tintColor: COLORS.THEME,
        width: moderateScale(25),
    },
    menuItemContainer: {
        alignItems: "center",
        flexDirection: "row",
        paddingHorizontal: moderateScale(10),
        paddingTop: moderateScale(24),
    },
    menuSeparator: {
        marginTop: moderateScale(24),
    },
    menuText: {
        color: COLORS.THEME,
        flex: 1,
        fontFamily: FONTS.MEDIUM,
        fontSize: moderateScale(16),
        lineHeight: moderateScale(16),
        marginLeft: scale(15),
    },
});
