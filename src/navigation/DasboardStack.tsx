import Home from '@screens/dashboard/home/Home';
import Profile from '@screens/dashboard/profile/Profile';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const DasboardStack = createNativeStackNavigator();

const DasboardStackNavigator = () => {
    return (
        <DasboardStack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
            <DasboardStack.Screen name="Home" component={Home} />
            <DasboardStack.Screen name="Profile" component={Profile} />
        </DasboardStack.Navigator>
    );
};

export default DasboardStackNavigator;
