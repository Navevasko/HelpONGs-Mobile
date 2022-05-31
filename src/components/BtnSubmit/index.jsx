import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { theme } from "../../global/styles/theme";
import { styles } from "./style";
import PropTypes from "prop-types";

export default function BtnSubmit({
  onPress,
  text,
  color,
  width,
  height,
  fontSize,
}) {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        {
          backgroundColor: color,
          width: width,
          height: height,
        },
      ]}
      onPress={onPress}
    >
      <Text style={[styles.buttonText, { fontSize: fontSize }]}>{text}</Text>
    </TouchableOpacity>
  );
}

BtnSubmit.propTypes = {
  onPress: PropTypes.func,
  text: PropTypes.string,
  color: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  fontSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

BtnSubmit.defaultProps = {
  color: theme.colors.primary,
  width: "90%",
  height: 45,
  fontSize: 22,
};
