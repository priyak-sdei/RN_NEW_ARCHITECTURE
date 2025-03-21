import type { ReactNode } from "react";
import { StyleSheet, Image, Platform, View, Text } from "react-native";
import { useTheme } from "@/themes/ThemeContext";
import Screen from "@/components/common/Screen";
import Input from "@/components/common/Input";
import Button from "@/components/common/Button";
import Login from "@/components/auth/Login";
export default function LoginStack() {
  const { theme } = useTheme();
  return (
    <Screen>
      <Screen.Header showBack={false} title={"Login"} />
      <Screen.Container>
        <Login />
      </Screen.Container>
    </Screen>
  );
}
