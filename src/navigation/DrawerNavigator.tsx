import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import TabNavigator from './TabNavigator';
import CustomDrawerContent from './CustomDrawerContent';
import {Home, Profile, Listing} from '@screens/index';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator
            initialRouteName="HomeTab"
            screenOptions={{headerShown: false}}
            drawerContent={props => <CustomDrawerContent {...props} />}>
            <Drawer.Screen name="HomeTab" component={TabNavigator} />
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="Profile" component={Profile} />
            <Drawer.Screen name="Listing" component={Listing} />
        </Drawer.Navigator>
    );
};
export default DrawerNavigator;
