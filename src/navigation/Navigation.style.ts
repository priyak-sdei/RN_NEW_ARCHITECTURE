import {StyleSheet} from "react-native";
import GLOBAL_THEME from "@theme/index";
const {COLORS, FONTS} = GLOBAL_THEME;
export const styles = StyleSheet.create({
    bottomContainer: {
        alignItems: "center",
        backgroundColor: COLORS.THEME,
        borderRadius: 5,
        flexDirection: "row",
        marginBottom: "10%",
        padding: 10,
    },
    container: {
        alignItems: "center",
        borderRadius: 5,
        flexDirection: "row",
        justifyContent: "flex-start",
        margin: 5,
        paddingVertical: 10,
    },
    headerContainer: {
        flexDirection: "row",
        flex: 0.2,
        justifyContent: "space-between",
        marginBottom: 20,
    },
    headerItems: {alignItems: "center", flexDirection: "row"},
    logoStyle: {borderRadius: 5, height: 30, marginRight: 10, width: 30},
    logoText: {fontFamily: FONTS.NUNITO_BOLD, fontSize: 18},
    mainContainer: {
        flex: 1,
        padding: 10,
    },
    menuItem: {
        color: COLORS.THEME,
        fontFamily: FONTS.NUNITO_MEDIUM,
        fontSize: 18,
        paddingRight: 10,
    },
    subMenuContainer: {
        alignItems: "center",
        borderRadius: 5,
        flexDirection: "row",
        justifyContent: "space-between",
        marginLeft: 10,
        marginVertical: 5,
        paddingLeft: "10%",
        paddingVertical: 8,
    },
    subMenuItem: {
        color: COLORS.THEME,
        fontFamily: FONTS.NUNITO_MEDIUM,
        fontSize: 19,
    },
    subMenuOuterContainer: {
        borderColor: COLORS.GRAY_LINE,
        borderLeftWidth: 1,
        marginLeft: 20,
    },
});
