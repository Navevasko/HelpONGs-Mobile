import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/Feather";
import PropTypes from "prop-types";
import { styles } from "./style";

export default function TextUnderline({ text, title, onPress }) {
  return (
    <TouchableOpacity style={styles.option} onPress={onPress}>
      <View style={styles.optionStyle}>
        {title && (
          <Icon name="arrow-left" style={styles.optionArrow} size={25} />
        )}

        <Text style={styles.textOption}>{text}</Text>

        {!title && (
          <Icon name="arrow-right" style={styles.optionArrow} size={25} />
        )}
      </View>

      <View style={styles.line}></View>
    </TouchableOpacity>
  );
}

TextUnderline.propTypes = {
  text: PropTypes.string.isRequired,
  title: PropTypes.bool.isRequired,
  onPress: PropTypes.func
};
