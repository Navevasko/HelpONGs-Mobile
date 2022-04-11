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
     <StatusBar backgroundColor={'transparent'} barStyle={'dark-content'}/>
     <NavBar/>
        <ScrollView style={styles.containerConteudo}>
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
                  <Text style={styles.categorias}>Natureza</Text>
                  <Text style={styles.categorias}>Fome</Text>
                  <Text style={styles.categorias}>Saúde</Text>
                </View>
              </View>
              <Text style={styles.txtSeguidores}>127 seguidores / 60 seguindo</Text>
              <Text style={styles.txtDescricao}>Amet minim mollit non deserunt ullamco sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.🦝  </Text>
              <View style={{flexDirection:"row", marginTop:10}}>
                <Icon name="facebook"style={styles.iconRedesSociais}/>
                <Text>ÈoJorg1nh0</Text>
              </View>
              <View style={{flexDirection:"row", marginTop:5}}>
                <Icon name="instagram"style={styles.iconRedesSociais}/>
                <Text>gfjgjgjghj</Text>
              </View>
              <View style={{flexDirection:"row", marginTop:5}}>
                <Icon name="more-horizontal"style={styles.iconRedesSociais}/>
                <Text>Mais Informações</Text>
              </View>
            </View>
            <View style={styles.containerTxtVagasPostsEventos}>
              <View style={{flexDirection:"row"}}>
                <Text style={styles.txtAcoesOngs}>Posts</Text>
                <Text style={styles.txtAcoesOngs}>Eventos</Text>
                <Text style={styles.txtAcoesOngs}>Vagas</Text>
              </View>
              <View style={[styles.card, styles.shadowProp]}>
                <View style={{flexDirection:"row"}}>
                  <Image
                    source={require('../../assets/img/fotoDePerfil.jpeg')}
                    style={styles.fotoDePerfilPost}
                  />
                  <View style={{flexDirection:"column", marginTop:5}}>
                    <Text>O tal do Jorg1nh0</Text>
                    <Text>25 de fevereiro de 2022</Text>
                  </View>
                </View>
                <View style={{flexDirection:"column"}}>
                  <Text>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                  </Text>
                  <Image
                    source={require('../../assets/img/post.jpg')}
                    style={styles.imgPost}
                  />
                  <View style={styles.containerAcoesPost}>
                    <Icon
                      name='thumbs-up'
                      style={styles.iconsAcoesPost}
                    />
                    <Text>16</Text>
                    <Icon
                      name='message-square'
                      style={styles.iconsAcoesPost}
                    />
                    <Text>16</Text>
                    <Icon
                      name='share-2'
                      style={styles.iconsAcoesPost}
                    />
                  </View>
                </View>
              </View>

              <View style={[styles.card, styles.shadowProp]}>
                <View style={{flexDirection:"row"}}>
                  <Image
                    source={require('../../assets/img/fotoDePerfil.jpeg')}
                    style={styles.fotoDePerfilPost}
                  />
                  <View style={{flexDirection:"column", marginTop:5}}>
                    <Text>O tal do Jorg1nh0</Text>
                    <Text>25 de fevereiro de 2022</Text>
                  </View>
                </View>
                <View style={{flexDirection:"column"}}>
                  <Text>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                  </Text>
                  <Image
                    source={require('../../assets/img/post.jpg')}
                    style={styles.imgPost}
                  />
                  <View style={styles.containerAcoesPost}>
                    <Icon
                      name='thumbs-up'
                      style={styles.iconsAcoesPost}
                    />
                    <Text>16</Text>
                    <Icon
                      name='message-square'
                      style={styles.iconsAcoesPost}
                    />
                    <Text>16</Text>
                    <Icon
                      name='share-2'
                      style={styles.iconsAcoesPost}
                    />
                  </View>
                </View>
              </View>
            </View>
        </ScrollView>

    </ImageBackground>
  )
}