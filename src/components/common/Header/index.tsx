import { useTheme } from "@/themes/ThemeContext";
import { useRouter } from "expo-router";
import { ReactElement } from "react";
import { View, ViewProps, Text, Pressable } from "react-native";
import { createStyles } from "./styles";
import { ChevronLeftIcon } from "@/assets/svgs";
import { useStyles } from "@/hooks/useStyles";
import { useSafeAreaInsets } from "react-native-safe-area-context";

type HeaderProps = {
  title?: string;
  showBack?: boolean; // Show back button
  leftIcon?: ReactElement;
  leftIconColor?: string;
  centerComponent?: ReactElement;
  rightComponent?: ReactElement;
  noBottomBorder?: boolean;

  titleAlign?: "left" | "center";
  onLeftPress?: () => void;
} & ViewProps;

export const Header = ({
  title,
  showBack = true,
  titleAlign = "center",
  leftIcon,
  leftIconColor,
  centerComponent,
  rightComponent,
  noBottomBorder = true,
  onLeftPress,
  ...rest
}: HeaderProps) => {
  const router = useRouter();
  const { theme } = useTheme();
  const styles = useStyles(createStyles); // Generate styles based on the current theme
  const areaInsets = useSafeAreaInsets();
  return (
    <View
      style={[
        styles.headerContainer,
        {
          borderBottomWidth: noBottomBorder ? 0 : 1,
          paddingTop: areaInsets.top,
        },
      ]}
    >
      <View style={styles.rightLeftContainer}>
        {showBack && (
          <Pressable style={styles.leftContainer} onPress={router.back}>
            <ChevronLeftIcon style={{}} width={34} height={34} />
          </Pressable>
        )}
      </View>
      <View
        style={[
          styles.titleContainer,
          titleAlign === "left" && styles.alignLeft,
        ]}
      >
        <Text style={styles.titleText}>{title}</Text>
      </View>
      <View style={[styles.rightLeftContainer]}>{rightComponent}</View>
    </View>
  );
};
