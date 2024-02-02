import {StyleSheet} from 'react-native';

import GLOBAL_THEME from '@theme/index';
const {COLORS, FONTS, moderateScale, SPACING} = GLOBAL_THEME;

const styles = StyleSheet.create({
    container: {
        borderWidth: moderateScale(0.5),
        borderRadius: moderateScale(6),
        borderColor: COLORS.GRAY_LINE,
        paddingVertical: moderateScale(SPACING.xs),
        paddingHorizontal: moderateScale(SPACING.xxs),
        marginVertical: moderateScale(SPACING.xs),
        marginHorizontal: moderateScale(SPACING.xxs),
    },
    innerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    // groupContainer: {
    //     flexDirection: 'row',
    //     alignItems: 'center',
    // },
    labelStyle: {
        fontFamily: FONTS.SEMI_BOLD,
        color: COLORS.THEME,
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
