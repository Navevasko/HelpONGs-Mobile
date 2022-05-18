import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { theme } from "../../global/styles/theme";
import { styles } from "./style";
import PropTypes from "prop-types";
import Icon from "react-native-vector-icons/Feather";

export default function BtnSubmit({
  onPress,
  text,
  color,
  icon,
  width,
  height,
}) {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        {
          backgroundColor: color,
          width: width,
          height: height,
          justifyContent: icon === null ? "flex-start" : "center",
          paddingStart: icon === null ? 30 : 0,
        },
      ]}
      onPress={onPress}
    >
      {icon && <Icon name={icon} size={45} style={{ marginEnd: 30 }} />}

      <Text style={[styles.buttonText, { fontSize: height >= 45 ? 25 : 16 }]}>
        {" "}
        {text}{" "}
      </Text>
    </TouchableOpacity>
  );
}

BtnSubmit.propTypes = {
  onPress: PropTypes.func,
  text: PropTypes.string,
  color: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  icon: PropTypes.string,
};

BtnSubmit.defaultProps = {
  color: theme.colors.primary,
  width: "90%",
  height: 45,
};
