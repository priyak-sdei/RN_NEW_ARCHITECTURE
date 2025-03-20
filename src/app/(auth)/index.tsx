import type { ReactNode } from "react";
import { StyleSheet, Image, Platform, View, Text } from "react-native";
import { useTheme } from "@/themes/ThemeContext";
import Screen from "@/components/common/Screen";
import Input from "@/components/common/Input";
import Button from "@/components/common/Button";
export default function Login() {
  const { theme } = useTheme();
  return (
    <Screen>
      <Screen.Header showBack={false} title={"Login"} />
      <Screen.Container>
        <View style={{ flex: 1 }}>
          <Text>hiiii This is me1ddd</Text>
          <Input placeholder="Email" />
          <Button buttonTitle="Login" />
        </View>
      </Screen.Container>
    </Screen>
  );
}
