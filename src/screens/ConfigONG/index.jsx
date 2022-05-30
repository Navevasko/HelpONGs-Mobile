import {
  View,
  Text,
  Image,
  ImageBackground,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  Modal
} from "react-native";
import React, { useEffect, useState } from "react";
import { styles } from "./style";
import { theme } from "../../global/styles/theme";
import ScreenTitle from "../../components/ScreenTitle";
import Icon from "react-native-vector-icons/Feather";

import { api } from "../../../api";
import InformacaoContaOng from "../../components/InformacaoContaOng";
import InformacaoEndrerecoOng from "../../components/InformacaoEnderecoOng";
import MeioDeDoacao from "../../components/MeioDeDoacao";
import Patrocinadores from "../../components/Patrocinadores";
import ConfiguracoesGerais from "../../components/ConfiguracoesGerais";
import InformacaoContatoOng from "../../components/InformacaoContatoOng";


export default function ConfigONG() {

  const [idOng, setIdOng] = useState(9);
  const [dataOng, setDataOng] = useState([]);
  const [dataContatoOng, setdataContatoOng] = useState([]);
  const [dataIdCategoriasOng, setdataIdCategoriasOng] = useState([]);
  const [qtdDeMembros, setqtdDeMembros] = useState();
  const [numero, setNumero] = useState();
  const [date, setDate] = useState('23/10/2000');
  const [visible, setVisible] = useState();

useEffect(async()=>{

  await api.get(`/ong/${idOng}`).then((response) =>{
    setDataOng(response.data.data);
  })

  api.get(`/contact/${idOng}`).then((response) =>{
    setdataContatoOng(response.data.data);
  })

  api.get(`/category/${idOng}`).then((response) =>{
    setdataIdCategoriasOng(response.data.data);
  })

  
}, []);

  function editarPerfil(visible){
    console.log("eaíiii");
    if(visible){
      return(
        <Modal visible={visible} style={{height:200, width:300}}>
        <TouchableOpacity>
          <View>Ver foto</View>
        </TouchableOpacity>
          <View>editar foto</View>
        </Modal>
      )
    }
    
  }

  const teste = () => {

    let idCategorias = [];
    dataIdCategoriasOng.map((item) =>{
        idCategorias.push(item.idCategorias);
    });

    let arrayidCategorias = [];

    // dataCategoriasOng.map((item) =>{
    //   arrayidCategorias.push(item.idCategorias);
    // });

    // let arrayCategorias = [];
    // let idx = arrayidCategorias.indexOf(idCategorias);
    // while (idx == -1) {
    //   arrayCategorias.push(idx);
    //   idx = dataCategoriasOng.indexOf(idCategorias, idx ++);
      
    // }
    // console.log("foi",arrayCategorias);
  }

  

  return (
    <>
      <StatusBar backgroundColor={"transparent"}   barStyle={"dark-content"} />
      <ScreenTitle title={"Configurações"} />
      <ScrollView style={styles.container}>
        <View style={styles.containerPerfil}>
        <TouchableOpacity onLongPress={() => {editarPerfil()}}>
          <Image
            source={{uri:dataOng.banner}}
            style={styles.banner}
          />
        </TouchableOpacity>
        <TouchableOpacity onLongPress={() => {
          setVisible(true);
          editarPerfil(visible);
        }}>
          <Image
            source={dataOng.foto ?{uri:dataOng.foto} : require('../../assets/img/perfilSemFoto.png')}
            style={styles.profilePicutre}
            resizeMode="cover"
          />
          </TouchableOpacity>

          <View style={styles.edit}>
            <Icon name="edit" size={20} />
          </View>

          <View style={styles.name}>
            <Text style={styles.nameText}>{dataOng.nome ? dataOng.nome : "Insira seu nome"}</Text>
            <Text style={styles.emailText}>{dataContatoOng.email}</Text>
          </View>
        </View>
        <View style={styles.containerHomeConfig}>
          <InformacaoContaOng idOng={idOng}/>
          <InformacaoContatoOng idOng={idOng}/>
          <InformacaoEndrerecoOng/>
          <MeioDeDoacao/>
          <Patrocinadores/>
          <ConfiguracoesGerais/>
        </View>
        
      </ScrollView>
    </>
  );
}
