import { View, Text } from "react-native";
import React, { useState } from "react";
import { styles } from "./style";
import ONGData from "../ONGData";
import CardContainer from "../CardContainer";
import BtnSubmit from "../BtnSubmit";
import { format } from "../../global/styles/format";
import PropTypes from "prop-types";
import Icon from "react-native-vector-icons/Feather";
import { theme } from "../../global/styles/theme";
import ModalMenu from "../ModalMenu";
import ModalExcluir from "../ModalExcluir";

const Vaga = ({
  idOng,
  idVaga,
  ONGdata,
  desc,
  titulo,
  date,
  setOpenModal,
  setExcluir,
  setEditar,
  setIdVaga,
  setIdOng,
  setInfo,
}) => {
  const [menu, setMenu] = useState(false);

  return (
    <>
      {menu && (
        <ModalMenu
          setMenu={(bool) => {
            setMenu(bool);
          }}
          setExcluir={(bool) => {
            setExcluir(bool);
          }}
          setEditar={(bool) => {
            setEditar(bool);
          }}
        />
      )}

      <CardContainer>
        <ONGData
          name={ONGdata.nome}
          date={date}
          image={ONGdata.foto}
          setMenu={(bool) => {
            setMenu(bool);
          }}
        />

        <View style={styles.postData}>
          <Text style={styles.title}>{titulo}</Text>
          <Text style={styles.desc}>{desc}</Text>

          <View style={[styles.buttonContainer, format.row]}>
            <BtnSubmit
              text={"Saiba Mais"}
              onPress={() => {
                setOpenModal(true);
                setIdVaga(idVaga);
                setIdOng(idOng);
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
    </>
  );
};

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

export default React.memo(Vaga);
