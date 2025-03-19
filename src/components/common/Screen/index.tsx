import React, { createContext, ReactNode, useContext } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  ViewProps,
  StatusBar,
  KeyboardAvoidingViewProps,
  StyleProp,
  ViewStyle,
  KeyboardAvoidingView,
} from "react-native";
import { useTheme } from "@/themes/ThemeContext";
import { getStyles } from "./styles";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
  KeyboardAwareScrollView,
  KeyboardAwareScrollViewProps,
} from "react-native-keyboard-aware-scroll-view";
import { Header } from "../Header";

const ScreenContext = createContext({
  variant: "fixed",
});
type ScreenProps = ViewProps & {
  variant?: "fixed" | "scroll";
  barStyle?: "light-content" | "dark-content";
  safeAreaTop?: boolean;
  safeAreaBottom?: boolean;
};
const Screen = ({
  variant = "fixed",
  barStyle = "dark-content",
  children,
  safeAreaTop = true,
  safeAreaBottom = false,
  ...rest
}: ScreenProps) => {
  const areaInsets = useSafeAreaInsets();
  const { theme } = useTheme();
  const styles = getStyles(theme); // Generate styles based on the current theme

  return (
    <ScreenContext.Provider value={{ variant }}>
      <StatusBar
        barStyle={barStyle}
        translucent
        backgroundColor="transparent"
      />
      <View
        style={{
          flex: 1,
          paddingTop: safeAreaTop ? areaInsets.top : 0,
          paddingBottom: safeAreaBottom ? areaInsets.bottom : 0,
        }}
        {...rest}
      >
        {children}
      </View>
    </ScreenContext.Provider>
  );
};

type ScreenContainerProps = KeyboardAvoidingViewProps &
  KeyboardAwareScrollViewProps & {
    style?: StyleProp<ViewStyle>;
    children?: ReactNode;
  };

const ScreenContainer = ({
  style,
  children,
  ...rest
}: ScreenContainerProps) => {
  const { theme } = useTheme();
  const styles = getStyles(theme);
  const { variant } = useContext(ScreenContext);
  return variant === "fixed" ? (
    <KeyboardAvoidingView
      style={StyleSheet.flatten([styles.container, style])}
      {...rest}
    >
      {children}
    </KeyboardAvoidingView>
  ) : (
    <KeyboardAwareScrollView
      style={StyleSheet.flatten([styles.container, style])}
      showsVerticalScrollIndicator={false}
      {...rest}
    >
      {children}
    </KeyboardAwareScrollView>
  );
};

type ScreenBodyProps = ViewProps & {
  style?: StyleProp<ViewStyle>;
  children?: ReactNode;
};
const ScreenBody = ({ children, ...rest }: ScreenBodyProps) => {
  return <View {...rest}>{children}</View>;
};

Screen.Header = Header;
Screen.Container = ScreenContainer;
Screen.Body = ScreenBody;

export default Screen;
