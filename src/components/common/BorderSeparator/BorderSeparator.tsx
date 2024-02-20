import React from "react";
import {View} from "react-native";
import {styles} from "./BorderSeprator.styles";

export const BorderSeparator = ({style}) => {
  return <View style={[styles.menuSeparator, style]} />;
};
