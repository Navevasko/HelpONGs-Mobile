import { TouchableOpacity, Text, ToastAndroid } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import React from "react";
import { styles } from "./style";
import PropTypes from "prop-types";
import { theme } from "../../global/styles/theme";

export default function FullButton({
  icon,
  text,
  backColor,
  onPress,
  disabled,
  toast,
  children,
}) {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: backColor }]}
      onPress={() => {
        if (disabled) {
          ToastAndroid.show(toast, ToastAndroid.SHORT);
        } else {
          onPress();
        }
      }}
    >
      {icon && <Icon name={icon} size={45} style={styles.icon} />}
      <Text style={[styles.text, { marginStart: icon ? 10 : 0 }]}>{text}</Text>
      {children}
    </TouchableOpacity>
  );
}

FullButton.propTypes = {
  icon: PropTypes.string,
  text: PropTypes.string,
  toast: PropTypes.string,
  backColor: PropTypes.string,
  onPress: PropTypes.func,
  disabled: PropTypes.bool,
};

FullButton.defaultProps = {
  backColor: theme.colors.grey,
};
