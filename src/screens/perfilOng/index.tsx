import { View, Text, ImageBackground, ScrollView, StatusBar, Image, FlatList } from 'react-native'
import React from 'react'
import { styles } from './style'
import { theme } from '../../global/styles/theme'
import NavBar from '../../components/navBar'
import Icon from "react-native-vector-icons/Feather";
import OpcoesPerfil from '../../components/opcoesPerfil';


export default function PerfilONG() {
  return (
    <ImageBackground
        style={styles.imgDeFundo}
        source={require('../../assets/img/imgBackPerfilONG.png')}
    >
        <ScrollView style={styles.containerConteudo}>
          <StatusBar backgroundColor={'transparent'} barStyle={'dark-content'}/>
            <NavBar/>
            <View style={styles.containerFotoPerfileBanner}>
              <View style={styles.containerBanner}>
                <Image
                  style={styles.imageBanner}
                  source={require('../../assets/img/capa-1200x450.jpeg')}
                />
                <View style={styles.containerFotoDePerfil}>
                  <Image
                    style={styles.imageFotoDePerfil}
                    source={require('../../assets/img/fotoDePerfil.jpeg')}
                  />
                </View>
              </View>
              <View style={styles.containerAcoesPerfil}>
                <OpcoesPerfil
                 iconName="plus-circle"
                 fontSize={15}
                 color={theme.colors.black}
                 text="Seguir"
                />
                <OpcoesPerfil
                 iconName="heart"
                 fontSize={15}
                 color={theme.colors.black}
                 text="Doar"
                />
                <OpcoesPerfil
                 iconName="message-circle"
                 fontSize={15}
                 color={theme.colors.black}
                 text="Chat"
                />
                <View style={{marginLeft:20}}>
                  <OpcoesPerfil
                  iconName="edit"
                  fontSize={15}
                  color={theme.colors.black}
                  text="Editar"
                  />
                </View>
              </View>
            </View>
            <View style={styles.containerDescricao}>
              <View style={styles.containerNomeCategorias}>
                <Text style={styles.nomeOng}>O tal do Jorg1nh0</Text>
                <View style={styles.containerCategorias} >
                  <Text style={styles.categorias}>a</Text>
                  <Text style={styles.categorias}>T</Text>
                  <Text style={styles.categorias}>S</Text>
                </View>
                {/* <View style={styles.containerCategorias}>Drogas</View>
                <View style={styles.containerCategorias}>Sexo</View> */}
              </View>
            </View>
        </ScrollView>

    </ImageBackground>
  )
}