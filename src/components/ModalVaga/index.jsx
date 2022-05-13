import { View, Text, TextInput } from 'react-native'
import InputBorder from '../InputBorder';
import React, {useState} from 'react'

import { theme } from '../../global/styles/theme';
import { styles } from './style';

export default function ModalVaga() {

    const [titulo, setTitulo] = useState("")
    const [desc, setDesc] = useState("")
    const [cargaHoraria, setDate] = useState("")

  return (
    <View>
      <InputBorder text={"Titulo"} placeholder={"Titulo do evento"} />

      <InputBorder
        text={"Descrição"}
        height={200}
        placeholder={"Faça uma descrição de seu evento"}
      />

      <InputBorder
        text={"Requisitos da vaga"}
        height={200}
        placeholder={"Descreva os requisitos da vaga"}
      />

      <View style={styles.containerInfoInputs}>
        <View style={styles.inputCom}>
          <InputBorder
            text={"Inicio do horário"}
            placeholder={"00:00"}
            keyboardType={"number-pad"}
          />
        </View>
        <View style={styles.inputCom}>
          <InputBorder
            text={"Fim do horário"}
            placeholder={"00:00"}
            keyboardType={"number-pad"}
          />
        </View>
      </View>
    </View>
  );
}