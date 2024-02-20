import * as React from "react";
import { StyleSheet, Text, TouchableHighlight, ViewStyle} from "react-native";
import COLORS from "@theme/colors";
import FONTS from "@theme/fonts";
import { SPACING } from "@theme/spacing";

interface MyComponentProps {
    label?: string;
    onClick: () => void;
    additionalStyle?: ViewStyle
}

const CustomButton: React.FC<MyComponentProps> = ({ label = "ClickMe", onClick, additionalStyle }) => {
    return (
        <TouchableHighlight style={[style.buttonContainer, additionalStyle ]} onPress={onClick}>
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
        padding: SPACING.s
    },
    buttonText: {
     color:COLORS.WHITE,
    fontFamily: FONTS.NUNITO_BOLD,

    }
})

export default CustomButton;