import Register from '@/components/auth/Register';
import Screen from '@/components/common/Screen';
import React from 'react';
export default function RegisterStack() {
  return (
    <Screen variant="scroll">
      <Screen.Header showBack={true} title={'Register'} />
      <Screen.Container>
        <Register />
      </Screen.Container>
    </Screen>
  );
}
