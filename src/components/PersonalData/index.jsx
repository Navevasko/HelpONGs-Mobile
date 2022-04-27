import { View, Text } from 'react-native'
import React from 'react'
import { styles } from './style'
import { Icon } from 'react-native-vector-icons/Feather'

export default function PersonalData() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dados pessoais</Text>

      <View>
        <Icon name="map" size={20}/>

      </View>
    </View>
  )
}