import { router } from 'expo-router';
import { useState } from 'react';

export const useRegister = () => {
  const [name, setName] = useState<string>('');
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');

  function onRegister() {
    router.push('RegisterStack');
    if (email && password) {
      console.warn('Login success');
      router.push('RegisterStack');
    }
  }

  return {
    name,
    setName,
    phoneNumber,
    setPhoneNumber,
    email,
    setEmail,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    onRegister,
  };
};
