import { View, Text } from "react-native";
import React from "react";
import { styles } from "./style";

export default function CardContainer({ height, children, title }) {
  return (
    <View style={[styles.container, { height: height }]}>
      {title && <Text style={styles.title}> {title} </Text>}
      {children}
    </View>
  );
}
