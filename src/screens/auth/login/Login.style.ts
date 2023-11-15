import {StyleSheet} from "react-native";

import GLOBAL_THEME from "@theme/index";
const {COLORS, FONTS} = GLOBAL_THEME;

const styles = StyleSheet.create({
    highlight: {
        fontWeight: "700",
    },
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionDescription: {
        fontSize: 18,
        fontWeight: "400",
        marginTop: 8,
    },
    sectionTitle: {
        fontFamily: FONTS.NUNITO_BOLD,
        fontSize: 24,
    },
});

export default styles;
