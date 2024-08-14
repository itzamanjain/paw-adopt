import { View, Text } from 'react-native'
import React from 'react'
import Header from '../../components/Home/Header'
import Slider from '../../components/Home/Slider'

const home = () => {
  return (
    <View style={{padding:20,marginTop:20}}>
        {/* Header */}

        <Header /> 

        {/* Slider */}

        <Slider />

        {/* category */}

        {/* List of Pets */}

        {/* add new Pets  */}
    </View>
  )
}

export default home