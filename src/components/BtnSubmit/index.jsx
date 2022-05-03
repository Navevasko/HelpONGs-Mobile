import { TouchableOpacity, Text } from "react-native";
import React from "react";
import { theme } from "../../global/styles/theme";
import { styles } from "./style";
import PropTypes from "prop-types";

export default function BtnSubmit({ onPress, text, color }) {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: color }]}
      onPress={onPress}
    >
      <Text style={styles.buttonText}>
        {" "}
        {text}{" "}
      </Text>
    </TouchableOpacity>
  );
}

BtnSubmit.propTypes = {
  onPress: PropTypes.func,
  text: PropTypes.string,
  color: PropTypes.string
};

BtnSubmit.defaultProps = {
  color: theme.colors.primary
}