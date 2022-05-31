import { View, Text, Image } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import React from "react";
import PropTypes from "prop-types";
import { styles } from "./style";

export default function ONGData({ image, name, date }) {
  return (
    <View style={styles.containerONGData}>
      <Image source={image} style={styles.ONGPFP} />

      <View style={styles.ContainerONGDataText}>
        <Text style={styles.ONGDataName}>{name}</Text>
        <Text style={styles.ONGDataDate}>{date}</Text>
      </View>

      <Icon name="more-horizontal" size={30} style={styles.icon} />
    </View>
  );
}

ONGData.propTypes = {
  image: PropTypes.number,
  name: PropTypes.string,
  date: PropTypes.string,
};

ONGData.defaultProps = {
  image: require("../../assets/img/Avatar.png"),
};
