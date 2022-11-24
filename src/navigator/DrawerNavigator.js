import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import {Button, View, Text, Image, Pressable, Linking} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from '../screens/dashboard/home';
import Chat from '../screens/dashboard/chat';
import TabNavigator from './TabNavigator';
const Drawer = createDrawerNavigator();
import Icon from 'react-native-vector-icons/FontAwesome';
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

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{headerShown: false}}
      drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="Home" component={TabNavigator} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
