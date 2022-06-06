import { View, Text } from "react-native";
import React from "react";
import ModalShadow from "../ModalShadow";
import CardContainer from "../CardContainer";
import BtnSubmit from "../BtnSubmit";
import { theme } from "../../global/styles/theme";
import { styles } from "./style";

export default function ModalExcluir({ id, setModal }) {
  return (
    <ModalShadow>
      <CardContainer>
        <Text style={styles.title}> Deseja mesmo fazer isso? </Text>
        <Text style={styles.text}>
          {" "}
          Essa ação é permanente e não pode ser desfeita{" "}
        </Text>

        <BtnSubmit text="Excluir" color={theme.colors.secondary} />
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
