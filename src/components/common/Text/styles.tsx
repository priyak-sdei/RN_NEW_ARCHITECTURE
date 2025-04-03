import { moderateScale, SPACING } from '@/themes';
import { ExtendedTheme } from '@/types/ColorPalette';
import { StyleSheet } from 'react-native';

export const createStyles = (colors: ExtendedTheme['colors']) => {
  return StyleSheet.create({
    text: {
      fontSize: moderateScale(SPACING.s),
      fontFamily: 'regular',
      color: colors.secondary,
      includeFontPadding: false,
      //  color: 'red',
    },
  });
};
