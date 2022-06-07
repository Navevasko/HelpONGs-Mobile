import { View, Text } from "react-native";
import BtnSubmit from "../BtnSubmit";
import Icon from "react-native-vector-icons/Feather";
import { theme } from "../../global/styles/theme";
import { format } from "../../global/styles/format";
import React, { useEffect, useState } from "react";
import { styles } from "./style";
import ModalShadow from "../ModalShadow";
import { ToastAndroid } from "react-native";
import { api } from "../../../api";
import wait from "../../utils/wait";

export default function ModalVagaInformation({ idVaga, onClose, idOng }) {
  const [Data, setData] = useState();

  const handleSubmit = () => {
    api
      .post("/vacancy-controller", {
        idVagas: idVaga,
        idUsuario: 1,
      })
      .then((data) => {
        ToastAndroid.show("Candidatura feita com sucesso.", ToastAndroid.SHORT);
        wait(1000).then(() => {
          onClose();
        });
      })
      .catch((error) => {
        const errorString = JSON.stringify(error);
        if (errorString.includes("400")) {
          ToastAndroid.show(
            "Você já está cadastrado neste evento",
            ToastAndroid.SHORT
          );
          wait(1000).then(() => {
            onClose();
          });
        }
      });
  };

  useEffect(() => {
    let isMounted = true;

    api.get(`/vacancy/${idOng}/${idVaga}`).then(({ data }) => {
      setData(data.data);
    });

    return () => {
      isMounted = false;
    };
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

        <BtnSubmit text="Tenho Interesse" onPress={handleSubmit} />
      </View>
    </ModalShadow>
  );
}
