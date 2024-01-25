import * as React from 'react';
import {IconNode, Input} from '@rneui/base';
import styles from './CustomInput.styles';
import GLOBAL_THEME from '@theme/index';
const {COLORS} = GLOBAL_THEME;
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
    placeholder?: string;
    onChangeText: (txt) => void; // Callback function prop
    handleBlur?: () => void; // Optional function prop
    leftIcon?: IconNode;
    rightIcon?: IconNode;
    errorMessage?: string;
    value: string;
}

const CustomInput: React.FC<MyComponentProps> = props => {
    const {
        label = '',
        placeholder = '',
        onChangeText,
        leftIcon = false,
        rightIcon = false,
        errorMessage = '',
        value = '',
        handleBlur,
    } = props;
    return (
        <Input
            selectionColor={COLORS.THEME}
            containerStyle={styles.containerStyle}
            disabledInputStyle={{}}
            errorMessage={errorMessage}
            errorStyle={styles.errorStyle}
            inputContainerStyle={styles.inputContainerStyle}
            inputStyle={styles.inputStyle}
            label={label}
            labelStyle={styles.labelStyle}
            labelProps={{}}
            leftIcon={leftIcon}
            leftIconContainerStyle={styles.leftIconContainerStyle}
            onChangeText={txt => onChangeText(txt)}
            placeholder={placeholder}
            rightIcon={rightIcon}
            rightIconContainerStyle={{}}
            value={value}
            onBlur={handleBlur}
        />
    );
};

export default CustomInput;

/**
 * By using React.FC, you get the benefit of TypeScript's type inference for props,
 *  which can help catch type-related errors early in development.
 *  It also makes it clear that MyComponent is a functional component, making your code more self-documenting.
 */
