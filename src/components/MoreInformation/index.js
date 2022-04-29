import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { styles } from './style'
import Icon from 'react-native-vector-icons/Feather'
import {theme} from '../../global/styles/theme.js'

export default function MoreInformation({cep, date, number}) {

  const [openModal, setOpenModal] = useState(false)

  return (
    <View style={styles.shadowContainer}>
        <View style={styles.container}>
        

        </View>
    </View>
  )
}