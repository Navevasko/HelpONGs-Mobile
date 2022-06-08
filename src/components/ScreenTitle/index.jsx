import { View, Text } from "react-native";
import React from "react";
import { styles } from "./style";
import PropTypes from "prop-types";
import Icon from "react-native-vector-icons/Feather";

export default function ScreenTitle({ onClose, title, onPress, publish }) {
  return (
    <View
      style={[
        styles.title,
        { justifyContent: publish ? "space-evenly" : "center" },
      ]}
    >
      <Icon
        name="arrow-left"
        size={35}
        style={{ height: 35, marginStart: publish ? 0 : -40 }}
        onPress={onClose}
      />

      <Text style={[styles.titleText, { marginStart: publish ? 0 : 40 }]}>
        {title}
      </Text>

      {publish && (
        <TouchableOpacity style={styles.publish} onPress={onPress}>
          <Text style={styles.publishText}>Publicar</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

ScreenTitle.propTypes = {
  onClose: PropTypes.func,
  title: PropTypes.string,
  onPress: PropTypes.func,
  publish: PropTypes.bool,
};