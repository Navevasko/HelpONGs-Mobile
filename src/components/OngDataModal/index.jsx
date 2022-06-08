import { View, Text, Image } from "react-native";
import React from "react";
import { styles } from "./style";
import PropTypes from "prop-types";

export default function ONGDataModal({ image, name }) {
  return (
    <View style={styles.ONGInformation}>
      <Image source={{uri: image}} style={styles.imageONG} />
      <Text style={styles.textONG}> {name} </Text>
    </View>
  );
}
