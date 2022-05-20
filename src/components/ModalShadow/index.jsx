import { Modal, View } from "react-native";
import React from "react";
import { styles } from "./style";
import PropTypes from "prop-types";
import { ScrollView } from "react-native-gesture-handler";

export default function ModalShadow({ children, onClose }) {
  return <View style={styles.shadow}>{children}</View>;
}

ModalShadow.propTypes = {
  children: PropTypes.element,
  onPress: PropTypes.func,
};
