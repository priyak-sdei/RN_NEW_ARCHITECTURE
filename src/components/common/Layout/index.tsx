import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { useTheme } from "@/themes/ThemeContext";
import { getStyles } from "./styles";

const Layout = () => {
  const { theme } = useTheme();
  const styles = getStyles(theme); // Generate styles based on the current theme

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello, themed world!</Text>
      <Button title="Click Me" onPress={() => {}} />
    </View>
  );
};

export default Layout;
