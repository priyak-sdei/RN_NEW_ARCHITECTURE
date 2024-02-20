import {StyleSheet} from "react-native";

import GLOBAL_THEME from "@theme/index";
const {COLORS, FONTS, moderateScale, SPACING} = GLOBAL_THEME;

const styles = StyleSheet.create({
    container: {
        borderColor: COLORS.GRAY_LINE,
        borderRadius: moderateScale(6),
        borderWidth: moderateScale(0.5),
        marginHorizontal: moderateScale(SPACING.xxs),
        marginVertical: moderateScale(SPACING.xs),
        paddingHorizontal: moderateScale(SPACING.xxs),
        paddingVertical: moderateScale(SPACING.xs),
    },
    innerContainer: {
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    // groupContainer: {
    //     flexDirection: 'row',
    //     alignItems: 'center',
    // },
    labelStyle: {
        color: COLORS.THEME,
        fontFamily: FONTS.SEMI_BOLD,
        fontSize: moderateScale(SPACING.s),
    },
    // selectedTextStyle: {
    //     fontFamily: FONTS.REGULAR,
    //     color: COLORS.THEME,
    //     fontSize: moderateScale(SPACING.s),
    //     paddingRight: moderateScale(SPACING.xxs),
    // },
});

export default styles;
