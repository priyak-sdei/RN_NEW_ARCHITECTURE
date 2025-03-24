import { useColorScheme } from '@/hooks/useColorScheme';
import { ThemeProvider } from '@/themes/ThemeContext';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    black: require('../assets/fonts/Poppins-Black.ttf'),
    bold: require('../assets/fonts/Poppins-Bold.ttf'),
    extraBold: require('../assets/fonts/Poppins-ExtraBold.ttf'),
    extraLight: require('../assets/fonts/Poppins-ExtraLight.ttf'),
    light: require('../assets/fonts/Poppins-Light.ttf'),
    medium: require('../assets/fonts/Poppins-Medium.ttf'),
    regular: require('../assets/fonts/Poppins-Regular.ttf'),
    thin: require('../assets/fonts/Poppins-Thin.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider>
      <Stack>
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
