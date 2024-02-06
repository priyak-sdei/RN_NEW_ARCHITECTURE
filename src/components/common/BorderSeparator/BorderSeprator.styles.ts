import GLOBAL_THEME from '@theme/index';
const {COLORS, moderateScale, scale, FONTS} = GLOBAL_THEME;
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    menuSeparator: {
        borderBottomWidth: moderateScale(1),
        borderColor: COLORS.GRAY_LINE,
    },
});
