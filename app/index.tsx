import { Link, Redirect, useRootNavigationState } from "expo-router";
import {  Text, View } from "react-native";
import Colors from "./../constants/Colors";
import { useEffect } from "react";
import { useUser } from "@clerk/clerk-expo";

export default function Index() {
  
  const  {user} = useUser();

  const rootNavigation = useRootNavigationState();


  useEffect(() => {
    checkNavLoaded();
  },[])

  const checkNavLoaded = () =>{
    if(!rootNavigation.key) return null;


  }
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Colors.WHITE,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {user? <Redirect href={'/(tabs)/home'} /> : <Redirect href={'/login'} />}
      <Link href="/login" >
      <Text>Go to login </Text>
      </Link>
      <Text
        style={{ fontFamily: "outfit", fontSize: 24 }}
      >Edit app/index.tsx to edit this screen.</Text>
    </View>
  );
}
