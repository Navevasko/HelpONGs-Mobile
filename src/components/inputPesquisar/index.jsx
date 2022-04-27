import {View, TextInput } from 'react-native'
import React from 'react'
import PropTypes from "prop-types";
import Icon from "react-native-vector-icons/Feather";
import { styles } from './style';

export default function InputPesquisar(
    color,
    size,
    onChangeText,
    placeholder,
    keyboardType,
    value,
    max
) {
  return (
    <View style={styles.container}>
      <View style={styles.containerIcon}>
        <Icon
          name="search"
          size={size}
          style={[styles.icon, { color: color }]}
        />
      </View>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
        maxLength={max}
        value={value}
      />
    </View>
  )
}

InputPesquisar.propTypes = {
    color: PropTypes.string,
    size: PropTypes.string,
    placeholder: PropTypes.string,
    onChangeText: PropTypes.func,
    keyboardType: PropTypes.string,
    value: PropTypes.string,
    max: PropTypes.number
  };

