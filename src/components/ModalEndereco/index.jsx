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

export default function ModalEndereco({ onClose, setData, endereco }) {
  const [cep, setCEP] = useState(endereco.cep);
  const [estado, setEstado] = useState(endereco.uf);
  const [cidade, setCidade] = useState(endereco.municipio);
  const [bairro, setBairro] = useState(endereco.bairro);
  const [rua, setRua] = useState(endereco.rua);
  const [numero, setNumero] = useState(endereco.numero);
  const [complemento, setComplemento] = useState(endereco.complemento);

  const onSubmit = () => {
    if (
      cep != "" &&
      estado != "" &&
      cidade != "" &&
      bairro != "" &&
      rua != ""
    ) {
      return {
        bairro: bairro,
        cep: cep,
        municipio: cidade,
        complemento: complemento,
        uf: estado,
        rua: rua,
        numero: numero,
      };
    } else {
      ToastAndroid.show("Preencha todos os dados", ToastAndroid.SHORT);
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
  endereco: PropTypes.object,
};
