import { View, Text } from 'react-native'
import React from 'react'
import Icon from "react-native-vector-icons/Feather";
import {styles} from './style'

type opcoes = {
    iconName: string;
    fontSize?: number;
    color: string;
    text: string;
    style?: string;
}


export default function OpcoesPerfil(props: opcoes) {
  return (
    <View style={styles.containerOpcoes}>
        <Icon
         name={props.iconName}
         style={[styles.icon, { fontSize: props.fontSize, color: props.color }]}
         />
      <Text style={styles.txt}>{props.text}</Text>
    </View>
  )
}