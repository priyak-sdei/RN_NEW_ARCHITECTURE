import { Theme } from "@/themes/ThemeContext";
import { StyleSheet } from "react-native";

export const getStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
    },
    background: {
      flex: 1,
      height: "100%",
    },
    // container: {
    //   flex: 1,
    //   justifyContent: "center",
    //   alignItems: "center",
    //   backgroundColor: theme.colors.background,
    // },
    // text: {
    //   color: theme.colors.text,
    //   fontSize: 16,
    // },
    // button: {
    //   backgroundColor: theme.colors.primary,
    //   padding: 10,
    //   borderRadius: 5,
    // },
  });
