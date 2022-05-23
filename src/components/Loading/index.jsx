import { View, Text } from "react-native";
import ModalShadow from "../ModalShadow";
import { ActivityIndicator } from "react-native";
import React from "react";
import { styles } from "./style";

export default function Loading() {
  return (
    <ModalShadow>
      <View style={styles.container}>
        <ActivityIndicator size={60} color={theme.colors.secondary} />
        <Text style={styles.text}>Carregando...</Text>
      </View>
    </ModalShadow>
  );
}
