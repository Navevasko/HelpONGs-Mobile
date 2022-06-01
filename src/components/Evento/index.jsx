import { View, Text } from "react-native";
import React, { useState } from "react";
import { styles } from "./style";
import ONGData from "../ONGData";
import BtnSubmit from "../BtnSubmit";
import FileContainer from "../FileContainer";
import CardContainer from "../CardContainer";
import { format } from "../../global/styles/format";
import PropTypes from "prop-types";

export default function Evento({ fileArray, titulo, desc, ONGdata, date }) {
  return (
    <CardContainer>
      <ONGData name={ONGdata.nome} date={date} image={ONGdata.foto} />

      <View style={styles.postData}>
        <Text style={styles.title}>{titulo}</Text>
        <Text style={styles.desc}>{desc}</Text>

        <FileContainer fileArray={fileArray} />

        <View style={[styles.buttonContainer, format.row]}>
          <BtnSubmit
            text={"Candidatar-se"}
            width="49%"
            height={35}
            fontSize={14}
          />

          <BtnSubmit
            text={"Saiba Mais"}
            width="49%"
            height={35}
            fontSize={14}
            onPress={() => {
              // console.log(fileArray);
            }}
          />
        </View>
      </View>
    </CardContainer>
  );
}

Evento.propTypes = {
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
