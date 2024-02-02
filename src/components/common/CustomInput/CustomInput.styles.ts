import GLOBAL_THEME from '@theme/index';
import {StyleSheet} from 'react-native';
const {COLORS, FONTS, moderateScale} = GLOBAL_THEME;

const styles = StyleSheet.create({
    containerStyle: {},
    errorStyle: {
        fontFamily: FONTS.MEDIUM,
        color: COLORS.ERROR_RED,
        fontSize: moderateScale(10),
        marginTop: moderateScale(0),
    },
    inputContainerStyle: {
        borderWidth: moderateScale(1),
        borderRadius: moderateScale(5),
        borderColor: COLORS.GRAY_LINE,
    },
    inputStyle: {
        fontFamily: FONTS.MEDIUM,
        color: COLORS.THEME,
        fontSize: moderateScale(15),
        paddingHorizontal: moderateScale(5),
    },
    labelStyle: {
        fontFamily: FONTS.LIGHT,
        color: COLORS.THEME,
        fontSize: moderateScale(13),
        fontWeight: '400',
    },
    leftIconContainerStyle: {
        paddingLeft: moderateScale(5),
    },
});

export default styles;
