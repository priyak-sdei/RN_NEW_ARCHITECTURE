import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Home from "@screens/dashboard/home/Home";
import Profile from "@screens/dashboard/profile/Profile";

const DashboardStack = createNativeStackNavigator();

const DashboardStackNavigator = () => {
    return (
        <DashboardStack.Navigator initialRouteName="Profile" screenOptions={{headerShown: false}}>
            <DashboardStack.Screen name="Profile" component={Profile} />
            <DashboardStack.Screen name="Home" component={Home} />
        </DashboardStack.Navigator>
    );
};

export default DashboardStackNavigator;
