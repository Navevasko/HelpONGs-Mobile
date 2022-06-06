import { View, Text, Image } from "react-native";
import React from "react";
import { styles } from "./style";
import PropTypes from "prop-types";

export default function EventoPreview({ title, imagem, ONGProfilePic }) {
  return (
    <View style={styles.eventoPreview}>
      <Image
        source={{ uri: ONGProfilePic }}
        style={styles.eventoPreviewProfilePicture}
      />
      <Image source={{ uri: imagem }} style={styles.eventoPreviewImage} />
      <Text style={styles.eventoPreviewText}> {title} </Text>
    </View>
  );
}

EventoPreview.propTypes = {
  title: PropTypes.string,
  imagem: PropTypes.number,
  ONGProfilePic: PropTypes.number,
};
