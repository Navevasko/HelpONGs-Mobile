import { View, Text, ImageBackground, ScrollView } from 'react-native'
import React from 'react'
import { styles } from './style'
import NavBar from '../../components/navBar'

const imgBack = require('../../assets/img/imgBackPerfilONG.png')

export default function PerfilONG() {
  return (
    <ImageBackground
        style={styles.imgDeFundo}
        source={imgBack}
    >
        <ScrollView
            style={styles.containerConteudo}
        >
            <NavBar/>
        </ScrollView>

    </ImageBackground>
  )
}