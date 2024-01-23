import React from 'react';
import {TextInput, StyleSheet, TextInputProps} from 'react-native';
import {useFormikContext} from 'formik';
interface LoginFormValues {
    username: string;
    password: string;
}

interface FormInputProps extends TextInputProps {
    field: keyof LoginFormValues;
    handleChange: (text: string) => void;
    handleBlur: () => void;
    value: string;
}

const FormInput: React.FC<FormInputProps> = ({
    field,
    handleChange,
    handleBlur,
    value,
    ...props
}) => {
    return (
        <TextInput
            style={styles.input}
            onChangeText={handleChange}
            onBlur={handleBlur}
            value={value}
            {...props}
        />
    );
};

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        marginBottom: 10,
    },
});

export default FormInput;
