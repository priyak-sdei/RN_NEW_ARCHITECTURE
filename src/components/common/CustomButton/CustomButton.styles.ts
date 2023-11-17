import GLOBAL_THEME from '@theme/index';
const {COLORS, moderateScale, scale, FONTS} = GLOBAL_THEME;
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    buttonStyle: {
        width: '100%',
        backgroundColor: COLORS.THEME,
        borderRadius: moderateScale(5),
    },
    containerStyle: {
        margin: moderateScale(5),
    },
    disabledStyle: {
        borderWidth: 1,
        borderColor: COLORS.GRAY_LINE,
    },
    disabledTitleStyle: {color: COLORS.THEME},
    titleStyle: {
        marginHorizontal: moderateScale(10),
        color: COLORS.WHITE,
        fontFamily: FONTS.SEMI_BOLD,
        fontSize: moderateScale(18),
    },
    headerRight: {
        display: 'flex',
        flexDirection: 'row',
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
});
