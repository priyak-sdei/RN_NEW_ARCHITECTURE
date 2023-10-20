import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import TabNavigator from './TabNavigator';
import CustomDrawerContent from './CustomDrawerContent';
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator
            initialRouteName="HomePage"
            screenOptions={{headerShown: false}}
            drawerContent={props => <CustomDrawerContent {...props} />}>
            <Drawer.Screen name="HomePage" component={TabNavigator} />
        </Drawer.Navigator>
    );
};
export default DrawerNavigator;
