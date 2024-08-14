import { View, Text, Image } from 'react-native'
import React from 'react'
import { useUser } from '@clerk/clerk-expo'

const Header = () => {

    const {user} = useUser();



  return (
    <View style={{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    }}>
      <View>
      <Text style={{
        fontSize:18,
        fontWeight:'outfit'
      }} >Welcome,</Text>
        <Text
        style={{
            fontSize:24,
            fontWeight:'bold'
        }}
        >{user.fullName}</Text>
      </View>
      <View>
        <Image source={{uri:user?.imageUrl}} style={{
            width:50,
            height:50,
            marginTop:15,
            borderRadius:25
        }} />
      </View>
    </View>
  )
}

export default Header