import * as React from "react";
import {Input} from "@rneui/base";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

/**
Type Safety: Interfaces help provide type safety in your code. TypeScript will check that objects you pass
to your components match the expected structure defined in the interface.
This can catch type-related errors at compile time, which can be very helpful in preventing runtime errors.
Interfaces in TypeScript are a powerful tool for ensuring the consistency
and correctness of data structures and can be particularly useful when working with 
React Native to maintain clean and well-typed code.
 */
interface MyComponentProps {
    label?: string;
    onChangeText: (txt) => void; // Callback function prop
}

const CustomInput: React.FC<MyComponentProps> = ({label = "New", onChangeText}) => {
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
};

export default CustomInput;

/**
 * By using React.FC, you get the benefit of TypeScript's type inference for props,
 *  which can help catch type-related errors early in development.
 *  It also makes it clear that MyComponent is a functional component, making your code more self-documenting.
 */
