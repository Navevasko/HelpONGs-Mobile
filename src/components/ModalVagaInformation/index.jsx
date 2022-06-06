import { View, Text } from "react-native";
import BtnSubmit from "../BtnSubmit";
import Icon from "react-native-vector-icons/Feather";
import { theme } from "../../global/styles/theme";
import { format } from "../../global/styles/format";
import React, { useEffect, useState } from "react";
import { styles } from "./style";
import ModalShadow from "../ModalShadow";
import { api } from "../../../api";

export default function ModalVagaInformation({ idVaga, onClose, idOng }) {
  const [Data, setData] = useState();

  useEffect(() => {
    api.get(`/vacancy/${idOng}/${idVaga}`).then(({ data }) => {
      setData(data.data);
    });
  }, []);

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

          {Data && (
            <>
              <Text style={styles.title}>{Data.titulo}</Text>
              <Text style={styles.text}>{Data.descricao}</Text>
            </>
          )}
        </View>

        {Data && (
          <>
            <View style={[format.row, styles.textContainer]}>
              <Text style={styles.textTitle}>Requisitos:</Text>
              <Text style={styles.text}> {" " + Data.requisitos}</Text>
            </View>

            <View style={[format.row, styles.textContainer]}>
              <Text style={styles.textTitle}>Carga Horária:</Text>
              <Text style={styles.text}> {" " + Data.cargaHoraria} </Text>
            </View>
            <View style={[format.row, styles.textContainer]}>
              <Text style={styles.textTitle}>Local:</Text>
              <Text style={styles.text}>{" " + Data.titulo}</Text>
            </View>
            <View style={[format.row, styles.textContainer]}>
              <Text style={styles.textTitle}>Telefone:</Text>
              <Text style={styles.text}>{" " + Data.tbl_contato.telefone}</Text>
            </View>
            <View
              style={[format.row, styles.textContainer, { marginBottom: 10 }]}
            >
              <Text style={styles.textTitle}>Celular:</Text>
              <Text style={styles.text}> {" " + Data.tbl_contato.numero} </Text>
            </View>
          </>
        )}

        <BtnSubmit text="Tenho Interesse" />
      </View>
    </ModalShadow>
  );
}
