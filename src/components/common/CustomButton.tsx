import * as React from "react";
import { StyleSheet, Text, TouchableHighlight} from "react-native";
import COLORS from "@theme/colors";
import FONTS from "@theme/fonts";

interface MyComponentProps {
    label?: string;
    onClick: () => void;
}

const CustomButton: React.FC<MyComponentProps> = ({ label = "ClickMe", onClick }) => {
    return (
        <TouchableHighlight style={style.buttonContainer} onPress={onClick}>
            <Text style={style.buttonText}>
                {label}
            </Text>
        </TouchableHighlight>
    );
};
const style = StyleSheet.create({
    buttonContainer: {
        alignItems:"center",
        backgroundColor: COLORS.THEME,
        justifyContent:"center",
        padding: 15
    },
    buttonText: {
     color:COLORS.WHITE,
    fontFamily: FONTS.NUNITO_BOLD,

    }
})

export default CustomButton;