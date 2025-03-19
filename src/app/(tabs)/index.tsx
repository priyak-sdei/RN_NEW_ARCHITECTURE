import type { ReactNode } from "react";
import { StyleSheet, Image, Platform, View, Text } from "react-native";
import { useTheme } from "@/themes/ThemeContext";
import Screen from "@/components/common/Screen";
export default function Home() {
  const { theme } = useTheme();
  console.log(theme, "theme...");
  return (
    <Screen>
      <Screen.Header />
      <Screen.Container>
        <View style={{ flex: 1, backgroundColor: "red" }}>
          <Text>hiiii This is me1</Text>
        </View>
      </Screen.Container>
    </Screen>
  );
}
