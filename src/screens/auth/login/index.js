// screens/Blog.js
import React, {Component} from 'react';
import {Button, View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

function Login({navigation}) {
  console.log('hiiiii1', navigation);

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Logins screen</Text>
      <Icon name="rocket" size={30} color="#900" />
      <Button
        title="Go to Register Page"
        onPress={() =>
          navigation.navigate('Register', {
            itemId: 86,
            otherParam: 'anything you want here',
          })
        }
      />

      <Button
        title="Go to Tab Page"
        onPress={() => {
          navigation.navigate('MyTabs');
        }}
      />
    </View>
  );
}
export default Login;
