import { SafeAreaView, View, Text, Image, Pressable, StyleSheet } from 'react-native'
import React, { useCallback, useEffect } from 'react'
import Colors from "../../constants/Colors";
import * as WebBrowser from 'expo-web-browser'
// import { Text, View, Button } from 'react-native'
import { Link } from 'expo-router'
import { useOAuth } from '@clerk/clerk-expo'

import * as Linking from 'expo-linking'

export const useWarmUpBrowser = () => {
  useEffect(() => {
    // Warm up the android browser to improve UX
    // https://docs.expo.dev/guides/authentication/#improving-user-experience
    void WebBrowser.warmUpAsync()
    return () => {
      void WebBrowser.coolDownAsync()
    }
  }, [])
}

WebBrowser.maybeCompleteAuthSession()

const LoginScreen = () => {

    useWarmUpBrowser()

    
  const { startOAuthFlow } = useOAuth({ strategy: 'oauth_google' })


  
  const onPress = useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } = await startOAuthFlow({
        redirectUrl: Linking.createURL('/(tabs)/home', { scheme: 'myapp' }),
      })

      if (createdSessionId) {
      
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error('OAuth error', err)
    }
  }, [])



    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.imageContainer}>
                <Image 
                    style={styles.image}
                    source={require('../../assets/images/login.png')} 
                    resizeMode="cover"
                />
            </View>
            <View style={styles.contentContainer}>
                <Text style={styles.title}>Ready To Make New Friends</Text>
                <Text style={styles.subtitle}>
                    Connect with like-minded people and expand your social circle.
                </Text>
            </View>
            <Pressable onPress={onPress} style={styles.button}>
                <Text style={styles.buttonText}>Get Started</Text>

            </Pressable>
            <Link href={"/(tabs)/home"}>Home</Link>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.WHITE,
    },
    imageContainer: {
        height: '60%',
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: '100%',
    },
    contentContainer: {
        padding: 20,
        alignItems: 'center',
    },
    title: {
        fontSize: 28,
        fontFamily: 'outfit-bold',
        textAlign: 'center',
        color: Colors.BLACK,
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 16,
        fontFamily: 'outfit-regular',
        textAlign: 'center',
        color: Colors.GRAY,
        marginBottom: 20,
    },
    button: {
        backgroundColor: Colors.PRIMARY,
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 25,
        marginHorizontal: 20,
        alignItems: 'center',
        shadowColor: Colors.BLACK,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 3,
    },
    buttonText: {
        fontSize: 18,
        fontFamily: 'outfit-bold',
        color: Colors.WHITE,
    },
});

export default LoginScreen