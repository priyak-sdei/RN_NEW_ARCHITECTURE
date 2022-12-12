// screens/Home.js
import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';
class Home extends Component {
  constructor(props) {
    super(props);
    console.log(props.navigation, '');
    console.log(props.route, 'Params from Previous Screen');
  }
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Dash boardscreen</Text>
        <Button
          title="Go to Login Page"
          onPress={() =>
            this.props.navigation.navigate('Login', {
              itemId: 86,
              otherParam: 'anything you want here',
            })
          }
        />

        <Button
          title="Toggle Menu"
          onPress={() => this.props.navigation.openDrawer()}
        />
      </View>
    );
  }
}
export default Home;
