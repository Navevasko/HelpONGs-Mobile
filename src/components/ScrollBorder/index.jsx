import { View, Text, ScrollView } from "react-native";
import React from "react";
import { styles } from "./style";
import PropTypes from "prop-types";

export default function ScrollBorder({ children, horizontal }) {
  return (
    <ScrollView
      horizontal={horizontal}
      style={styles.container}
      contentContainerStyle={{
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {children}
    </ScrollView>
  );
}

ScrollBorder.propTypes = {
  horizontal: PropTypes.bool,
};

ScrollBorder.defaultProps = {
  horizontal: true,
};
