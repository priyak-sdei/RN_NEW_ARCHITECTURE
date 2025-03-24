import { moderateScale } from '@/themes';
import { ExtendedTheme } from '@/types/ColorPalette';
import { StyleSheet } from 'react-native';

export const createStyles = (colors: ExtendedTheme['colors']) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
      padding: moderateScale(10),
    },
    background: {
      flex: 1,
      height: '100%',
    },
    ScreenContainer: {
      flex: 1,
    },
  });
