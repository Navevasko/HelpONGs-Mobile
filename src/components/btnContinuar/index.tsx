import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { theme } from '../../global/styles/theme'

type txtBtn ={
  text: String
}

export default function BtnContinuar(props: txtBtn) {
  return (
    <View style={styles.containerBtn}>
      <Text style={styles.txtContinuar}>{props.text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    containerBtn:{
        height:48,
        width:215,
        textAlign:"center",
        borderRadius:30,
        backgroundColor:theme.colors.primary,
        alignSelf:'center',
        justifyContent:'center',
        alignItems:'center',
    },
    txtContinuar:{
        color:theme.colors.black,
        fontSize:24,
        lineHeight:29,
        letterSpacing:-0.5,
        fontWeight:"bold",
        textAlign:"center"
    }
})