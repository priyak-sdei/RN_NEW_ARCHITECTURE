import {NavigationContainer, type ParamListBase} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import AuthStackNavigator from './AuthStack';
import DashboardStackNavigator from './DashboardStack';
import DrawerNavigator from './DrawerNavigator';
export interface RootStackParamList extends ParamListBase {
    Loader: undefined;
    Main: undefined;
}

const Stack = createNativeStackNavigator();
const Navigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name="HomeDrawer" component={DrawerNavigator} />
                <Stack.Screen name="DashboardStack" component={DashboardStackNavigator} />
                <Stack.Screen name="AuthStack" component={AuthStackNavigator} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigator;
