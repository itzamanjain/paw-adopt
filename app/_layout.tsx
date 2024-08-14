import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { ClerkProvider, ClerkLoaded } from '@clerk/clerk-expo'
import * as SecureStore from 'expo-secure-store'



const tokenCache = {
  async getToken(key: string) {
    try {
      const item = await SecureStore.getItemAsync(key)
      if (item) {
        console.log(`${key} was used 🔐 \n`)
      } else {
        console.log('No values stored under key: ' + key)
      }
      return item
    } catch (error) {
      console.error('SecureStore get item error: ', error)
      await SecureStore.deleteItemAsync(key)
      return null
    }
  },
  async saveToken(key: string, value: string) {
    try {
      return SecureStore.setItemAsync(key, value)
    } catch (err) {
      return
    }
  },
}

export default function RootLayout() {

  const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!

  useFonts({ 
    'outfit': require('./../assets/fonts/Outfit-Regular.ttf') ,
    'outfit-bold': require('./../assets/fonts/Outfit-Bold.ttf'),
    'outfit-medium': require('./../assets/fonts/Outfit-Medium.ttf'),
  });

  return (
    <ClerkProvider
    tokenCache={tokenCache}
    publishableKey={publishableKey}>
    <Stack>
      <Stack.Screen name="index" />
      <Stack.Screen name="(tabs)"
      options={{
        headerShown: false,
      }
  }
      />
      <Stack.Screen name="login/index" 
      options={{
        headerShown: false,
      }}
      />
    </Stack>
    </ClerkProvider>
  );
}
