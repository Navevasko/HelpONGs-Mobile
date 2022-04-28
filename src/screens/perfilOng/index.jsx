import { View, Text, ImageBackground, ScrollView, StatusBar, Image, TouchableOpacity } from 'react-native'
import React, { createElement, useState } from 'react'
import { styles } from './style'
import { theme } from '../../global/styles/theme'
import Menu from '../../components/navBar'
import Icon from "react-native-vector-icons/Feather";
import OpcoesPerfil from '../../components/opcoesPerfil';
import { ExibirPerfilOng } from '../../components/ExibirPerfilOng'
import { api } from '../../../api'

export default function PerfilONG() {

  const [teste, setTeste] = useState();
  const [idOng, setIdOng] = useState(4);
  const [dataOng, setDataOng] = useState([]);
  // const [cores, setCores] = useState(styles.txtAcoesOngs);
  // const [ligar, setLigar] = useState(true);

  // const trocarDeCor = () => {
  //   !setLigar();

  //   if (ligar) {
  //     setCores(styles.buttonStylex);
  //   } else {
  //     setCores(styles.txtAcoesOngs)
  //   }
  // }

  React.useEffect( () =>{

    api.get(`/ong/${idOng}`).then((response) => {
      setDataOng(response.data.data)
    });

  }, [])
  
  return (
    <ImageBackground
        style={styles.imgDeFundo}
        source={require('../../assets/img/imgBackPerfilONG.png')}
    >
     <StatusBar backgroundColor={'transparent'} barStyle={'dark-content'}/>
     <Menu
       estado="false"
       dataOng
     />
        <ScrollView style={styles.containerConteudo}>
            <View style={styles.containerFotoPerfileBanner}>
              <View style={styles.containerBanner}>
                <Image
                  style={styles.imageBanner}
                  source={{uri: dataOng.banner}}
                />
                <View style={styles.containerFotoDePerfil}>
                  <Image
                    style={styles.imageFotoDePerfil}
                    source={{uri: dataOng.foto}}
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
                <Text style={styles.nomeOng}>{dataOng.nome}</Text>
                <View style={styles.containerCategorias} >
                  <Text style={styles.categorias}>Natureza</Text>
                  <Text style={styles.categorias}>Fome</Text>
                  <Text style={styles.categorias}>Saúde</Text>
                </View>
              </View>
              <Text style={styles.txtSeguidores}>127 seguidores / 60 seguindo</Text>
              <Text numberOfLines={5} style={styles.txtDescricao}>{dataOng.descricao}</Text>
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
                <TouchableOpacity onPress={() =>  {setTeste(1)}}>
                  <Text style={styles.txtAcoesOngs}>Posts</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {setTeste(2)}}>
                <Text style={styles.txtAcoesOngs}>Eventos</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {setTeste(3)}}>
                <Text style={styles.txtAcoesOngs}>Vagas</Text>
                </TouchableOpacity>
              </View>
              <View style={{flexDirection:"column"}}>
              {ExibirPerfilOng(teste)}
              {/* <View className='03' style={{height:200, width:"100%", backgroundColor:"green"}}></View> */}
              </View>
            </View>
        </ScrollView>

    </ImageBackground>
  )
}