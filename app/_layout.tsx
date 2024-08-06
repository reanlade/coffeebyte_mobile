import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(screens)/LoadingPage" />
      <Stack.Screen name="(screens)/LoginPage" />
      <Stack.Screen name="(screens)/HomePage" />
    </Stack>
  );
}
