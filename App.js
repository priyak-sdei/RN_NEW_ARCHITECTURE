import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Provider} from 'react-redux';
import setup from './src/store/configureStore';
const Stack = createNativeStackNavigator();

import AuthStackNavigator from './src/navigator/AuthStack';
import DrawerNavigator from './src/navigator/DrawerNavigator';

export default function App() {
  return (
    <Provider store={setup()}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="AuthStack" component={AuthStackNavigator} />
          <Stack.Screen
            name="Drawer"
            component={DrawerNavigator}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
console.disableYellowBox = true;
