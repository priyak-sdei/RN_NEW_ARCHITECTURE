// src/app/(auth)/_layout.tsx
import { Stack } from "expo-router";
import { useTheme } from "@/themes/ThemeContext";
import { View } from "react-native";
import RegisterStack from "./RegisterStack";

export default function AuthLayout() {
  const { theme } = useTheme();
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="RegisterStack" />
      <Stack.Screen name="index" />
    </Stack>
  );
}
