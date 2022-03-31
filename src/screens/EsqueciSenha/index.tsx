import React from 'react'
import { View, Text, ImageBackground, SafeAreaView, Image } from 'react-native'
import { theme } from '../../global/styles/theme'
import InputUnderline from '../../components/inputCadastro'
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
        <Text style={styles.titulo}>Esqueceu a Senha?</Text>
        <Image
          style={styles.imgPrincipal}
          source={imgPrincipalRedefinicaoDeSenha}
        />
        <Text>Digite seu e-mail cadastrado</Text>
        <InputUnderline 
              placeholder="Digite seu e-mail"
              iconName=""
              fontSize={25}
              color={theme.colors.secondary}
            />
      </SafeAreaView>

    </ImageBackground>
  )
}