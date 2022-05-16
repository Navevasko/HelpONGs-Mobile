import { View, TextInput } from "react-native";
import React from "react";
import { styles } from "./style";
import Icon from "react-native-vector-icons/Feather";
import PropTypes from "prop-types";
import { theme } from "../../global/styles/theme";

export default function InputUnderline({
  iconName,
  iconColor,
  iconSize,
  placeholder,
  onChangeText,
  keyboardType,
  value,
  max,
  editable,
  borderColor,
  textCenter,
  onEndEditing,
}) {
  return (
    <View style={styles.container}>
      {iconName && (
        <View style={styles.containerIcon}>
          <Icon
            name={iconName}
            size={iconSize}
            style={[styles.icon, { color: iconColor }]}
          />
        </View>
      )}
      <TextInput
        style={[
          styles.input,
          {
            borderBottomColor: borderColor,
            textAlign: textCenter == true ? "center" : "left",
            paddingStart: textCenter == true ? 0 : 5,
          },
        ]}
        placeholder={placeholder}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
        maxLength={max}
        value={value}
        editable={editable}
        onEndEditing={onEndEditing}
        selectionColor={theme.colors.primaryFaded}
      />
    </View>
  );
}

InputUnderline.propTypes = {
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
    "default",
  ]).isRequired,
  value: PropTypes.string,
  max: PropTypes.number,
  editable: PropTypes.bool,
  borderColor: PropTypes.string,
  textCenter: PropTypes.bool,
  onEndEditing: PropTypes.func
};

InputUnderline.defaultProps = {
  keyboardType: "default",
  editable: true,
  borderColor: theme.colors.black,
  textCenter: false
};
