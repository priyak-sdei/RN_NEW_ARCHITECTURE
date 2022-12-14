import { Button, View, Text, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as AppActions from '@actions';
import Analytics from 'appcenter-analytics';

function Login(props) {
  let [userCount, setUserCount] = useState(0);
  const dispatch = useDispatch();
  const authReducer = useSelector(state => state.authReducer);

  /**Adding event On Mount */
  useEffect(() => {
    dispatch(AppActions.saveEvent([{ name: 121211 }]));
    Analytics.startSession();

    // dispatch(AppActions.addLoginUserData({ name: 'Priya', action: "Demo react" }))
    // dispatch(AppActions.addition())
  }, []);

  useEffect(() => {
    // setTimeout(() => {
    //   dispatch(AppActions.login(Math.random()));
    // }, 4000);
  }, []);

  /*****dding listener  everytime props.x changes ***/
  useEffect(() => {
    // setUserCount('change' + Math.random());
    // console.log(props, 'props...', authReducer);
    // return () => {
    //   // removing the listener when props.x changes
    // };
  }, [authReducer.value]);

  const registerPage = () => {
    cdncj;
    props.navigation.navigate('Drawer', {
      itemId: 86,
      otherParam: 'anything you want here',
    });
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontFamily: 'Nunito-Light' }}>
        Logins screen {authReducer.value} {userCount}
      </Text>
      <Text style={{ fontFamily: 'Nunito-Medium' }}>
        Logins screen {authReducer.value} {userCount}
      </Text>
      <Text style={{ fontFamily: 'Nunito-Regular' }}>
        Logins screen {authReducer.value} {userCount}
      </Text>
      <Text style={{ fontFamily: 'Nunito-Bold' }}>
        Logins screen {authReducer.value} {userCount}
      </Text>
      <Icon name="rocket" size={30} color="#900" />
      <Button title="Go to Register Page" onPress={() => registerPage()} />

      <Button
        title="Go to Tab Page"
        onPress={() => {
          props.navigation.navigate('MyTabs');
        }}
      />
    </View>
  );
}
export default Login;
