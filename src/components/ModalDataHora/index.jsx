import React, { useState } from "react";
import { Modal, ScrollView, View } from "react-native";
import ContainerModal from "../ContainerModal";
import PropTypes from "prop-types";
import { styles } from "./style";
import InputUnderline from "../InputUnderline";
import { theme } from "../../global/styles/theme";
import FullButton from "../FullButton";
import { dateMask, timeMask } from "../../utils/mask";

export default function ModalDataHora({ onClose, setData }) {

    const [date, setDate] = useState("")
    const [time, setTime] = useState("");

  return (
    <Modal transparent={true} animationType={"slide"}>
      <ContainerModal onClose={onClose} title={"Data e Hora"} publish={false}>
        <ScrollView style={styles.containerInput}>
          <InputUnderline
            placeholder="Data"
            keyboardType={"number-pad"}
            max={10}
            value={dateMask(date)}
            borderColor={theme.colors.primary}
            onChangeText={(text) => {
              setDate(text);
            }}
          />
          <InputUnderline
            placeholder="Hora"
            keyboardType={"number-pad"}
            max={5}
            value={timeMask(time)}
            borderColor={theme.colors.primary}
            onChangeText={(text) => {
              setTime(text);
            }}
          />
        </ScrollView>
        <FullButton
          text="Salvar"
          backColor={theme.colors.primary}
          onPress={() => {
              const dataHoraArray = {
                  data: date,
                  horario: time
              }
              setData(dataHoraArray)
              onClose()
          }}
        />
      </ContainerModal>
    </Modal>
  );
}
