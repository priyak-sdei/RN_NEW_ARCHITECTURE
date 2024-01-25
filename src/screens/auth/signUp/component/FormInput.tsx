import {CustomInput} from '@components/index';
import React from 'react';
import {TextInputProps} from 'react-native';
import {CustomInputProp} from '@type/Login';
interface FormInputProps extends CustomInputProp, TextInputProps {
    onChangeText: (text: string) => void;
    handleBlur: () => void;
    value: string;
    errorMessage?: string;
}

const FormInput: React.FC<FormInputProps> = ({onChangeText, handleBlur, value, ...props}) => {
    return <CustomInput value={value} onChangeText={onChangeText} {...props} />;
};

export default FormInput;
