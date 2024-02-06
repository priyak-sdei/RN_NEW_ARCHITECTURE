import GLOBAL_THEME from '@theme/index';
const {COLORS, moderateScale, scale, FONTS} = GLOBAL_THEME;
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    menuItemContainer: {
        flexDirection: 'row',
        paddingTop: moderateScale(24),
        alignItems: 'center',
        paddingHorizontal: moderateScale(10),
    },
    menuText: {
        flex: 1,
        fontSize: moderateScale(16),
        lineHeight: moderateScale(16),
        fontFamily: FONTS.MEDIUM,
        marginLeft: scale(15),
        color: COLORS.THEME,
    },
    menuIcon: {
        height: moderateScale(25),
        width: moderateScale(25),
        tintColor: COLORS.THEME,
    },
    menuSeparator: {
        marginTop: moderateScale(24),
    },
    deleteText: {
        color: COLORS.MAROON,
    },
    deleteIcon: {
        tintColor: COLORS.MAROON,
    },
});
