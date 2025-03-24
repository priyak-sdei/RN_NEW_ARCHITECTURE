import { router } from 'expo-router';
import { useState } from 'react';

export const useLogin = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  function onLogin() {
    router.push('RegisterStack');
    if (email && password) {
      console.warn('Login success');
      router.push('RegisterStack');
    } else {
      console.warn('Login failed');
    }
  }

  return {
    email,
    setEmail,
    password,
    setPassword,
    onLogin,
  };
};
