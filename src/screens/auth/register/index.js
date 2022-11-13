// screens/Blog.js
import React, {Component} from 'react';
import {Button, View, Text} from 'react-native';
import {StackActions, CommonActions} from '@react-navigation/native';

class Register extends Component {
  constructor(props) {
    super(props);
    console.log(props.navigation, '');
    console.log(props.route, 'Params from Previous Screen');
  }
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Register screen</Text>
        <Button
          title="Go back to Login"
          onPress={() => this.props.navigation.goBack()}
        />
        <Button
          title="Reset"
          onPress={() => {
            this.props.navigation.reset({
              index: 1,
              routes: [
                {
                  name: 'Home',
                  params: {someParam: 'Param1'},
                },
              ],
            });
          }}
        />
      </View>
    );
  }
}
export default Register;
