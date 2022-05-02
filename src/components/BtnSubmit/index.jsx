import { TouchableOpacity, Text } from "react-native";
import React from "react";
import { theme } from "../../global/styles/theme";
import { styles } from "./style";
import PropTypes from "prop-types";

export default function BtnSubmit({ onPress, text }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={{ fontSize: 24, fontFamily: theme.fonts.medium }}>
        {" "}
        {text}{" "}
      </Text>
    </TouchableOpacity>
  );
}

BtnSubmit.propTypes = {
  onPress: PropTypes.func,
  text: PropTypes.string,
};
