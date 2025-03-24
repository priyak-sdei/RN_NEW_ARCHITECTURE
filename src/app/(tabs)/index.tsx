import Button from '@/components/common/Button';
import Input from '@/components/common/Input';
import Screen from '@/components/common/Screen';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
export default function Home() {
  return (
    <Screen>
      <Screen.Header showBack={false} title={'Login'} />
      <Screen.Container>
        <View style={styles.container}>
          <Text>hiiii This is me1</Text>
          <Input placeholder="Email" />
          <Button buttonTitle="Login" />
        </View>
      </Screen.Container>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
});
