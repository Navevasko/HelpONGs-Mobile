import { View, TextInput, ToastAndroid } from "react-native";
import React, { useState } from "react";
import { styles } from "./style";
import Icon from "react-native-vector-icons/Feather";
import PropTypes from "prop-types";

export default function InputUnderlineLogin({
  iconName,
  color,
  size,
  placeholder,
  onChangeText,
  keyboardType,
  value,
  max,
  editable
}) {


  return (
    <View style={styles.container}>
      <View style={styles.containerIcon}>
        <Icon
          name={iconName}
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
        editable={editable}
      />
    </View>
  );
}

InputUnderlineLogin.propTypes = {
  iconName: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.number,
  placeholder: PropTypes.string.isRequired,
  onChangeText: PropTypes.func,
  keyboardType: PropTypes.oneOf([
    "number-pad",
    "decimal-pad",
    "numeric",
    "email-address",
    "phone-pad",
    "default"
  ]).isRequired,
  value: PropTypes.string,
  max: PropTypes.number,
  editable: PropTypes.bool,
};