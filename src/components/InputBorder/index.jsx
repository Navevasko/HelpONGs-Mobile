import { TextInput } from 'react-native'
import React from 'react'
import { styles } from './style';
import PropTypes from 'prop-types'

export default function InputBorder({ onChangeText, height, placeholder, keyboardType }) {
  return (
    <TextInput
      style={[styles.descInput, { height: height }]}
      contextMenuHidden={true}
      maxLength={100}
      multiline={true}
      textAlignVertical={"top"}
      placeholder={placeholder}
      onChangeText={onChangeText}
      keyboardType={keyboardType}
    />
  );
}

InputBorder.propTypes = {
  onChangeText: PropTypes.func.isRequired,
  height: PropTypes.number,
  placeholder: PropTypes.string.isRequired,
  keyboardType: PropTypes.string,
};

InputBorder.defaultProps = {
  height: 50,
  keyboardType: 'default'
};