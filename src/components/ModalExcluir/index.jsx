import { View, Text, ToastAndroid } from "react-native";
import React, { useState } from "react";
import ModalShadow from "../ModalShadow";
import CardContainer from "../CardContainer";
import BtnSubmit from "../BtnSubmit";
import { theme } from "../../global/styles/theme";
import { styles } from "./style";
import { api } from "../../../api";
import wait from "../../utils/wait";
import { useNavigation } from "@react-navigation/native";

export default function ModalExcluir({ id, type, idOng, setModal, setPage }) {
  const navigation = useNavigation();
  const [value, setValue] = useState();

  let idONG = 1;

  const handleExclude = () => {
    api
      .delete(`${type}/${idONG}/${id}`)
      .then(({ data }) => {
        console.log(data);
        ToastAndroid.show(`${type} excluido com sucesso`, ToastAndroid.SHORT);
        wait(1000).then(() => {
          setPage(0);
          setModal(false);
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <ModalShadow>
      <CardContainer>
        <Text style={styles.title}> Deseja mesmo fazer isso? </Text>
        <Text style={styles.text}>
          {" "}
          Essa ação é permanente e não pode ser desfeita{" "}
        </Text>

        <BtnSubmit
          text="Excluir"
          color={theme.colors.secondary}
          onPress={handleExclude}
        />
        <BtnSubmit
          text="Cancelar"
          color={theme.colors.input}
          onPress={() => {
            setModal(false);
          }}
        />
      </CardContainer>
    </ModalShadow>
  );
}
