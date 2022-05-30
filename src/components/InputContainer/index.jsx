import { View, Text } from "react-native";
import React from "react";
import { styles } from "./style";
import PropTypes from "prop-types";

export default function InputContainer({ children, flexDirection}) {
  return (
    <View style={[styles.inputContainer, { flexDirection: flexDirection }]}>
      {children}
    </View>
  );
}

InputContainer.propTypes = {
  flexDirection: PropTypes.oneOf(["row", "column"]),
  display: PropTypes.string
};

InputContainer.defaultProps = {
  flexDirection: "row",
  display:"flex"
};
