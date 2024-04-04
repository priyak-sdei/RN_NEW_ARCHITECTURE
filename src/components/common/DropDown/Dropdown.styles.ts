import {StyleSheet} from 'react-native';

import GLOBAL_THEME from '@theme/index';
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
    errorStyle: {
        color: COLORS.ERROR_RED,
        fontFamily: FONTS.MEDIUM,
        fontSize: moderateScale(10),
        paddingHorizontal: moderateScale(SPACING.xxs),
        top: -moderateScale(SPACING.xs),
    },
    groupContainer: {
        alignItems: 'center',
        flexDirection: 'row',
    },
    innerContainer: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    labelStyle: {
        color: COLORS.THEME,
        fontFamily: FONTS.SEMI_BOLD,
        fontSize: moderateScale(SPACING.s),
    },
    selectedTextStyle: {
        color: COLORS.THEME,
        fontFamily: FONTS.REGULAR,
        fontSize: moderateScale(SPACING.s),
        paddingRight: moderateScale(SPACING.xxs),
    },
});

export default styles;
