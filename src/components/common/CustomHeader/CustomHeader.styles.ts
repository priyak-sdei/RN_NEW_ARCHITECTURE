import GLOBAL_THEME from '@theme/index';
const {COLORS, moderateScale, verticalScale, horizontalScale, FONTS} = GLOBAL_THEME;
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    centerText: {
        justifyContent: 'center',
    },
    headerContainer: {
        backgroundColor: COLORS.THEME,
    },
    headerRight: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: verticalScale(5),
    },
    headingTitle: {
        color: COLORS.WHITE,
        fontFamily: FONTS.SEMI_BOLD,
        fontSize: moderateScale(22),
    },
    leftMargin: {
        marginLeft: horizontalScale(10),
    },
});
