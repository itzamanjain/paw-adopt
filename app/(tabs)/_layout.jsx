import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import AntDesign from '@expo/vector-icons/AntDesign';
import Colors from '../../constants/Colors';
import Feather from '@expo/vector-icons/Feather';

import Entypo from '@expo/vector-icons/Entypo';

const TabLayout = () => {
  return (
   <Tabs
   screenOptions={{
       tabBarActiveTintColor:Colors.PRIMARY,
       tabBarInactiveTintColor:Colors.grey,
       tabBarStyle:{
           backgroundColor:Colors.WHITE,
           borderTopWidth:0,
           elevation:0,
           shadowOpacity:0,
       }
   }}
   >
        <Tabs.Screen name='home' 
        options={{
            title:'Home',
            headerShown:false,
            tabBarIcon: ({color}) => <FontAwesome5 name='home' size={20} color={color} />
        }}
        />
        <Tabs.Screen name='profile'
        options={{
            title:'Profile',
            headerShown:false,
            tabBarIcon: ({color}) => <Entypo name='user' size={20} color={color} />,
        }}
        />
        <Tabs.Screen name='inbox'
        options={{
            title:'Inbox',
            headerShown:false,
            tabBarIcon: ({color}) => <Feather name='message-square' size={20} color={color} />,
        }}
        />
        <Tabs.Screen name='fav'
        options={{
            title:'Favraite',
            headerShown:false,
            tabBarIcon: ({color}) => <AntDesign name='hearto' size={20} color={color}
            />
        }}
        />
   </Tabs>
  )
}

export default TabLayout