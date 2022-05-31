import { View, Text, Image, TouchableHighlight } from "react-native";
import React from "react";
import { format } from "../../global/styles/format";
import { theme } from "../../global/styles/theme";
import { styles } from "./style";
import Icon from "react-native-vector-icons/Feather";

export default function CreatePost() {
  return (
    <View style={[format.row, styles.container]}>
      <Image
        source={require("../../assets/img/ONG.png")}
        style={styles.image}
      />

      <Text style={styles.text}>No que está pensando?</Text>

      <TouchableHighlight
        style={{
          width: 30,
          height: 30,
          borderRadius: 20,
          alignItems: "center",
          justifyContent: "center",
          marginStart: 20,
          backgroundColor: theme.colors.primary,
        }}
      >
        <Icon name="plus" size={20} />
      </TouchableHighlight>
    </View>
  );
}
