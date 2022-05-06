import { View, Text, Modal, ScrollView } from 'react-native'
import ContainerModal from "../ContainerModal";
import React from 'react'
import PropTypes from 'prop-types'
import ONGData from '../ONGData';
import { styles } from './style';
import InputBorder from '../InputBorder';
import BtnSubmit from '../BtnSubmit';

export default function ModalEndereco({onClose}) {
  return (
    <Modal transparent={true} animationType={"fade"}>
      <ContainerModal onClose={onClose}>
        <ONGData
          image={require("../../assets/img/ONG.png")}
          name={"Greenpeace"}
        />

        <ScrollView style={styles.containerInput}>
          <InputBorder placeholder="CEP" keyboardType={'number-pad'}/>
          <InputBorder placeholder="Estado" />
          <InputBorder placeholder="Cidade" />
          <InputBorder placeholder="Bairro" />
          <InputBorder placeholder="Rua" />
          <InputBorder placeholder="Número" keyboardType={'number-pad'} />
          <InputBorder placeholder="Complemento" />

          <BtnSubmit size={0} text={'Salvar'}/>
        </ScrollView>
      </ContainerModal>
    </Modal>
  );
}

ModalEndereco.propTypes = {
    onClose: PropTypes.func,
}