import React from "react";
import { TextInput, View, Text } from "react-native";
import { styles } from "./style";
import PropTypes from "prop-types";

export default function InputBorder({
  onChangeText,
  onChange,
  height,
  placeholder,
  keyboardType,
  value,
  max,
  text,
}) {
  return (
    <View style={styles.container}>
      {text && <Text style={styles.text}>{text}</Text>}

      <TextInput
        style={[styles.input, { height: height }]}
        maxLength={max}
        multiline={true}
        textAlignVertical={"top"}
        placeholder={placeholder}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
        value={value}
        onEndEditing={onChange}
      />
    </View>
  );
}

InputBorder.propTypes = {
  onChangeText: PropTypes.func,
  height: PropTypes.number,
  placeholder: PropTypes.string.isRequired,
  keyboardType: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

InputBorder.defaultProps = {
  height: 50,
  keyboardType: "default",
  max: 100,
};
