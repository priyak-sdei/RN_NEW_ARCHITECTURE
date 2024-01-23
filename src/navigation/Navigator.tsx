import {NavigationContainer, type ParamListBase} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import GLOBAL_THEME from '@theme/index';
import React from 'react';
import {useColorScheme} from 'react-native';
import AuthStackNavigator from './AuthStack';
import DashboardStackNavigator from './DashboardStack';
import DrawerNavigator from './DrawerNavigator';
const {THEME} = GLOBAL_THEME;
// export interface RootStackParamList extends ParamListBase {
//     Loader: undefined;
//     Main: undefined;
// }

const Stack = createNativeStackNavigator();
const Navigator = () => {
    const scheme = useColorScheme();
    return (
        <NavigationContainer theme={THEME[scheme]}>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name="AuthStack" component={AuthStackNavigator} />

                <Stack.Screen name="HomeDrawer" component={DrawerNavigator} />
                <Stack.Screen name="DashboardStack" component={DashboardStackNavigator} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigator;
