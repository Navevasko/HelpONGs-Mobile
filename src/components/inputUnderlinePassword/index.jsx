import { View, TextInput } from 'react-native'
import React from 'react'
import { useState } from 'react';
import { styles } from "./style";
import Icon from 'react-native-vector-icons/Feather';

export default function InputUnderlinePassword({
  iconName,
  color,
  size,
  placeholder,
  onChangeText
}) {
  const [showPassword, setShowPassword] = useState(true);
  const [eye, setEye] = useState("eye-off");

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
        secureTextEntry={showPassword}
      />
      <Icon
        name={eye}
        size={25}
        style={[styles.icon, styles.eye, { color: color }]}
        onPress={() => {
          if (showPassword == true) {
            setShowPassword(false);
            setEye("eye");
          } else {
            setShowPassword(true);
            setEye("eye-off");
          }
        }}
      />
    </View>
  );
}