import { View, Text, Modal, ScrollView, ToastAndroid } from "react-native";
import ContainerModal from "../ContainerModal";
import React, { useState } from "react";
import PropTypes from "prop-types";
import ONGData from "../ONGData";
import { styles } from "./style";
import InputBorder from "../InputBorder";
import BtnSubmit from "../BtnSubmit";
import APICEP from "../../../api/Controllers/cepController";
import { cepMask } from "../../utils/mask";

export default function ModalEndereco({ onClose, setData }) {
  const [cep, setCEP] = useState("");
  const [estado, setEstado] = useState("");
  const [cidade, setCidade] = useState("");
  const [bairro, setBairro] = useState("");
  const [rua, setRua] = useState("");
  const [numero, setNumero] = useState("");
  const [complemento, setComplemento] = useState("");
  let enderecoArray = {}

  const onSubmit = async (enderecoArray) => {
    if (cep != "" && estado != "" && cidade != "" && bairro != "" && rua != "") {
      setData(enderecoArray)
      console.log(enderecoArray)
    }
    else {
      ToastAndroid.show("TESTE", ToastAndroid.SHORT)
    }
  };

  const handleAPICEP = async (cep) => {
    let response = await APICEP.get(cep);
    enderecoArray = {
      bairro: response.bairro,
      cep: response.cep,
      complemento: response.complemento,
      cidade: response.localidade,
      estado: response.uf,
      rua: response.logradouro,
    };
    setBairro(enderecoArray.bairro);
    setCEP(enderecoArray.cep);
    setComplemento(enderecoArray.complemento);
    setCidade(enderecoArray.cidade);
    setRua(enderecoArray.rua);
    setEstado(enderecoArray.estado);
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
            value={numero}
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
            onPress={() => {
              onSubmit(enderecoArray);
              console.log(enderecoArray)
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
