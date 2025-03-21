import type { ReactNode } from "react";
import { StyleSheet, Image, Platform, View, Text } from "react-native";
import { useTheme } from "@/themes/ThemeContext";
import Screen from "@/components/common/Screen";
import Input from "@/components/common/Input";
import Button from "@/components/common/Button";
import {
  horizontalScale,
  moderateScale,
  SPACING,
  verticalScale,
} from "@/themes";
import { ExtendedTheme } from "@/types/ColorPalette";
import { useStyles } from "@/hooks/useStyles";
import { IMAGES } from "@/assets";
import { useLogin } from "../hooks/useLogin";
export default function Login() {
  const styles = useStyles(createStyles);
  const { email, setEmail, password, setPassword, onLogin } = useLogin();
  return (
    <View style={styles.container}>
      <Image source={IMAGES.logo} style={styles.imageContainer} />
      <Input
        placeholder="Email"
        labelTitle="Email"
        value={email}
        onChangeText={setEmail}
      />
      <Input
        placeholder="Password"
        labelTitle="Password"
        value={password}
        onChangeText={setPassword}
      />
      <Button
        buttonTitle="Login"
        buttonStyle={styles.buttonContainer}
        onPress={onLogin}
        // disabled={!email || !password}
      />
    </View>
  );
}

const createStyles = (colors: ExtendedTheme["colors"]) =>
  StyleSheet.create({
    buttonContainer: {
      marginVertical: moderateScale(SPACING.m),
    },
    container: {},
    imageContainer: {
      alignSelf: "center",
      marginVertical: moderateScale(SPACING.m),
    },
  });
