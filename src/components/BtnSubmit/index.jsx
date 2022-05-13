import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { theme } from "../../global/styles/theme";
import { styles } from "./style";
import PropTypes from "prop-types";

export default function BtnSubmit({ onPress, text, color, size }) {
  const sizes = [
    { name: "big", width: "90%", height: 45, fontSize: 22 },
    { name: "medium", width: "60%", height: 35, fontSize: 17 },
    { name: "small", width: "45%", height: 30, fontSize: 14 },
  ];

  return (
    <TouchableOpacity
      style={[
        styles.button,
        {
          backgroundColor: color,
          width: sizes[size].width,
          height: sizes[size].height,
        },
      ]}
      onPress={onPress}
    >
      <Text style={[styles.buttonText, { fontSize: sizes[size].fontSize }]}>
        {" "}
        {text}{" "}
      </Text>
    </TouchableOpacity>
  );
}

BtnSubmit.propTypes = {
  onPress: PropTypes.func,
  text: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.oneOf([0, 2, 2]),
};

BtnSubmit.defaultProps = {
  color: theme.colors.primary,
};
