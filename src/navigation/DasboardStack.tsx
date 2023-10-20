import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '@screens/dashboard/home/Home';
import Profile from '@screens/dashboard/profile/Profile';

const DasboardStack = createNativeStackNavigator();

const DasboardStackNavigator = () => {
    return (
        <DasboardStack.Navigator initialRouteName="Profile" screenOptions={{headerShown: false}}>
            <DasboardStack.Screen name="Profile" component={Profile} />
            <DasboardStack.Screen name="Home" component={Home} />
        </DasboardStack.Navigator>
    );
};

export default DasboardStackNavigator;
