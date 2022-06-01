import { View, Text } from "react-native";
import React from "react";
import { styles } from "./style";
import Icon from "react-native-vector-icons/Feather";
import PropTypes from "prop-types";
import { format } from "../../global/styles/format";

export default function Options({
  likes,
  pressLike,
  comments,
  pressComment,
  share,
}) {
  return (
    <View style={format.row}>
      <View style={[styles.optionsContainer, format.row]}>
        <Icon name="thumbs-up" size={20} style={styles.icon} />
        <Text style={styles.optionsText}> {likes} </Text>
      </View>
      <View style={styles.optionsContainer}>
        <Icon name="message-square" size={20} style={styles.icon} />
        <Text style={styles.optionsText}> {comments} </Text>
      </View>
      <View style={styles.optionsContainer}>
        <Icon name="share-2" size={20} style={styles.icon} />
      </View>
    </View>
  );
}

Options.propTypes = {
  likes: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  pressLike: PropTypes.func,
  comments: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  pressComment: PropTypes.func,
  share: PropTypes.func,
};
