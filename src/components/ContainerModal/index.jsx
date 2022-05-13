import React from "react";
import { View } from "react-native";
import ModalShadow from "../ModalShadow";
import Icon from "react-native-vector-icons/Feather";

import { styles } from "./style";

export default function ContainerModal({ children, onClose }) {
  return (
    <ModalShadow>
      <View style={styles.modal}>
        <Icon
          name="arrow-left-circle"
          size={40}
          style={styles.close}
          onPress={onClose}
        />
        {children}
      </View>
    </ModalShadow>
  );
}
