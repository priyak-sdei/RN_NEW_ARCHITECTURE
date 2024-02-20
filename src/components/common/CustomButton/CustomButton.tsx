import {IconNode} from "@rneui/base";
import {Button} from "@rneui/themed";
import * as React from "react";
import {StyleProp, ViewStyle} from "react-native";
import {styles} from "./CustomButton.styles";
interface MyComponentProps {
    btnIcon?: IconNode;
    customButtonStyle?: StyleProp<ViewStyle>;
    customContainerStyle?: StyleProp<ViewStyle>;
    customTitleStyle?: StyleProp<ViewStyle>;
    disabled?: boolean;
    title: string;
    onBtnPress?: () => void;
}

const CustomButton: React.FC<MyComponentProps> = props => {
    const {
        btnIcon = false,
        customButtonStyle = {},
        customContainerStyle = {},
        customTitleStyle = {},
        disabled = false,
        title = "",
        onBtnPress,
    } = props;

    return (
        <Button
            buttonStyle={[styles.buttonStyle, customButtonStyle]}
            containerStyle={[styles.containerStyle, customContainerStyle]}
            disabledStyle={styles.disabledStyle}
            disabled={disabled}
            disabledTitleStyle={styles.disabledTitleStyle}
            icon={btnIcon}
            iconContainerStyle={{}}
            loadingProps={{animating: true}}
            loadingStyle={{}}
            onPress={onBtnPress}
            raised={true}
            title={title}
            titleStyle={[styles.titleStyle, customTitleStyle]}
        />
    );
};
export default CustomButton;
