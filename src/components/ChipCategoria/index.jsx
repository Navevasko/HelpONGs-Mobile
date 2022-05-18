import { View, Text } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import React from "react";
import { styles } from "./style";

export default function ChipCategoria({ text }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
      <Icon name="x-circle" size={30} />
    </View>
  );
}
