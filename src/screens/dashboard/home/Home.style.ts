import {StyleSheet} from "react-native";
import GLOBAL_THEME from "@theme/index";
const {COLORS, FONTS, SPACING, moderateScale} = GLOBAL_THEME;
const styles = StyleSheet.create({
    activityIndicator: {
        flex: 1,
        justifyContent: "center",
    },
    mainContainer: {
        backgroundColor: COLORS.border,
        flex: 1,
        justifyContent: "center",
        marginLeft: moderateScale(SPACING.xl),
    },
    buttonContainer: {
        marginBottom: 10,
        width: "90%"
    },
});

export default styles;
