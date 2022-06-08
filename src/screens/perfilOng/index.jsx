import { View, Text, ImageBackground, ScrollView, StatusBar, Image, TouchableOpacity, RefreshControl } from 'react-native'
import React, { createElement, useState, useEffect } from 'react'
import { styles } from './style'
import { theme } from '../../global/styles/theme'
import Menu from '../../components/navBar'
import Icon from "react-native-vector-icons/Feather";
import OpcoesPerfil from '../../components/opcoesPerfil';
import { ExibirPerfilOng } from '../../components/ExibirPerfilOng'
import { api } from '../../../api'
import ModalDoarPerfil from '../../components/ModalDoarPerfil'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function PerfilONG({route}) {
  const [teste, setTeste] = useState(1);
  const idOng = route.params.idOng;
  const [idLogin, setidLogin] = useState();
  const [dataOng, setDataOng] = useState([]);
  const [post, setPost] = useState(false);
  const [vaga, setVaga] = useState(false);
  const [evento, setEvento] = useState(false);
  const [dataCategoria, setDataCategoria] = useState([]);
  const [dataNumero, setDataNumero] = useState([]);
  const [atualizar, setAtualizar] = useState(false);

  console.log(route.params);

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

  const [user, setUser] = useState()

  const a = async( ) => {
    const a = await AsyncStorage.getItem("UserLogin")
    const b = JSON.parse(a)
    setidLogin(b.data.idLogin);
  }

  useEffect(() => {
    api.get(`/ong/${idOng}`).then(({data}) => {
      setDataOng(data.data)
    })
  }, [])

  useEffect(() => {
    AsyncStorage.getItem("UserLogin").then((data) => {
      setUser(JSON.parse(data))
    })
  }, [])

  console.log(user);

  
  React.useEffect(() =>{
    a(); 
    api.get(`/category/${idOng}`).then(({data}) => {
      setDataCategoria(data.data)
    }).catch((error) => console.log(error))
    api.get(`/contact/${idLogin}`).then(({data}) => {
      setDataNumero(data.data)
    }).catch((error) => console.log(error))
    trocarDeCor();
    Recarregar();
    
  }, [])
  a();
  function Recarregar(){
    api.get(`/ong/${idOng}`).then((response) => {
      setDataOng(response.data.data);
    });
  }

  function aoAtualizar(){
    setAtualizar(true);
    Recarregar();
    setAtualizar(false);
  }
  
  return (
    <ImageBackground
        style={styles.imgDeFundo}
        source={require('../../assets/img/Background.png')}
    >
     <StatusBar backgroundColor={'transparent'} barStyle={'dark-content'}/>
     <Menu
       estado="false"
       idOng={idOng}
     />
        <ScrollView refreshControl={<RefreshControl
              refreshing={atualizar}
              onRefresh={aoAtualizar}
            />} style={styles.containerConteudo}>
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
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <OpcoesPerfil
                 iconName="plus-circle"
                 fontSize={15}
                 color={theme.colors.black}
                 text="Seguir"
                />
                <ModalDoarPerfil data={dataOng}/>
                </View>
                <View style={{marginStart: 80}}>
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
                      <Text key={data.idCategorias} style={styles.categorias}>{data.tbl_categorias.nome}</Text>
                    );
                  })
                }

                {console.log(dataCategoria)}
                </View>
              </View>
              <Text style={styles.txtSeguidores}> {dataOng.numeroDeSeguidores} Seguidores </Text>
              <Text numberOfLines={5} style={styles.txtDescricao}>{dataOng.descricao}</Text>
              <View style={{flexDirection:"row", marginTop:10}}>
                <Icon name="users"style={styles.iconRedesSociais}/>
                <Text>{dataOng.qtdDeMembros}</Text>
              </View>
              <View style={{flexDirection:"row", marginTop:5}}>
                <Icon name="phone"style={styles.iconRedesSociais}/>
                <Text>{dataNumero.numero ? dataNumero.numero : "(11) 951736972"}</Text>
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
              {ExibirPerfilOng(teste, dataOng.foto, dataOng.nome)}
              {/* <View className='03' style={{height:200, width:"100%", backgroundColor:"green"}}></View> */}
              </View>
            </View>
        </ScrollView>

    </ImageBackground>
  )
}