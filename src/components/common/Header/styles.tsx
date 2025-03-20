import {
  horizontalScale,
  moderateScale,
  SPACING,
  verticalScale,
} from "@/themes";
import { ExtendedTheme } from "@/types/ColorPalette";
import { StyleSheet } from "react-native";

export const createStyles = (colors: ExtendedTheme["colors"]) =>
  StyleSheet.create({
    alignLeft: {
      alignItems: "flex-start",
    },
    headerContainer: {
      alignItems: "center",
      backgroundColor: colors.white,
      borderBottomWidth: 1,
      borderColor: colors.border,
      flexDirection: "row",
      height: verticalScale(SPACING.xxxxxxl),
      justifyContent: "space-between",
      paddingHorizontal: horizontalScale(SPACING.xs),
      shadowColor: "black",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
    },
    leftContainer: {},
    titleContainer: {
      alignItems: "center",
      flex: 1,
    },
    centerContainer: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    titleText: {
      textAlign: "center",
      color: colors.text,
      fontSize: moderateScale(SPACING.sm),
      fontFamily: "medium",
    },
    rightLeftContainer: {
      flexDirection: "row",
      height: verticalScale(SPACING.xxl),
      width: verticalScale(SPACING.xxxl),
    },
  });
