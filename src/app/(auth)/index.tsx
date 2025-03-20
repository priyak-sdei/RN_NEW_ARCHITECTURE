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
          <Input placeholder="Email" labelTitle="Email" />
          <Input placeholder="Password" labelTitle="Password" />
          <Button buttonTitle="Login" />
        </View>
      </Screen.Container>
    </Screen>
  );
}
