// screens/Blog.js
import React, {Component} from 'react';
import {Button, View, Text} from 'react-native';
function Login({navigation}) {
  console.log('hiiiii1', navigation);

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Logins screen</Text>
      <Button
        title="Go to Detailsd"
        onPress={() => navigation.navigate('Register')}
      />
    </View>
  );
}
export default Login;
