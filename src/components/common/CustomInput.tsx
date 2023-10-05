import * as React from "react";
import {Input} from "@rneui/base";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

function CustomInput(props): JSX.Element {
    const {onChangeText, label = "User Form"} = props;
    return (
        <Input
            containerStyle={{}}
            disabledInputStyle={{}}
            inputContainerStyle={{}}
            errorMessage="Oops! that's not correct."
            errorStyle={{}}
            errorProps={{}}
            inputStyle={{}}
            onChangeText={txt => onChangeText(txt)}
            label={label}
            labelStyle={{}}
            labelProps={{}}
            leftIcon={<Icon name="account-outline" size={20} />}
            leftIconContainerStyle={{}}
            rightIcon={<Icon name="close" size={20} />}
            rightIconContainerStyle={{}}
            placeholder="Enter Name"
        />
    );
}

export default CustomInput;
