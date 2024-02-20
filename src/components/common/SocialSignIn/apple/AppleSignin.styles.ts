import GLOBAL_THEME from "@theme/index";
import {StyleSheet} from "react-native";
const {moderateScale} = GLOBAL_THEME;
export const styles = StyleSheet.create({
    buttonStyle: {
        borderRadius: moderateScale(15),
        height: moderateScale(45),
        width: "100%",
    },
});
