import { View, Text, Image } from "react-native";
import React from "react";
import { styles } from "./style";
import { theme } from "../../global/styles/theme";
import Icon from "react-native-vector-icons/Feather";
import CardContainer from "../CardContainer";
import ONGData from "../ONGData";
import Options from "../Options";
import FileContainer from "../FileContainer";
import PropTypes from "prop-types";

export default function Post({
  fileArray,
  desc,
  ONGdata,
  date,
  likes,
  comments,
}) {
  return (
    <CardContainer>
      <ONGData name={ONGdata.nome} date={date} image={ONGdata.foto} />

      <View style={styles.postData}>
        <Text style={styles.desc}>{desc}</Text>

        <FileContainer fileArray={fileArray} />

        <Options likes="14K" comments="10K" />
      </View>
    </CardContainer>
  );
}

Post.propTypes = {
  fileArray: PropTypes.array,
  desc: PropTypes.string,
  ONGdata: PropTypes.shape({
    nome: PropTypes.string,
    foto: PropTypes.string,
    banner: PropTypes.string,
    tbl_login: PropTypes.shape({
      idLogin: PropTypes.number,
      email: PropTypes.string,
      senha: PropTypes.string,
      accountStatus: PropTypes.bool,
    }),
  }),
};
