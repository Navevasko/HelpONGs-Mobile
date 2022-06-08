import { View, Text, ScrollView } from "react-native";
import React from "react";
import { styles } from "./style";
import PropTypes from "prop-types";

export default function ScrollBorder({display, children, horizontal }) {
  return (
    <ScrollView
      horizontal={horizontal}
      style={[styles.container, { display:display }]}
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
  display: PropTypes.string
};

ScrollBorder.defaultProps = {
  horizontal: true,
};