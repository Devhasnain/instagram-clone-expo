import { View, Text } from 'react-native'
import React from 'react'
import Logo from './Logo'

const LoadingScreen = () => {
  return (
    <View style={{
        flex:1,
        backgroundColor:"black",
        display:"flex",
        alignItems:"center",
        justifyContent:"center"
    }}>
        <Logo/>
    </View>
  )
}

export default LoadingScreen