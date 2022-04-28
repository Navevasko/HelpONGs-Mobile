import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react';
import { styles } from './style';

export default function BtnLogin() {
  return (
    <View>
      <TouchableOpacity style={styles.btnLogin} onPress={() => {console.log('Hello World');}}>
              <Text style={styles.txtLogin}>Login</Text>
          </TouchableOpacity>
    </View>
  )
}