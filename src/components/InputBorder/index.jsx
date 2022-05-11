import { TextInput } from 'react-native'
import React from 'react'
import { styles } from './style';
import PropTypes from 'prop-types'

export default function InputBorder({ onChangeText, onChange, height, placeholder, keyboardType, value }) {
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
      value={value}
      onEndEditing={onChange}
    />
  );
}

InputBorder.propTypes = {
  onChangeText: PropTypes.func,
  height: PropTypes.number,
  placeholder: PropTypes.string.isRequired,
  keyboardType: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func
};

InputBorder.defaultProps = {
  height: 50,
  keyboardType: 'default'
};