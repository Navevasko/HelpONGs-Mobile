import { TouchableOpacity, Text } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import React from "react";
import { styles } from "./style";
import PropTypes from 'prop-types'
import { theme } from "../../global/styles/theme";

export default function FullButton({ icon, text, backColor, onPress }) {
  return (
    <TouchableOpacity style={[styles.button, {backgroundColor: backColor}]} onPress={onPress}>
      {icon && <Icon name={icon} size={45} style={styles.icon} />}
      <Text
        style={[
          styles.text,
          {marginStart: icon ? 10 : 0}
        ]}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
}

FullButton.propTypes = {
  icon: PropTypes.string,
  text: PropTypes.string.isRequired,
  backColor: PropTypes.string,
  onPress: PropTypes.func,
};

FullButton.defaultProps = {
    backColor: theme.colors.grey
}