import { View, Text, ToastAndroid } from "react-native";
import React, { useState } from "react";
import { styles } from "./style";
import ONGData from "../ONGData";
import BtnSubmit from "../BtnSubmit";
import FileContainer from "../FileContainer";
import CardContainer from "../CardContainer";
import { format } from "../../global/styles/format";
import PropTypes from "prop-types";
import { api } from "../../../api";
import ModalMenu from "../ModalMenu";

const Evento = ({
  idEvento,
  fileArray,
  titulo,
  idOng,
  desc,
  ONGdata,
  date,
  setEditar,
  setExcluir,
  setInfo,
  setType,
  candidatos,
  setOpenModal,
  setIdOng,
  setIdEvento,
}) => {
  const [menu, setMenu] = useState(false);

  const handleSubmit = () => {
    api
      .post("/event-controller", {
        idEvento: idEvento,
        idUsuario: 2,
      })
      .then((data) => {
        ToastAndroid.show("Candidatura feita com sucesso.", ToastAndroid.SHORT);
      })
      .catch((error) => {
        const errorString = JSON.stringify(error);
        if (errorString.includes("400")) {
          ToastAndroid.show(
            "Você já está cadastrado neste evento",
            ToastAndroid.SHORT
          );
        }
      });
  };

  if (menu) {
    setType("event");
    setIdEvento(idEvento);
    setIdOng(idOng);
  }

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

          {fileArray && <FileContainer fileArray={fileArray} />}

          <View style={[styles.buttonContainer, format.row]}>
            {candidatos && (
              <BtnSubmit
                text={"Candidatar-se"}
                width="47%"
                height={40}
                fontSize={17}
                onPress={handleSubmit}
              />
            )}

            <BtnSubmit
              text={"Saiba Mais"}
              width={candidatos ? "47%" : "100%"}
              height={40}
              fontSize={17}
              onPress={() => {
                setOpenModal(true);
                setIdEvento(idEvento);
                setIdOng(idOng);
              }}
            />
          </View>
        </View>
      </CardContainer>
    </>
  );
};

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

export default React.memo(Evento);
