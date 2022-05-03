import { View } from 'react-native'
import React from 'react'
import { styles } from './style'

export default function Shadow({children}) {
  return (
    <View style={styles.shadow}>
        {children}
    </View>
  )
}