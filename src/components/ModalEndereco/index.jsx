import React, { useState } from "react";
import { Modal, ScrollView, ToastAndroid } from "react-native";
import ContainerModal from "../ContainerModal";
import PropTypes from "prop-types";
import ONGData from "../ONGData";
import { styles } from "./style";
import InputBorder from "../InputBorder";
import BtnSubmit from "../BtnSubmit";
import APICEP from "../../../api/Controllers/cepController";
import { cepMask, numberMask } from "../../utils/mask";
import { Button } from "react-native-paper";

export default function ModalEndereco({ onClose, setData }) {
  const [cep, setCEP] = useState("");
  const [estado, setEstado] = useState("");
  const [cidade, setCidade] = useState("");
  const [bairro, setBairro] = useState("");
  const [rua, setRua] = useState("");
  const [numero, setNumero] = useState("");
  const [complemento, setComplemento] = useState("");

  const onSubmit = async () => {
    if (
      cep != "" &&
      estado != "" &&
      cidade != "" &&
      bairro != "" &&
      rua != ""
    ) {
      return (enderecoArray = {
        Bairro: bairro,
        Cep: cep,
        Cidade: cidade,
        Complemento: complemento,
        Estado: estado,
        Rua: rua,
        Numero: numero,
      });
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
    }
  };

  return (
    <Modal transparent={true} animationType={"fade"}>
      <ContainerModal onClose={onClose}>
        <ONGData
          image={require("../../assets/img/ONG.png")}
          name={"Greenpeace"}
        />

        <ScrollView style={styles.containerInput}>
          <InputBorder
            placeholder="CEP"
            keyboardType={"number-pad"}
            value={cepMask(cep)}
            onChangeText={(text) => {
              setCEP(text);
            }}
            onChange={(text) => {
              handleAPICEP(cep);
            }}
            max={9}
          />
          <InputBorder
            placeholder="Estado"
            onChangeText={(text) => {
              setEstado(text);
            }}
            value={estado}
          />
          <InputBorder
            placeholder="Cidade"
            onChangeText={(text) => {
              setCidade(text);
            }}
            value={cidade}
          />
          <InputBorder
            placeholder="Bairro"
            onChangeText={(text) => {
              setBairro(text);
            }}
            value={bairro}
          />
          <InputBorder
            placeholder="Rua"
            onChangeText={(text) => {
              setRua(text);
            }}
            value={rua}
          />
          <InputBorder
            placeholder="Número"
            keyboardType={"number-pad"}
            onChangeText={(text) => {
              setNumero(text);
            }}
            value={numberMask(numero)}
          />
          <InputBorder
            placeholder="Complemento"
            onChangeText={(text) => {
              setComplemento(text);
            }}
            value={complemento}
          />

          <BtnSubmit
            size={0}
            text={"Salvar"}
            onPress={async () => {
              const enderecoArray = await onSubmit();
              if(enderecoArray){
                setData(enderecoArray)
                onClose()
              }
            }}
          />
        </ScrollView>
      </ContainerModal>
    </Modal>
  );
}

ModalEndereco.propTypes = {
  onClose: PropTypes.func,
  setData: PropTypes.func,
};
