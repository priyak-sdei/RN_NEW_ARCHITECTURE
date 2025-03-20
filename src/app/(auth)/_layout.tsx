// src/app/(auth)/_layout.tsx
import { Stack } from "expo-router";
import { useTheme } from "@/themes/ThemeContext";
import { View } from "react-native";

export default function AuthLayout() {
  const { theme } = useTheme();
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
          title: "Login",
        }}
      />
      {/* <Stack.Screen name="register" options={{ title: "Register" }} /> */}
    </Stack>
  );
}
