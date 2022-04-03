import { View, Text, ImageBackground, SafeAreaView, Image } from 'react-native'
import React from 'react'
import {styles} from './style'
import { theme } from '../../global/styles/theme'
import InputUnderline from '../../components/inputCadastro'
import BtnContinuar from '../../components/btnContinuar'

const imgBackgroundSenha = require('../../assets/img/imgBackgroundRedefinicaoDeSenha.png')
const imgPrincipal = require('../../assets/img/imgRedefinirSenha.png')

export default function RedefinirSenha() {
  return (
    <ImageBackground
        style={styles.containerImgBackground}
        source={imgBackgroundSenha}
    >
        <SafeAreaView style={styles.containerConteudo}>
            <Text style={styles.titulo}>Redefinir senha</Text>
            <Text style={styles.txtSubtitulo}>Defina sua nova senha</Text>
            <Image
                style={styles.containerImg}
                source={imgPrincipal}
            />
            <View style={styles.containerInput}>
                <InputUnderline 
                    placeholder="Digite sua nova senha"
                    iconName="unlock"
                    fontSize={25}
                    color={theme.colors.secondary}
                />
            </View>
            <BtnContinuar text={"Confirmar"}/>

        </SafeAreaView>

    </ImageBackground>
  )
}