import { View } from "react-native";
import React from "react";
import { styles } from "./style";

export default function CardContainer({ children }) {
  return (
    <View style={styles.containerShadow}>
      <View style={styles.container}>{children}</View>
    </View>
  );
}
