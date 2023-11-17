import GLOBAL_THEME from "@theme/index";
import {StyleSheet} from "react-native";
const {COLORS} = GLOBAL_THEME;

export const styles = StyleSheet.create({
    parent: {
        backgroundColor: COLORS.WHITE,
        flex: 1,
    },
    Loader: {
        backgroundColor: COLORS.WHITE,
      },
      keyboardAvoidingContainer:{
      }
});
