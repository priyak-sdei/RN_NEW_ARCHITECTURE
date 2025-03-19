import { Theme } from "@/themes/ThemeContext";
import { StyleSheet } from "react-native";

export const getStyles = (theme: Theme) =>
  StyleSheet.create({
    headerContainer: {
      flexDirection: "row",
      //  backgroundColor: theme.colors.primary,
      height: 48,
      alignItems: "center",
      borderBottomWidth: 1,
      borderBottomColor: theme.colors.text,
      paddingHorizontal: 16,
      gap: 24,
    },
    leftContainer: {
      flex: 1,
      //  paddingRight: 16,
    },
    shrinkBox: {
      flexShrink: 1,
    },
    centerContainer: {
      flex: 1,
      alignItems: "center", // items-center
      justifyContent: "center", // justify-center
    },
    titleText: {
      fontWeight: "500", // font-medium
      textAlign: "center", // text-center
      color: "#000000", // text-foreground (replace with your foreground color)
      fontSize: 18, // text-lg
    },
    rightContainer: {
      flex: 1,
      alignItems: "flex-end",
    },
  });
