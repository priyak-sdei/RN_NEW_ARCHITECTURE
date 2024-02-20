import React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Home from "@screens/dashboard/home/Home";
import Profile from "@screens/dashboard/profile/Profile";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <Tab.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
    );
};

export default TabNavigator;
