import { View, Text } from "react-native";
import React, { useState, useEffect } from "react";
import { api } from "../../../api";
import { styles } from "./style";
import Icon from "react-native-vector-icons/Feather";
import PropTypes from "prop-types";
import { format } from "../../global/styles/format";

export default function Options({
  idPost,
  likes,
  pressLike,
  comments,
  pressComment,
  share,
}) {
  const [Like, setLike] = useState();
  const [Comment, setComment] = useState();

  // useEffect(() => {
  //   api.get(`/post/like/${idPost}`).then(({ data }) => {
  //     setLike(data.data.likeCount);
  //   });
  //   api.get(`/comment/ong/${idPost}`).then(({ data }) => {
  //     setComment(data.data.tbl_comentario.length);
  //   });
  // }, [1]);

  return (
    <View style={format.row}>
      <View style={[styles.optionsContainer, format.row]}>
        <Icon name="thumbs-up" size={20} style={styles.icon} />
        <Text style={styles.optionsText}> {Like} </Text>
      </View>
      <View style={styles.optionsContainer}>
        <Icon name="message-square" size={20} style={styles.icon} />
        <Text style={styles.optionsText}> {Comment} </Text>
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
