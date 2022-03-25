import { View, Text } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { styles } from './style'
import { Logo } from '../../components/Logo'

export default function index() {
  return (
    <ScrollView style={styles.container}>
        <Logo/>
    </ScrollView>
  )
}