import { TextInput } from 'react-native'
import React from 'react'
import { styles } from './style';
import PropTypes from 'prop-types'

export default function InputDesc({onChangeText}) {
  return (
    <TextInput
      style={styles.descInput}
      contextMenuHidden={true}
      maxLength={100}
      multiline={true}
      textAlignVertical={"top"}
      placeholder={"Faça uma descriçao de seu post"}
      onChangeText={onChangeText}
    />
  );
}

InputDesc.propTypes = {
    onChangeText: PropTypes.func.isRequired
}