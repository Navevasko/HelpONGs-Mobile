import { TouchableOpacity, Text } from 'react-native'
import React from 'react'
import { theme } from '../../global/styles/theme';
import { styles } from './style';

export default function Cadastrar() {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={{ fontSize: 24, fontFamily: theme.fonts.medium }}> Cadastrar </Text>
    </TouchableOpacity>
  );
}