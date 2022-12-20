// screens/Home.js
import React, { useEffect } from 'react';
import { Button, View, Text } from 'react-native';

function Home(props) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Dash boardscreen</Text>
      <Button
        title="Go to Login Page"
        onPress={() =>
          props.navigation.navigate('Login', {
            itemId: 86,
            otherParam: 'anything you want here',
          })
        }
      />

      <Button
        title="Toggle Menu"
        onPress={() => props.navigation.openDrawer()}
      />
    </View>
  );
}
export default Home;
