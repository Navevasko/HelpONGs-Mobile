import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import { styles } from "./style";
import PropTypes from "prop-types";

export default function ContainerTitle({
  children,
  onClose,
  title,
  onPress,
  publish,
}) {
  return (
    <View style={styles.modal}>
      <View
        style={[
          styles.title,
          { justifyContent: publish ? "space-evenly" : 'center' },
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
      {children}
    </View>
  );
}

ContainerTitle.propTypes = {
  onClose: PropTypes.func,
  title: PropTypes.string,
  onPress: PropTypes.func,
  publish: PropTypes.bool,
};
