import GLOBAL_THEME from '@theme/index';
import {StyleSheet} from 'react-native';
const {COLORS, moderateScale, verticalScale, FONTS} = GLOBAL_THEME;

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: moderateScale(20),
    },
    errorText: {
        color: COLORS.BLACK,
        fontFamily: FONTS.MEDIUM,
        fontSize: moderateScale(15),
        marginBottom: verticalScale(20),
    },
    errorTextHighlight: {
        fontFamily: FONTS.BOLD,
    },
    headingError: {
        color: COLORS.BLACK,
        fontFamily: FONTS.MEDIUM,
        fontSize: moderateScale(25),
    },

    imgContainer: {alignItems: 'center', flex: 0.7, justifyContent: 'center'},
    imgStyle: {height: 300, width: 300},
});
