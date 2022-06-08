import { View, Text, Image, TouchableHighlight } from "react-native";
import React from "react";
import { format } from "../../global/styles/format";
import { theme } from "../../global/styles/theme";
import { styles } from "./style";
import Icon from "react-native-vector-icons/Feather";
import PropTypes from "prop-types";

export default function CreatePost({ image, setOpenModal }) {
  return (
    <View style={[format.row, styles.container]}>
      <Image source={image} style={styles.image} />

      <Text style={styles.text}>No que está pensando?</Text>

      <TouchableHighlight
        style={styles.createButton}
        onPress={() => {
          setOpenModal(true);
        }}
      >
        <Icon name="plus" size={20} />
      </TouchableHighlight>
    </View>
  );
}

CreatePost.propTypes = {
  image: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  setOpenModal: PropTypes.func,
};

CreatePost.defaultProps = {
  image: require("../../assets/img/Avatar.png"),
};
