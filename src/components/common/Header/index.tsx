import { useTheme } from "@/themes/ThemeContext";
import { useRouter } from "expo-router";
import { ReactElement } from "react";
import { View, ViewProps, Text, Pressable } from "react-native";
import { getStyles } from "./styles";
import { ChevronLeftIcon } from "@/assets/svgs";

type HeaderProps = {
  title?: string;
  leftIcon?: ReactElement;
  leftIconColor?: string;
  centerComponent?: ReactElement;
  rightComponent?: ReactElement;
  noBottomBorder?: boolean;
  onLeftPress?: () => void;
} & ViewProps;

export const Header = ({
  title,
  leftIcon,
  leftIconColor,
  centerComponent,
  rightComponent,
  noBottomBorder,
  onLeftPress,
  ...rest
}: HeaderProps) => {
  const router = useRouter();
  const { theme } = useTheme();
  const styles = getStyles(theme); // Generate styles based on the current theme

  return (
    <View
      style={[
        styles.headerContainer,
        {
          borderBottomWidth: noBottomBorder ? 0 : 1,
        },
      ]}
      {...rest}
    >
      <Pressable style={styles.leftContainer}>
        <ChevronLeftIcon style={{}} width={34} height={34} />
      </Pressable>

      <View style={styles.shrinkBox}>
        <View style={styles.centerContainer}>
          <Text style={styles.titleText}>Hello</Text>
        </View>
      </View>

      <View style={styles.rightContainer}>{rightComponent}</View>
    </View>
  );
};
