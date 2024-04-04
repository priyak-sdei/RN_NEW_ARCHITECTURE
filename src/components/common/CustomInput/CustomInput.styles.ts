import GLOBAL_THEME from '@theme/index';
import {StyleSheet} from 'react-native';
const {COLORS, FONTS, moderateScale} = GLOBAL_THEME;

const styles = StyleSheet.create({
    containerStyle: {},
    errorStyle: {
        color: COLORS.ERROR_RED,
        fontFamily: FONTS.MEDIUM,
        fontSize: moderateScale(10),
        marginTop: moderateScale(0),
    },
    inputContainerStyle: {
        borderColor: COLORS.GRAY_LINE,
        borderRadius: moderateScale(5),
        borderWidth: moderateScale(1),
    },
    inputStyle: {
        color: COLORS.THEME,
        fontFamily: FONTS.MEDIUM,
        fontSize: moderateScale(15),
        paddingHorizontal: moderateScale(5),
    },
    labelStyle: {
        color: COLORS.THEME,
        fontFamily: FONTS.LIGHT,
        fontSize: moderateScale(13),
        fontWeight: '400',
    },
    leftIconContainerStyle: {
        paddingLeft: moderateScale(5),
    },
});

export default styles;
