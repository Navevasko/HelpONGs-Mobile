import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from "react-native-vector-icons/Feather";
import { theme } from '../../global/styles/theme';

export default function OptionsConfig({txt}) {
  return (
    <View style={styles.containerOptions}>
      <View style={styles.containerPress}>
        <Text style={styles.txtPress}>{txt}</Text>
        <Icon name={"chevron-right"} size={25} color={"grey"}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    containerOptions:{
        height:35,
        width:"100%",
        borderBottomColor:"grey",
        borderBottomWidth:1,
        marginBottom:10
    },
    containerPress:{
        height:"100%",
        width:"100%",
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:'center',
    },
    txtPress:{
        fontSize:20,
        color:theme.colors.primary,
        fontFamily:theme.fonts.semiBold,
    }
})