import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './style'
import Icon from 'react-native-vector-icons/Feather'
import {theme} from '../../global/styles/theme.js'

export default function PersonalData() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dados pessoais</Text>

      <View style={styles.information}>
        <Icon name={"map"} style={{color: theme.colors.secondary, marginEnd: 10}} size={25}/>
        <Text style={styles.text}> Jandira </Text>
      </View>

      <View style={styles.information}>
        <Icon name={"gift"} style={{color: theme.colors.secondary, marginEnd: 10}} size={25}/>
        <Text style={styles.text}> 15/07/2004 </Text>
      </View>

      <View style={styles.information}>
        <Icon name={"phone"} style={{color: theme.colors.secondary, marginEnd: 10}} size={25}/>
        <Text style={styles.text}> (11) 95173-6972 </Text>
      </View>

      <TouchableOpacity style={styles.information} onPress={() => {}}>
        <Icon name={"more-horizontal"} style={{color: theme.colors.secondary, marginEnd: 10}} size={25}/>
        <Text style={styles.text}> Mais informações </Text>
      </TouchableOpacity>
    </View>
  )
}