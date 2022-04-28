import { View, Text, ImageBackground, SafeAreaView, Image } from 'react-native'
import React from 'react'
import { styles } from './style'
import BtnContinuar from '../../components/btnContinuar'


const imgBack = require('../../assets/img/imgBackgroundRedefinicaoDeSenha.png')
const imgPrincipal = require('../../assets/img/imgSucessoRedefinirSenha.png')

export default function SucessoRedefinirSenha() {
  return (
    <ImageBackground
      style={styles.imgDeFundo}
      source={imgBack}
    >
      <SafeAreaView style={styles.containerConteundo}>
        <Image
          style={styles.imgPrincipal}
          source={imgPrincipal}
        />
        <Text style={styles.txt}>sua senha foi redefinida com</Text>
        <Text style={styles.txtDestaque}>sucesso</Text>
        <BtnContinuar text={"Continuar"}/>
      </SafeAreaView>

    </ImageBackground>
  )
}