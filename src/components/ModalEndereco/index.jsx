import React, { useState } from "react";
import { Modal, ScrollView, ToastAndroid, View } from "react-native";
import ContainerModal from "../ContainerModal";
import PropTypes from "prop-types";
import { styles } from "./style";
import APICEP from "../../../api/Controllers/cepController";
import { cepMask, numberMask } from "../../utils/mask";
import InputUnderline from "../InputUnderline";
import { theme } from "../../global/styles/theme";
import FullButton from "../FullButton";

export default function ModalEndereco({ onClose, setData }) {
  const [cep, setCEP] = useState("");
  const [estado, setEstado] = useState("");
  const [cidade, setCidade] = useState("");
  const [bairro, setBairro] = useState("");
  const [rua, setRua] = useState("");
  const [numero, setNumero] = useState("");
  const [complemento, setComplemento] = useState("");

  const onSubmit = () => {
    if (
      cep != "" &&
      estado != "" &&
      cidade != "" &&
      bairro != "" &&
      rua != ""
    ) {
      return {
        Bairro: bairro,
        Cep: cep,
        Cidade: cidade,
        Complemento: complemento,
        Estado: estado,
        Rua: rua,
        Numero: numero,
      };
    } else {
      ToastAndroid.show("TESTE", ToastAndroid.SHORT);
      return;
    }
  };

  const handleAPICEP = async (cep) => {
    if (cep != "") {
      let response = await APICEP.get(cep);

      setBairro(response.bairro);
      setCEP(response.cep);
      setComplemento(response.complemento);
      setCidade(response.localidade);
      setRua(response.logradouro);
      setEstado(response.uf);

      console.log(response);
    }
  };

  return (
    <Modal transparent={true} animationType={"slide"}>
      <ContainerModal onClose={onClose} title={"Endereço"} publish={false}>
        <ScrollView style={styles.containerInput}>
          <InputUnderline
            placeholder="CEP"
            keyboardType={"number-pad"}
            value={cepMask(cep)}
            onChangeText={(text) => {
              setCEP(text);
            }}
            onEndEditing={() => {
              handleAPICEP(cep);
            }}
            max={9}
            borderColor={theme.colors.primary}
          />

          <View
            style={{
              marginTop: 30,
              minHeight: 450,
              justifyContent: "space-evenly",
            }}
          >
            <InputUnderline
              placeholder="Estado"
              keyboardType={"number-pad"}
              value={estado}
              onChangeText={(text) => {
                setEstado(text);
              }}
              max={2}
              borderColor={theme.colors.primary}
            />
            <InputUnderline
              placeholder="Cidade"
              keyboardType={"number-pad"}
              value={cidade}
              onChangeText={(text) => {
                setCidade(text);
              }}
              borderColor={theme.colors.primary}
            />
            <InputUnderline
              placeholder="Bairro"
              value={bairro}
              onChangeText={(text) => {
                setBairro(text);
              }}
              borderColor={theme.colors.primary}
            />
            <InputUnderline
              placeholder="Rua"
              value={rua}
              onChangeText={(text) => {
                setRua(text);
              }}
              borderColor={theme.colors.primary}
            />

            <InputUnderline
              placeholder="Número"
              value={numberMask(numero)}
              keyboardType={"number-pad"}
              onChangeText={(text) => {
                setNumero(text);
              }}
              borderColor={theme.colors.primary}
            />

            <InputUnderline
              placeholder="Complemento"
              value={complemento}
              onChangeText={(text) => {
                setComplemento(text);
              }}
              borderColor={theme.colors.primary}
            />
          </View>
        </ScrollView>
        <FullButton
          text="Salvar"
          backColor={theme.colors.primary}
          onPress={() => {
            const enderecoArray = onSubmit();
            if (enderecoArray) {
              setData(enderecoArray);
              onClose();
            }
          }}
        />
      </ContainerModal>
    </Modal>
  );
}

ModalEndereco.propTypes = {
  onClose: PropTypes.func,
  setData: PropTypes.func,
};
