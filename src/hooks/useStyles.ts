import { useTheme } from "@react-navigation/native";
import { useTheme as useThemeContext } from "@/themes/ThemeContext";
import { StyleSheet } from "react-native";
import { ExtendedTheme } from "@/types/ColorPalette";

// Generic type to define a style function
type StyleFunction<T> = (colors: ExtendedTheme["colors"]) => T;

export const useStyles = <T extends StyleSheet.NamedStyles<T>>(
  stylesFunc: StyleFunction<T>
): T => {
  const { theme } = useThemeContext();
  const { colors } = theme as unknown as ExtendedTheme;
  return StyleSheet.create(stylesFunc(colors));
};
