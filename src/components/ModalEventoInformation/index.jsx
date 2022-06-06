import { View, Text, ToastAndroid } from "react-native";
import BtnSubmit from "../BtnSubmit";
import Icon from "react-native-vector-icons/Feather";
import { theme } from "../../global/styles/theme";
import { format } from "../../global/styles/format";
import React, { useEffect, useState } from "react";
import { styles } from "./style";
import ModalShadow from "../ModalShadow";
import { api } from "../../../api";

export default function ModalEventoInformation({ idEvento, onClose, idOng }) {
  const [Data, setData] = useState();
  const [Endereco, setEndereco] = useState();
  const [Candidatos, setCandidatos] = useState(false);

  const wait = (timeout) => {
    return new Promise((resolve) => setTimeout(resolve, timeout));
  };

  const handleSubmit = () => {
    api
      .post("/event-controller", {
        idEvento: idEvento,
        idUsuario: 1,
      })
      .then((data) => {
        ToastAndroid.show("Candidatura feita com sucesso.", ToastAndroid.SHORT);
        wait(1000).then(() => {
          onClose();
        });
      });
  };

  useEffect(() => {
    api.get(`/event/${idOng}/${idEvento}`).then(({ data }) => {
      setData(data.data);
      setEndereco(data.data.tbl_endereco);
      setCandidatos(data.data.candidatos);
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

        {Endereco && (
          <>
            <View style={[format.row, styles.textContainer]}>
              <Text style={styles.textTitle}>CEP:</Text>
              <Text style={styles.text}> {" " + Endereco.cep}</Text>
            </View>

            <View style={[format.row, styles.textContainer]}>
              <Text style={styles.textTitle}>Estado:</Text>
              <Text style={styles.text}>{" " + Endereco.tbl_estado.nome}</Text>
            </View>
            <View style={[format.row, styles.textContainer]}>
              <Text style={styles.textTitle}>Cidade:</Text>
              <Text style={styles.text}>{" " + Endereco.municipio}</Text>
            </View>
            <View style={[format.row, styles.textContainer]}>
              <Text style={styles.textTitle}>Bairro:</Text>
              <Text style={styles.text}>{" " + Endereco.bairro}</Text>
            </View>
            <View
              style={[format.row, styles.textContainer, { marginBottom: 10 }]}
            >
              <Text style={styles.textTitle}>Rua:</Text>
              <Text style={styles.text}> {" " + Endereco.rua} </Text>
            </View>

            <View
              style={[format.row, styles.textContainer, { marginBottom: 10 }]}
            >
              <Text style={styles.textTitle}>Numero:</Text>
              <Text style={styles.text}> {" " + Endereco.rua} </Text>
            </View>

            {Endereco.complemento && (
              <View
                style={[format.row, styles.textContainer, { marginBottom: 10 }]}
              >
                <Text style={styles.textTitle}>Complemento:</Text>
                <Text style={styles.text}> {" " + Endereco.complemento} </Text>
              </View>
            )}
          </>
        )}

        {Candidatos && (
          <BtnSubmit text="Candidatar-se" onPress={handleSubmit} />
        )}
      </View>
    </ModalShadow>
  );
}
