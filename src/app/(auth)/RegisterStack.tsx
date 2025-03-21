import type { ReactNode } from "react";
import { StyleSheet, Image, Platform, View, Text } from "react-native";
import { useTheme } from "@/themes/ThemeContext";
import Screen from "@/components/common/Screen";
import Input from "@/components/common/Input";
import Button from "@/components/common/Button";
import Login from "@/components/auth/Login";
import Register from "@/components/auth/Register";
export default function RegisterStack() {
  const { theme } = useTheme();
  return (
    <Screen variant="scroll">
      <Screen.Header showBack={true} title={"Register"} />
      <Screen.Container>
        <Register />
      </Screen.Container>
    </Screen>
  );
}
