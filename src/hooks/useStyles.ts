import { useTheme as useThemeContext } from '@/themes/ThemeContext';
import { ExtendedTheme } from '@/types/ColorPalette';
import { StyleSheet } from 'react-native';

// Generic type to define a style function
type StyleFunction<T> = (colors: ExtendedTheme['colors']) => T;

export const useStyles = <T extends StyleSheet.NamedStyles<T>>(
  stylesFunc: StyleFunction<T>,
): T => {
  const { theme } = useThemeContext();
  const { colors } = theme as unknown as ExtendedTheme;
  return StyleSheet.create(stylesFunc(colors));
};
