import Login from '@/components/auth/Login';
import Screen from '@/components/common/Screen';
import React from 'react';
export default function LoginStack() {
  return (
    <Screen>
      <Screen.Header showBack={false} title={'Login'} />
      <Screen.Container>
        <Login />
      </Screen.Container>
    </Screen>
  );
}
