import {useRegisterUserMutation} from '@/redux/api/AuthAPIs/authAPI';
import {useEffect} from 'react';
import {Alert, Platform} from 'react-native';

import {StackParamList} from '@constants/navigation';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export const useSignUp = () => {
    const navigation = useNavigation<NativeStackNavigationProp<StackParamList>>();
    const [registerUser, {isLoading, data: registerUserData}] = useRegisterUserMutation();

    useEffect(() => {
        if (registerUserData && !registerUserData.status) Alert.alert(registerUserData.messgae);
        if (registerUserData) {
            Alert.alert(registerUserData.message);
            navigation.navigate('Login');
        }
    }, [registerUserData]);

    const onSignUpPress = async values => {
        const {profile_photo} = values;
        const registerFormdata = new FormData();
        registerFormdata.append('name', `${values.firstName}${values.lastName}`);
        registerFormdata.append('email', `${values.email}`);
        registerFormdata.append('password', values.password);
        registerFormdata.append('dateOfBirth', values.dateOfBirth);
        registerFormdata.append('phone', values.phone);
        registerFormdata.append('organization', values.organization);
        registerFormdata.append('state', values.state);
        registerFormdata.append('city', values.city);
        if (profile_photo) {
            registerFormdata.append('profile_photo', {
                uri:
                    Platform.OS === 'ios'
                        ? profile_photo.uri.replace('file://', 'file://')
                        : profile_photo.uri,
                name: profile_photo.uri.substring(0, profile_photo.fileName.lastIndexOf('.')),
                type: profile_photo.type,
            });
        }

        try {
            await registerUser(registerFormdata);
        } catch (e) {
            if (__DEV__) console.log('Fail to register user', e);
        }
        // await createUser(values);
    };

    return {
        onSignUpPress,
        isLoading,
    };
};
