import { router } from 'expo-router';
import { useState } from 'react';

export const useLogin = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  function onLogin() {
    router.replace('/(tabs)');
    if (email && password) {
      console.warn('Login success');
      router.push('RegisterStack');
    } else {
      console.warn('Login failed');
    }
  }

  function onSignUp() {
    router.push('RegisterStack');
  }

  return {
    email,
    setEmail,
    password,
    setPassword,
    onLogin,
    onSignUp,
  };
};
