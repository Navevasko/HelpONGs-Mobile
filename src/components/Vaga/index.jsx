import { View, Text } from "react-native";
import React from "react";
import { styles } from "./style";
import ONGData from "../ONGData";
import CardContainer from "../CardContainer";
import BtnSubmit from "../BtnSubmit";
import { format } from "../../global/styles/format";
import PropTypes from "prop-types";

export default function Vaga({ ONGdata, desc, titulo, date, setOpenModal }) {
  return (
    <CardContainer>
      <ONGData name={ONGdata.nome} date={date} image={ONGdata.foto} />

      <View style={styles.postData}>
        <Text style={styles.title}>{titulo}</Text>
        <Text style={styles.desc}>{desc}</Text>

        <View style={[styles.buttonContainer, format.row]}>
          <BtnSubmit
            text={"Saiba Mais"}
            onPress={() => {
              setOpenModal(true);
            }}
            width="49%"
            height={35}
            fontSize={14}
          />

          <BtnSubmit
            text={"Tenho Interesse"}
            width="49%"
            height={35}
            fontSize={14}
          />
        </View>
      </View>
    </CardContainer>
  );
}

Vaga.propTypes = {
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
