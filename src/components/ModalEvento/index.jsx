import { View, Text , TextInput} from 'react-native'
import { RadioButton } from 'react-native-paper';
import InputBorder from '../InputBorder';
import BtnSubmit  from '../BtnSubmit';
import React, { useState } from 'react'
import { dateMask, timeMask } from '../../utils/mask';
import { styles } from './style'
import { theme } from '../../global/styles/theme';
import ModalEndereco from '../ModalEndereco';

export default function ModalEvento() {

    const [date, setDate] = useState("")
    const [time, setTime] = useState("");
    const [candidato, setCandidato] = useState("")
    
    const [modal, setModal] = useState(false)

  return (
    <View>
      <InputBorder
        onChangeText={(item) => {
          setDesc(item);
        }}
        placeholder={"Titulo do evento"}
      />

      <InputBorder
        onChangeText={(item) => {
          setDesc(item);
        }}
        height={200}
        placeholder={"Faça uma descrição de seu evento"}
      />

      <View style={styles.containerInfoInputs}>
        <View style={styles.inputCom}>
          <Text> Data do evento </Text>
          <TextInput
            style={styles.input}
            maxLength={5}
            keyboardType={"number-pad"}
            value={dateMask(date)}
            onChangeText={(text) => {
              setDate(text);
            }}
            placeholder={"00/00"}
          />
        </View>
        <View style={styles.inputCom}>
          <Text> Horário do evento </Text>
          <TextInput
            style={styles.input}
            maxLength={5}
            keyboardType={"number-pad"}
            value={timeMask(time)}
            onChangeText={(text) => {
              setTime(text);
            }}
            placeholder={"00:00"}
          />
        </View>
        <View style={styles.inputCom}>
          <Text> Terá candidatos? </Text>
          <RadioButton.Group
            value={candidato}
            onValueChange={(value) => {
              setCandidato(value);
            }}
          >
            <View style={styles.ContainerCheckBox}>
              <View style={styles.checkBox}>
                <RadioButton
                  color={theme.colors.primary}
                  value="true"
                  uncheckedColor={theme.colors.primaryLight}
                />
                <Text>Sim</Text>
              </View>
              <View style={styles.checkBox}>
                <RadioButton
                  color={theme.colors.primary}
                  value="false"
                  uncheckedColor={theme.colors.primaryLight}
                />
                <Text>Não</Text>
              </View>
            </View>
          </RadioButton.Group>
        </View>

        <BtnSubmit
          text="Adicionar endereço"
          color={theme.colors.grey}
          size={2}
          onPress={() => {
            setModal(true);
          }}
        />
      </View>

      {modal && <ModalEndereco onClose={() => {setModal(false)}}/>}

      <BtnSubmit text={"teste"} color={theme.colors.grey} size={0} />
    </View>
  );
}