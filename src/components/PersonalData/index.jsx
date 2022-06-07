import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { styles } from './style'
import Icon from 'react-native-vector-icons/Feather'
import {theme} from '../../global/styles/theme.js'
import MoreInformation from '../MoreInformation'

export default function PersonalData({cep, date, number}) {

  const [openModal, setOpenModal] = useState(false)

  const transformDate = (string) => {
    const date = new Date();
    const data = string.split("T")[0];

    const ano = data.split("-")[0];
    const mes = data.split("-")[2];
    const dia = data.split("-")[1];

    const aniversario = `${dia}/${mes}/${ano}`


    return aniversario;
  };


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dados pessoais</Text>

      <View style={styles.information}>
        <Icon name={"map"} style={{color: theme.colors.secondary, marginEnd: 10}} size={25}/>
        <Text style={styles.text}> {cep} </Text>
      </View>

      <View style={styles.information}>
        <Icon name={"gift"} style={{color: theme.colors.secondary, marginEnd: 10}} size={25}/>
        <Text style={styles.text}> {date ? transformDate(date) : ""} </Text>
      </View>

      <View style={styles.information}>
        <Icon name={"phone"} style={{color: theme.colors.secondary, marginEnd: 10}} size={25}/>
        <Text style={styles.text}> {number} </Text>
      </View>

      {/* <TouchableOpacity style={styles.information} onPress={() => {}}>
        <Icon name={"more-horizontal"} style={{color: theme.colors.secondary, marginEnd: 10}} size={25}/>
        <Text style={styles.text}> Mais informações </Text>
      </TouchableOpacity> */}

    </View>
  )
}