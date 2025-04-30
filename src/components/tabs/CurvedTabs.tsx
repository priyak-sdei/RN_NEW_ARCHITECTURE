import { colors } from '@/themes';
import Ionicons from '@expo/vector-icons/Ionicons';
import React from 'react';
import { Alert, StyleSheet, TouchableOpacity } from 'react-native';
import { CurvedBottomBarExpo } from 'react-native-curved-bottom-bar';
import Animated from 'react-native-reanimated';
import Home from '../../app/(tabs)';
import Settings from '../../app/(tabs)/Settings';

type IconName = 'home-outline' | 'settings-outline';

export default function CurvedTabs() {
  const _renderIcon = (routeName: string, selectedTab: string) => {
    let icon: IconName = 'home-outline';

    switch (routeName) {
      case 'index':
        icon = 'home-outline';
        break;
      case 'Settings':
        icon = 'settings-outline';
        break;
    }

    return (
      <Ionicons
        name={icon}
        size={25}
        color={routeName === selectedTab ? 'black' : 'gray'}
      />
    );
  };
  const renderTabBar = ({
    routeName,
    selectedTab,
    navigate,
  }: {
    routeName: string;
    selectedTab: string;
    navigate: (tabName: string) => void;
  }) => {
    return (
      <TouchableOpacity
        onPress={() => navigate(routeName)}
        style={styles.tabbarItem}
      >
        {_renderIcon(routeName, selectedTab)}
      </TouchableOpacity>
    );
  };

  return (
    <CurvedBottomBarExpo.Navigator
      type="DOWN"
      style={styles.bottomBar}
      shadowStyle={styles.shawdow}
      height={55}
      circleWidth={0}
      width={0}
      borderColor="transparent"
      borderWidth={0}
      id="curved-bottom-bar"
      bgColor="white"
      initialRouteName="index"
      borderTopLeftRight
      circlePosition="CENTER"
      backBehavior="initialRoute"
      screenListeners={{}}
      defaultScreenOptions={{}}
      renderCircle={({
        selectedTab,
        navigate,
      }: {
        selectedTab: string;
        navigate: (tabName: string) => void;
      }) => (
        <Animated.View style={styles.btnCircleUp}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => Alert.alert('Click Action')}
          >
            <Ionicons name={'apps-sharp'} color="gray" size={25} />
          </TouchableOpacity>
        </Animated.View>
      )}
      tabBar={renderTabBar}
      screenOptions={{
        headerShown: false,
      }}
    >
      <CurvedBottomBarExpo.Screen
        name="index"
        position="LEFT"
        component={Home}
      />
      <CurvedBottomBarExpo.Screen
        name="Settings"
        component={Settings}
        position="RIGHT"
      />
    </CurvedBottomBarExpo.Navigator>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  shawdow: {
    shadowColor: colors.mutedGrey,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 1,
    shadowRadius: 5,
  },
  button: {
    flex: 1,
    justifyContent: 'center',
  },
  bottomBar: {},
  btnCircleUp: {
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: colors.shadowColor,
    bottom: 30,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 1,
  },
  imgCircle: {
    width: 30,
    height: 30,
    tintColor: colors.mutedGrey,
  },
  tabbarItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: 30,
    height: 30,
  },
});
