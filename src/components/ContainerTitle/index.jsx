import React from "react";
import { View } from "react-native";
import { styles } from "./style";
import PropTypes from "prop-types";
import ScreenTitle from "../ScreenTitle";

export default function ContainerModal({ children, onClose, onPress, publish }) {
  return (
    <View style={styles.modal}>
      <ScreenTitle onClose={onClose} onPress={onPress} publish={publish}/>
      {children}
    </View>
  );
}

ContainerModal.propTypes = {
  onClose: PropTypes.func,
  title: PropTypes.string,
  onPress: PropTypes.func,
  publish: PropTypes.bool,
};
