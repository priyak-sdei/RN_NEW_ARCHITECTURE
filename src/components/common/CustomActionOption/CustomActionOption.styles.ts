import GLOBAL_THEME from '@theme/index';
const {COLORS, moderateScale, horizontalScale, FONTS} = GLOBAL_THEME;
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    deleteIcon: {
        tintColor: COLORS.MAROON,
    },
    deleteText: {
        color: COLORS.MAROON,
    },
    menuIcon: {
        height: moderateScale(20),
        tintColor: COLORS.THEME,
        width: moderateScale(20),
    },
    menuItemContainer: {
        flexDirection: 'row',
        paddingHorizontal: moderateScale(20),
        paddingTop: moderateScale(24),
    },
    menuSeparator: {
        marginTop: moderateScale(24),
    },
    menuText: {
        color: COLORS.THEME,
        flex: 1,
        fontFamily: FONTS.MEDIUM,
        fontSize: moderateScale(16),
        marginLeft: horizontalScale(15),
    },
});
