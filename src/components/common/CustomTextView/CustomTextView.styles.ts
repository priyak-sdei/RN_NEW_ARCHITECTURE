import GLOBAL_THEME from '@theme/index';
const {COLORS, moderateScale, scale, FONTS} = GLOBAL_THEME;
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    h1Style: {
        color: COLORS.THEME,
        fontFamily: FONTS.SEMI_BOLD,
        fontSize: moderateScale(30),
    },
    h2Style: {
        color: COLORS.THEME,
        fontFamily: FONTS.SEMI_BOLD,
        fontSize: moderateScale(25),
    },
    h3Style: {
        color: COLORS.THEME,
        fontFamily: FONTS.SEMI_BOLD,
        fontSize: moderateScale(20),
    },
    h4Style: {
        color: COLORS.THEME,
        fontFamily: FONTS.SEMI_BOLD,
        fontSize: moderateScale(15),
    },
    textStyle: {
        color: COLORS.THEME,
        fontFamily: FONTS.SEMI_BOLD,
        fontSize: moderateScale(18),
    },
});
