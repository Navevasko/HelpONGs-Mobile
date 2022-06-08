import { View, Text } from "react-native";
import React from "react";
import { styles } from "./style";

export default function ModalShadow({ children }) {
  return <View style={styles.shadow}>{children}</View>;
}