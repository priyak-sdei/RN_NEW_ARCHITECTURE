import GLOBAL_THEME from "@theme/index";
import {StyleSheet} from "react-native";
const {COLORS, moderateScale} = GLOBAL_THEME;

export const styles = StyleSheet.create({
    container: {
        marginVertical: moderateScale(10),
    },
    profileContainer: {
        backgroundColor: COLORS.THEME,
    },
});
