import {StyleSheet} from "react-native";

import GLOBAL_THEME from "@theme/index";
const {COLORS, FONTS, moderateScale} = GLOBAL_THEME;

const styles = StyleSheet.create({
    container: {
        marginTop: moderateScale(20),
    },
    header_container: {
        alignItems: "center",
        flexDirection: "row",
        paddingTop: "8%",
    },
    headingTitle: {
        color: COLORS.BLACK,
        flex: 1,
        fontFamily: FONTS.SEMI_BOLD,
        fontSize: moderateScale(22),
        marginLeft: moderateScale(15),
        padding: moderateScale(5),
    },
    labelStyle: {
        color: COLORS.THEME,
        fontFamily: FONTS.SEMI_BOLD,
        fontSize: moderateScale(18),
    },
    listContainer: {
        alignItems: "center",
        borderBottomWidth: moderateScale(0.4),
        borderColor: COLORS.GRAY_LINE,
        flexDirection: "row",
        justifyContent: "space-between",
        padding: moderateScale(5),
        paddingVertical: moderateScale(10),
    },
    outer_container: {
        flex: 1,
        padding: moderateScale(15),
    },
});

export default styles;
