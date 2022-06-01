import { View, Text } from "react-native";
import BtnSubmit from "../BtnSubmit";
import Icon from "react-native-vector-icons/Feather";
import { theme } from "../../global/styles/theme";
import { format } from "../../global/styles/format";
import React from "react";
import { styles } from "./style";
import ModalShadow from "../ModalShadow";

export default function ModalVagaInformation({
  titulo,
  desc,
  requisitos,
  cargaHoraria,
  local,
  telefone,
  celular,
  onClose,
}) {
  return (
    <ModalShadow>
      <View style={styles.container}>
        <View>
          <Icon
            name="x"
            size={35}
            style={styles.icon}
            onPress={() => {
              onClose();
            }}
          />

          <Text style={styles.title}>{titulo}</Text>
          <Text style={styles.text}>{desc}</Text>
        </View>
        <View style={[format.row, styles.textContainer]}>
          <Text style={styles.textTitle}>Requisitos:</Text>
          <Text style={styles.text}>{requisitos}</Text>
        </View>

        <View style={[format.row, styles.textContainer]}>
          <Text style={styles.textTitle}>Carga Horária:</Text>
          <Text style={styles.text}> {cargaHoraria} </Text>
        </View>
        <View style={[format.row, styles.textContainer]}>
          <Text style={styles.textTitle}>Local:</Text>
          <Text style={styles.text}>{local}</Text>
        </View>
        <View style={[format.row, styles.textContainer]}>
          <Text style={styles.textTitle}>Telefone:</Text>
          <Text style={styles.text}> {telefone}</Text>
        </View>
        <View style={[format.row, styles.textContainer, { marginBottom: 10 }]}>
          <Text style={styles.textTitle}>Celular:</Text>
          <Text style={styles.text}> {celular} </Text>
        </View>

        <BtnSubmit text="Tenho Interesse" />
      </View>
    </ModalShadow>
  );
}
