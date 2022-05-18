import { View, Text, TextInput } from "react-native";
import React from "react";
import { styles } from "./style";
import PropTypes from "prop-types";

export default function InputBorder({
  title,
  onChange,
  max,
  editable,
  value,
  width,
  height,
  keyboardType,
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
      <Text style={styles.placeholder}>{title}</Text>
      <TextInput
        style={[
          styles.input,
          {
            height: height,
          },
        ]}
        editable={editable}
        value={value}
        max={max}
        keyboardType={keyboardType}
      />
    </View>
  );
}

InputBorder.propTypes = {
  title: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  max: PropTypes.number,
  editable: PropTypes.bool,
  value: PropTypes.string,
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
