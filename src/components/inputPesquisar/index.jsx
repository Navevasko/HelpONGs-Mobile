import { TextInput, View } from "react-native";
import React from "react";
import { styles } from "./style";
import Icon from "react-native-vector-icons/Feather";

export default function InputPesquisar() {
  return (
    <View style={styles.container}>
      <Icon name="search" size={20} />
      <TextInput
        style={styles.input}
        maxLength={100}
        placeholder={"Pesquise por uma ONG"}

      />
    </View>
  );
}
