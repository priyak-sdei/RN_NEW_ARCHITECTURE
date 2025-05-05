import { BasketIcon, BasketIconFocused } from '@/assets/svgs';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Tabs } from 'expo-router';
import React from 'react';
import { Platform, StyleSheet } from 'react-native';
import Text from '../common/Text';

const tabScreen = [
  {
    name: 'index',
    optionStyle: {
      title: 'Home11',
      tabBarIcon: ({ focused }: { focused: boolean }) =>
        focused ? <BasketIconFocused /> : <BasketIcon />,
      tabBarLabel: ({ focused }: { focused: boolean }): ReactNode => (
        <Text
          style={[
            focused ? styles.focusedCustomLabelStyle : styles.customLabelStyle,
            { textAlign: 'center' },
          ]}
        >
          Home
        </Text>
      ),
    },
  },
  // {
  //   name: 'Settings',
  //   options: {
  //     title: 'Settings',
  //   },
  // },
];

interface RoutingProps {
  key?: string;
  name?: string;
  params?: object;
}

export default function DefaultTabs() {
  const colorScheme = useColorScheme();

  // const setTabIcon = (route: RoutingProps, focused: boolean) => {
  //   let IconComponent;
  //   let label;

  //   if (route.name === 'index') {
  //     IconComponent = focused ? BasketIconFocused : BasketIcon;
  //     // label = 'Home';
  //   } else if (route.name === 'Settings') {
  //     IconComponent = focused ? CalendarIconFocused : CalendarIcon;
  //     // label = 'Settings';
  //   }

  //   if (!IconComponent) return null;

  //   return (
  //     <View style={styles.tabItemStyle}>
  //       <IconComponent />
  //       <Text
  //         style={
  //           focused ? styles.focusedCustomLabelStyle : styles.customLabelStyle
  //         }
  //       >
  //         {label}
  //       </Text>
  //     </View>
  //   );
  // };

  return (
    <Tabs
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        // tabBarShowLabel: false,
        // tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        // tabBarIcon: ({ focused }) => setTabIcon(route, focused),
        tabBarStyle: {
          ...styles.tabBarStyle,
          height: Platform.OS === 'ios' ? 70 : 75,
        },
        // tabBarStyle: Platform.select({
        //   ios: {
        //     position: 'absolute',
        //   },
        //   android: {
        //     height: 50,
        //     borderTopLeftRadius: 30,
        //     borderTopRightRadius: 30,
        //     paddingBottom: 10,
        //     backgroundColor: '#fff',
        //     borderTopWidth: 0,
        //     elevation: 10,
        //     shadowOpacity: 0.5,
        //     shadowRadius: 10,
        //   },
        //   default: {},
        // }),
      })}
    >
      {tabScreen.map(tab => (
        <Tabs.Screen key={tab.name} name={tab.name} options={tab.optionStyle} />
      ))}
    </Tabs>
  );
}

const styles = StyleSheet.create({
  // customLabelStyle: {
  //   // ...Fonts.medium,
  //   color: colors.black,
  //   fontSize: 12,
  //   marginTop: 5,
  //   width: '100%',
  // },
  // tabBarStyle: {
  //   backgroundColor: colors.white,
  //   borderTopLeftRadius: 25,
  //   borderTopRightRadius: 25,
  //   paddingHorizontal: 5,
  //   // paddingTop: 8,
  // },
  // tabContainer: {
  //   backgroundColor: colors.white,
  //   flex: 1,
  // },
  // tabIconStyle: {
  //   height: 25,
  //   width: 25,
  // },
  // tabItemStyle: {
  //   alignItems: 'center',
  //   marginTop: 10,
  //   paddingHorizontal: 10,
  //   paddingVertical: 15,
  // },
  // focusedCustomLabelStyle: {
  //   color: colors.black,
  //   fontSize: 12,
  //   marginTop: 5,
  //   width: '100%',
  //   fontFamily: 'bold',
  // },
});
