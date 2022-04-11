import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { theme } from '../../global/styles/theme'
import PropTypes from 'prop-types'; 

export default function BtnContinuar() {

  txtBtn.propTypes ={
    text: PropTypes.String
  }

  return (
    <View style={styles.containerBtn}>
      <Text style={styles.txtContinuar}>{this.props.text}</Text>
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