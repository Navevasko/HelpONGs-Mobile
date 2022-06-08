import { View, Text, TextInput } from "react-native";
import React from "react";
import { styles } from "./style";
import PropTypes from "prop-types";
import { Colors } from "react-native-paper";

export default function InputBorder({
  title,
  onChangeText,
  max,
  editable,
  value,
  width,
  height,
  keyboardType,
  color,
  borderColor,
  txtColor, 
  multiline,
  placeholder, 
  onEndEditing
}) {
  return (
    <View
      style={[
        {
          width: width,
          marginBottom: 15,
        },
      ]}
    >
      <Text style={[styles.placeholder, {color:txtColor}]}>
        {title}
      </Text>
      <TextInput
        style={[
          styles.input,
          {
            height: height,
            backgroundColor: color,
            borderColor: borderColor
          },
        ]}
        editable={editable}
        value={value}
        max={max}
        keyboardType={keyboardType}
        multiline={multiline}
        placeholder={placeholder}
        onChangeText={onChangeText}
        onEndEditing={onEndEditing}
      />
    </View>
  );
}

InputBorder.propTypes = {
  title: PropTypes.string.isRequired,
  color: PropTypes.string,
  multiline: PropTypes.bool,
  txtColor: PropTypes.string,
  placeholder: PropTypes.string,
  borderColor: PropTypes.string,
  onChangeText: PropTypes.func,
  max: PropTypes.number,
  editable: PropTypes.bool,
  onEndEditing: PropTypes.func,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string,]),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  keyboardType: PropTypes.oneOf([
    "number-pad",
    "decimal-pad",
    "numeric",
    "email-address",
    "phone-pad",
    "default",
  ]),
};

InputBorder.defaultProps = {
  keyboardType: "default",
  width: 175,
  height: 45,
  
};