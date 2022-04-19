import React from 'react'
import { View, Text, ImageBackground, SafeAreaView, Image, TouchableOpacity, } from 'react-native'
import { theme } from '../../global/styles/theme'
import InputUnderline from '../../components/inputCadastro'
import BtnContinuar from '../../components/btnContinuar'
import { styles } from './style'


const imgBackgroundSenha = require('../../assets/img/imgBackgroundRedefinicaoDeSenha.png')
const imgPrincipalRedefinicaoDeSenha = require('../../assets/img/imgPrincipalEsqueceuSenha.png')

export default function EsqueciSenha() {
  return (
    <ImageBackground
       style={styles.containerImgBackground}
       source={imgBackgroundSenha}
    >
      <SafeAreaView style={styles.containerConteudo}>
        <Text style={styles.titulo}>Esqueceu a senha?</Text>
        <Image
          style={styles.imgPrincipal}
          source={imgPrincipalRedefinicaoDeSenha}
        />
        <Text style={styles.txtEmail}>Digite seu e-mail{"\n"} cadastrado</Text>
        
        <InputUnderline 
              placeholder="Digite seu e-mail"
              iconName="mail"
              fontSize={25}
              color={theme.colors.secondary}
            />
        
        <TouchableOpacity style={styles.containerBtn}  onPress={() => console.log("hello world ")}>
            <BtnContinuar text="Continuar"/>
        </TouchableOpacity>

      </SafeAreaView>

    </ImageBackground>
  )
}