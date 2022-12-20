import { NavigationContainer } from '@react-navigation/native';
import React, { useState, useEffect, useCallback } from 'react';
import 'react-native-gesture-handler';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import { store, persistor } from '@store/configureStore';
const Stack = createNativeStackNavigator();
import AuthStackNavigator from './src/navigator/AuthStack';
import DrawerNavigator from './src/navigator/DrawerNavigator';
import Crashes from 'appcenter-crashes';
import { PersistGate } from 'redux-persist/integration/react';

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
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
      </PersistGate>
    </Provider>
  );
}
console.disableYellowBox = true;
