import * as React from "react";
import { StyleSheet, Text, TouchableHighlight} from "react-native";
import COLORS from "@constants/colors";
import FONTS from "@constants/fonts";

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
        backgroundColor: COLORS.THEME,
        padding: 15,
        justifyContent:'center',
        alignItems:'center'
    },
    buttonText: {
     color:COLORS.WHITE,
    fontFamily: FONTS.NUNITO_BOLD,

    }
})

export default CustomButton;