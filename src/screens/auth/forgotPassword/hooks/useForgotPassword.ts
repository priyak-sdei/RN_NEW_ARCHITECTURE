import {useForgotPasswordMutation} from '@/redux/api/AuthAPIs/authAPI';
import {useEffect, useState} from 'react';
import {Alert} from 'react-native';

export const useForgotPassword = () => {
    const [forgotPassword, {isLoading, data: forgotPasswordData}] = useForgotPasswordMutation();
    const [email, setEmail] = useState('');

    useEffect(() => {
        if (forgotPasswordData && !forgotPasswordData.status)
            Alert.alert(forgotPasswordData?.message);
        if (forgotPasswordData && forgotPasswordData.status) {
            Alert.alert(forgotPasswordData?.message);
        }
    }, [forgotPasswordData]);

    const onForgotPress = async () => {
        if (email.trim() === '') {
            Alert.alert('Enter Email');
        } else {
            forgotPassword({email});
        }
    };

    return {
        email,
        setEmail,
        onForgotPress,
        isLoading,
    };
};
