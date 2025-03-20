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
    withLabelContainer: {
      marginTop: verticalScale(15),
    },
    labelStyle: {
      fontFamily: "semibold",
      color: colors.black,
      fontSize: moderateScale(14),
    },
    textInputContainer: {
      alignItems: "center",
      borderColor: colors.mutedGrey,
      borderRadius: moderateScale(10),
      borderWidth: moderateScale(1),
      flexDirection: "row",
      height: verticalScale(45),
      justifyContent: "space-between",
      marginVertical: verticalScale(5),
    },
    leftIconContainer: {
      alignItems: "center",
      flexDirection: "row",
      gap: horizontalScale(5),
    },
    leftIcon: {
      height: moderateScale(24),
      width: moderateScale(24),
    },
    textInputStyle: {
      height: verticalScale(45),
      includeFontPadding: false,
      margin: moderateScale(12),
      width: "82%",
    },
    rightIcon: {
      height: moderateScale(24),
      marginRight: horizontalScale(15),
      width: moderateScale(24),
    },
  });
