import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react';
import { styles } from './style';

export default function BtnLogin() {
  return (
    <View>
      <View style={styles.btnLogin}>
        <Text style={styles.txtLogin}>Login</Text>
      </View>
    </View>
  )
}