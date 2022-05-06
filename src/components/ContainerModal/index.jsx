import { View, Text } from 'react-native'
import React from 'react'
import { styles } from './style'
import ModalShadow from '../ModalShadow'
import Icon from 'react-native-vector-icons/Feather'

export default function ContainerModal({children, onClose}) {
  return (
    <ModalShadow>
      <View style={styles.modal}>
        <Icon
          name="arrow-left-circle"
          size={40}
          style={styles.close}
          onPress={onClose}
        />
        {children}
      </View>
    </ModalShadow>
  );
}