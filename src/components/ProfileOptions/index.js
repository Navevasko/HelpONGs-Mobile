import { View, Text } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/Feather";
import { styles } from "./style";
import PropTypes from "prop-types";


export default function ProfileOptions({iconName, fontSize, color, text}) {
  return (
    <View style={styles.containerOpcoes}>
      <Icon
        name={iconName}
        style={[styles.icon, { fontSize: fontSize, color: color }]}
      />
      <Text style={styles.txt}>{text}</Text>
    </View>
  );
}

ProfileOptions.propTypes = {
    iconName: PropTypes.string,
    fontSize: PropTypes.number,
    color: PropTypes.string,
    text: PropTypes.string,
    styles: PropTypes.string
}