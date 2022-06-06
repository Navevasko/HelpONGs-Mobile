import { View, Text, Image } from "react-native";
import React, { useState } from "react";
import { styles } from "./style";
import Icon from "react-native-vector-icons/Feather";
import { format } from "../../global/styles/format";
import { api } from "../../../api";

export default function Comment({ comentario, nome, date, idComentario }) {
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    api
      .post("comment/like", {
        idComentario: 1,
        idUsuario: 1,
      })
      .then(({ data }) => {
        console.log(data);
        setLiked(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <View style={styles.container} key={Math.random()}>
      <Image
        source={require("../../assets/img/Avatar.png")}
        style={styles.image}
      />

      <View>
        <View style={styles.textContainer}>
          <Text style={styles.name}>{nome}</Text>

          <Text style={styles.text}>{comentario}</Text>
        </View>
        <View
          style={[
            format.row,
            {
              paddingStart: 10,
              marginTop: 5,
            },
          ]}
        >
          <Text style={styles.time}> 1h </Text>
          <View style={[format.row, styles.likeContainer]}>
            {liked === false && (
              <Icon name="thumbs-up" size={20} onPress={handleLike} />
            )}
            {liked === true && (
              <Image source={require("../../assets/img/likeFill.png")} />
            )}
            <Text style={styles.like}> 28.5K Curtiram </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
