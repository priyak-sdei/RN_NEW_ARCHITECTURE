import { NavigationContainer } from '@react-navigation/native';
import React, { useState, useEffect, useCallback } from 'react';
import 'react-native-gesture-handler';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import setup from '@store/configureStore';
const Stack = createNativeStackNavigator();
import AuthStackNavigator from './src/navigator/AuthStack';
import DrawerNavigator from './src/navigator/DrawerNavigator';
import Crashes from 'appcenter-crashes';

export default function App() {
  useEffect(() => {
    // const enabled = await Crashes.isEnabled();
    // console.log("IS checked", enabled);
  });

  return (
    <Provider store={setup()}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="AuthStack" component={AuthStackNavigator} />
          <Stack.Screen
            name="Drawer"
            component={DrawerNavigator}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
console.disableYellowBox = true;
