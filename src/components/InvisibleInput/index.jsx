import { TextInput } from "react-native";
import React from "react";
import PropTypes from "prop-types";
import { styles } from "./style";
import { theme } from "../../global/styles/theme";

export default function InvisibleInput({
  value,
  max,
  placeholder,
  onChangeText,
  onEndEditing,
  keyboardType,
}) {
  return (
    <TextInput
      style={styles.invisibleInput}
      maxLength={max}
      multiline={true}
      textAlignVertical={"top"}
      placeholder={placeholder}
      onChangeText={onChangeText}
      keyboardType={keyboardType}
      value={value}
      onEndEditing={onEndEditing}
      selectionColor={theme.colors.primaryFaded}
    />
  );
}

InvisibleInput.propTypes = {
  value: PropTypes.any,
  max: PropTypes.number,
  placeholder: PropTypes.string,
  onChangeText: PropTypes.func,
  onEndEditing: PropTypes.func,
  keyboardType: PropTypes.oneOf([
    "number-pad",
    "decimal-pad",
    "numeric",
    "email-address",
    "phone-pad",
    "default",
  ]),
};

InvisibleInput.defaultProps = {
  keyboardType: "default",
};
