import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Menu from '../../components/navBar'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Doar() {
  return (
    <SafeAreaView>
    <Menu/>
    <View style={styles.container}>
    
      <Text>Doar</Text>
    </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    height:"80%",
    backgroundColor:"aqua",
    justifyContent:"center",
    alignContent:"center"
  }
})