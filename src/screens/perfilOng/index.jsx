import { View, Text, ImageBackground, ScrollView, StatusBar, Image, TouchableOpacity, RefreshControl } from 'react-native'
import React, { createElement, useState } from 'react'
import { styles } from './style'
import { theme } from '../../global/styles/theme'
import Menu from '../../components/navBar'
import Icon from "react-native-vector-icons/Feather";
import OpcoesPerfil from '../../components/opcoesPerfil';
import { ExibirPerfilOng } from '../../components/ExibirPerfilOng'
import { api } from '../../../api'
import ModalDoarPerfil from '../../components/ModalDoarPerfil'

export default function PerfilONG({route}) {
  const [teste, setTeste] = useState();
  const idOng = route.params.idOng;
  const idLogin = 1;
  const [dataOng, setDataOng] = useState([]);
  const [post, setPost] = useState(false);
  const [vaga, setVaga] = useState(false);
  const [evento, setEvento] = useState(false);
  const [dataCategoria, setDataCategoria] = useState([]);
  const [dataNumero, setDataNumero] = useState([]);

  const trocarDeCor = () => {
    if (teste == 1) {
      setPost(true);
     setEvento(false);
     setVaga(false);
    } else if(teste == 2) {
      setPost(false);
     setEvento(true);
     setVaga(false);
    }else{
     setPost(false);
     setEvento(false);
     setVaga(true);
    }
  }
  

  React.useEffect(() =>{

    api.get(`/ong/${idOng}`).then((response) => {
      setDataOng(response.data.data);
    });
    api.get(`/category/${idOng}`).then(({data}) => {
      setDataCategoria(data.data)
    }).catch((error) => console.log(error))
    api.get(`/contact/${idLogin}`).then(({data}) => {
      setDataNumero(data.data)
    }).catch((error) => console.log(error))
    trocarDeCor();
  }, [])
  
  return (
    <ImageBackground
        style={styles.imgDeFundo}
        source={require('../../assets/img/imgBackPerfilONG.png')}
    >
     <StatusBar backgroundColor={'transparent'} barStyle={'dark-content'}/>
     <Menu
       estado="false"
       idOng={idOng}
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
                <ModalDoarPerfil data={dataOng}/>
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
                {
                  dataCategoria.map((data) => {
                    return(
                      <Text style={styles.categorias}>{data.tbl_categorias.nome}</Text>
                    );
                  })
                }
                </View>
              </View>
              <Text style={styles.txtSeguidores}>Seguidores {dataOng.numeroDeSeguidores}</Text>
              <Text numberOfLines={5} style={styles.txtDescricao}>{dataOng.descricao}</Text>
              <View style={{flexDirection:"row", marginTop:10}}>
                <Icon name="users"style={styles.iconRedesSociais}/>
                <Text>{dataOng.qtdDeMembros}</Text>
              </View>
              <View style={{flexDirection:"row", marginTop:5}}>
                <Icon name="phone"style={styles.iconRedesSociais}/>
                <Text>{dataNumero.numero}</Text>
              </View>
              <View style={{flexDirection:"row", marginTop:5}}>
                <Icon name="more-horizontal"style={styles.iconRedesSociais}/>
                <Text>Mais Informações</Text>
              </View>
            </View>
            <View style={styles.containerTxtVagasPostsEventos}>
              <View style={{flexDirection:"row"}}>
                <TouchableOpacity onPress={() =>  {setTeste(1); trocarDeCor()}}>
                  <Text style={[styles.txtAcoesOngs, {color: post ? theme.colors.secondary : theme.colors.grey}]}>Posts</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {setTeste(2); trocarDeCor()}}>
                <Text style={[styles.txtAcoesOngs, {color: evento ? theme.colors.secondary : theme.colors.grey}]}>Eventos</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {setTeste(3);trocarDeCor()}}>
                <Text style={[styles.txtAcoesOngs, {color: vaga ? theme.colors.secondary : theme.colors.grey}]}>Vagas</Text>
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