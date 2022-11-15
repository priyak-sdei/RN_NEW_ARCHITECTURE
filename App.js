import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import {Button, View, Text, Image, Pressable, Linking} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Home from './src/screens/dashboard/home';
import Chat from './src/screens/dashboard/chat';

import Login from './src/screens/auth/login';
import Register from './src/screens/auth/register';
import Icon from 'react-native-vector-icons/FontAwesome';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function TabNav() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused
              ? 'ios-information-circle'
              : 'ios-information-circle-outline';
          } else if (route.name === 'Chat') {
            iconName = focused ? 'ios-list' : 'ios-list-outline';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Chat" component={Chat} />
    </Tab.Navigator>
  );
}
function DrawerNav() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{headerShown: false}}
      drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="Home" component={TabNav} />
    </Drawer.Navigator>
  );
}
function CustomDrawerContent(props) {
  const {navigation} = props;
  return (
    <DrawerContentScrollView
      {...props}
      style={{
        backgroundColor: 'rgba(10,71,113,1)',
        padding: 0,
        marginTop: 0,
      }}>
      <View
        style={{
          alignItems: 'center',
          padding: 10,
        }}>
        <Pressable
          style={{alignSelf: 'flex-end'}}
          onPress={() => navigation.closeDrawer()}>
          <Text
            style={{
              color: 'white',
              fontSize: 15,

              paddingBottom: 10,
            }}>
            Close
          </Text>
        </Pressable>

        <Image
          resizeMode="cover"
          style={{height: 100, width: 100, borderRadius: 10}}
          source={{uri: 'https://picsum.photos/200/300'}}
        />
        <Text style={{padding: 10, fontSize: 20}}>Welcome Priya</Text>
      </View>
      <DrawerItem
        inactiveTintColor={'black'}
        activeBackgroundColor={'white'}
        activeTintColor={'black'}
        focused={true}
        label={({focused, color}) => (
          <Text
            style={{
              color: focused ? 'rgba(10,71,113,1)' : '#757575',
              fontSize: 20,
            }}>
            Home
          </Text>
        )}
        icon={({focused, color, size}) => (
          <Icon
            color={focused ? 'rgba(10,71,113,1)' : '#757575'}
            size={25}
            name={focused ? 'home' : 'home'}
          />
        )}
        onPress={() => navigation.navigate('Home')}
        style={{padding: 0}}
      />
      <DrawerItem
        inactiveTintColor={'black'}
        activeBackgroundColor={'white'}
        activeTintColor={'black'}
        focused={false}
        label={({focused, color}) => (
          <Text
            style={{
              color: focused ? 'rgba(10,71,113,1)' : '#757575',
              fontSize: 20,
            }}>
            Logout
          </Text>
        )}
        icon={({focused, color, size}) => (
          <Icon
            color={focused ? 'rgba(10,71,113,1)' : '#757575'}
            size={25}
            name={focused ? 'sign-out' : 'sign-out'}
          />
        )}
        onPress={() => Linking.openURL('https://mywebsite.com/help')}
        style={{padding: 0}}
      />
    </DrawerContentScrollView>
  );
}
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen
          name="MyTabs"
          component={TabNav}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Drawer"
          component={DrawerNav}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
console.disableYellowBox = true;
