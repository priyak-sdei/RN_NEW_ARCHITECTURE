import React from 'react';
import {Home, Login, SignUp} from '@screens/index';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StackParamList} from '@constants/index';
const AuthStack = createNativeStackNavigator<StackParamList>();

const AuthStackNavigator = () => {
    return (
        <AuthStack.Navigator screenOptions={{headerShown: false}}>
            <AuthStack.Screen name="Login" component={Login} />
            <AuthStack.Screen name="SignUp" component={SignUp} />
            <AuthStack.Screen name="Home" component={Home} />
        </AuthStack.Navigator>
    );
};

export default AuthStackNavigator;
