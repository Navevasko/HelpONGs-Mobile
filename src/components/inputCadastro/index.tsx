import { View, Text, TextInput } from "react-native";
import { styles } from "./style";
import { theme } from "../../global/styles/theme";
// import {Icon} from "react-native-vector-icons/MaterialIcons";
import React from "react";

type inputProps = {
  placeholder: string;
  iconName: string;
  fontSize?: number;
  color: string;
};

export default function SignUpInput(props: inputProps) {
  return (
    <View style={styles.container}>
      <View style={styles.containerIcon}>
        {/* <Icon
          name={props.iconName}
          style={[styles.icon, { fontSize: props.fontSize, color: props.color }]}
        />  */}
      </View>
      <TextInput style={styles.input} placeholder={props.placeholder} />
    </View>
  );
}