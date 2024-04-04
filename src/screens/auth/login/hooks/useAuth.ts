import {useEffect, useState} from 'react';
import {Alert} from 'react-native';
import {useLoginUserMutation} from '@/redux/api/AuthAPIs/authAPI';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {StackParamList} from '@constants/navigation';

export const useAuth = () => {
    const navigation = useNavigation<NativeStackNavigationProp<StackParamList>>();
    const [loginUser, {isLoading, error, data: loginUserData}] = useLoginUserMutation();

    // const [username, setUsername] = useState('rahulp@gmail.com');
    // const [password, setPassword] = useState('Rp345742@');
    const [username, setUsername] = useState('Priya4April@yopmail.com');
    const [password, setPassword] = useState('Pass@123');

    useEffect(() => {
        if (loginUserData) {
            if (!loginUserData.status) handleLoginError();
            else
                navigation.reset({
                    index: 0,
                    routes: [{name: 'Home'}],
                });
        }
        if (error) {
            if (__DEV__) console.log('Error while login', error);
        }
    }, [loginUserData]);

    const handleLoginError = () => {
        if (loginUserData?.message) Alert.alert(loginUserData?.message);
    };

    const onSignInPress = async () => {
        console.log(username, password);
        if (username.trim() === '') {
            Alert.alert('Enter Username');
        } else if (password.trim() === '') {
            Alert.alert('Password Error');
        } else {
            const param = {email: username, password};
            try {
                await loginUser(param);
            } catch (e) {
                if (__DEV__) console.log('failed to create tree', e);
            }
        }
    };

    return {
        username,
        password,
        setUsername,
        setPassword,
        onSignInPress,
        isLoading,
    };
};
