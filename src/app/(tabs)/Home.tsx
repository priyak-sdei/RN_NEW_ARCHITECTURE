import { StyleSheet, Image, Platform, View, Text } from "react-native";
import { useTheme } from "@/themes/ThemeContext";
import Layout from "@/components/common/Layout";
export default function Home() {
  const { theme } = useTheme();
  console.log(theme, "theme...");
  return (
    <View style={{ flex: 1, backgroundColor: "red" }}>
      <Text>hiiii This is me</Text>
    </View>
  );
}
