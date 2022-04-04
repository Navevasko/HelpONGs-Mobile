import { View, Text, TextInput } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import { styles } from "./style";
import { theme } from "../../global/styles/theme";
import React from "react";

type inputProps = {
  placeholder: string;
  iconName: string;
  size?: number;
  color: string;
};

export default function InputUnderline(props: inputProps) {
  return (
    <View style={styles.container}>
      <View style={styles.containerIcon}>
        <Icon
          name={props.iconName}
          size={props.size}
          style={[styles.icon, { color: props.color }]}
        />
      </View>
      <TextInput style={styles.input} placeholder={props.placeholder} />
    </View>
  );
}
