import React, { useState } from "react";
import { Modal, ScrollView, ToastAndroid, View } from "react-native";
import ContainerModal from "../ContainerModal";
import PropTypes from "prop-types";
import { styles } from "./style";
import InputUnderline from "../InputUnderline";
import { theme } from "../../global/styles/theme";
import FullButton from "../FullButton";
import { dateMask, timeMask } from "../../utils/mask";

export default function ModalCargaHoraria({ data, setData, onClose }) {
  const [inicio, setInicio] = useState("");
  const [fim, setFim] = useState("");

  const parse = (horario) => {
    let [hora, minuto] = horario.split(":").map((n) => parseInt(n));
    if (!minuto) {
      minuto = 0;
    }

    return minuto + hora * 60;
  };

  const handle = (inicio, fim) => {
    return parse(fim) - parse(inicio);
  };

  return (
    <Modal transparent={true} animationType={"slide"}>
      <ContainerModal onClose={onClose} title={"Carga Horária"} publish={false}>
        <ScrollView style={styles.containerInput}>
          <InputUnderline
            placeholder="Início"
            keyboardType={"number-pad"}
            max={5}
            value={timeMask(inicio)}
            borderColor={theme.colors.primary}
            onChangeText={(text) => {
              setInicio(timeMask(text));
            }}
          />
          <InputUnderline
            placeholder="Fim"
            keyboardType={"number-pad"}
            max={5}
            value={timeMask(fim)}
            borderColor={theme.colors.primary}
            onChangeText={(text) => {
              setFim(timeMask(text));
            }}
          />
        </ScrollView>
        <FullButton
          text="Salvar"
          backColor={theme.colors.primary}
          onPress={() => {
            if (inicio > fim) {
              ToastAndroid.show(
                "Por favor, insira um horário válido",
                ToastAndroid.SHORT
              );
            } else {
              let cargaHoraria;
              let diff = handle(inicio, fim);

              let Horas = Math.floor(diff / 60);
              let Minutos = diff - Horas * 60;

              if (Horas == 0) {
                cargaHoraria = Minutos + "Minutos";
              } else {
                cargaHoraria = Horas + " Horas e " + Minutos + " Minutos";
              }

              setData(cargaHoraria);
              onClose();
            }
          }}
        />
      </ContainerModal>
    </Modal>
  );
}
