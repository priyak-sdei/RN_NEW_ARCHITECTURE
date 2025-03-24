// src/app/(auth)/_layout.tsx
import { Stack } from 'expo-router';
import React from 'react';

export default function AuthLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="RegisterStack" />
      <Stack.Screen name="index" />
    </Stack>
  );
}
