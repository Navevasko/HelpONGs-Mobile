import {
  View,
  Text,
  Image,
  ImageBackground,
  StatusBar,
  ScrollView,
  TouchableOpacity
} from "react-native";
import React, { useEffect, useState } from "react";
import { styles } from "./style";
import { theme } from "../../global/styles/theme";
import ScreenTitle from "../../components/ScreenTitle";
import Icon from "react-native-vector-icons/Feather";

import InputBorder from "../../components/InputBorder";
import BtnSubmit from "../../components/BtnSubmit";
import { api } from "../../../api";
import ScrollBorder from "../../components/ScrollBorder";
import ChipCategoria from "../../components/ChipCategoria";
import InputContainer from "../../components/InputContainer";
import OptionsConfig from "../../components/OptionsConfig";
import InformacaoContaOng from "../../components/InformacaoContaOng";
import InformacaoEndrerecoOng from "../../components/InformacaoEnderecoOng";
import MeioDeDoacao from "../../components/MeioDeDoacao";
import Patrocinadores from "../../components/Patrocinadores";
import ConfiguracoesGerais from "../../components/ConfiguracoesGerais";
import InformacaoContatoOng from "../../components/InformacaoContatoOng";


export default function ConfigONG() {

  const [idOng, setIdOng] = useState(1);
  const [dataOng, setDataOng] = useState([]);
  const [dataContatoOng, setdataContatoOng] = useState([]);
  const [dataIdCategoriasOng, setdataIdCategoriasOng] = useState([]);
  const [qtdDeMembros, setqtdDeMembros] = useState();
  const [numero, setNumero] = useState();
  const [date, setDate] = useState('23/10/2000');

useEffect(()=>{

  api.get(`/ong/${idOng}`).then((response) =>{
    setDataOng(response.data.data);
  })

  api.get(`/contact/${idOng}`).then((response) =>{
    setdataContatoOng(response.data.data);
  })

  api.get(`/category/${idOng}`).then((response) =>{
    setdataIdCategoriasOng(response.data.data);
  })

  teste();
  
}, []);

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
          <Image
            source={{uri:dataOng.banner}}
            style={styles.banner}
          />
          <Image
            source={dataOng.foto ?{uri:dataOng.foto} : require('../../assets/img/perfilSemFoto.png')}
            style={styles.profilePicutre}
            resizeMode="cover"
          />

          <View style={styles.edit}>
            <Icon name="edit" size={20} />
          </View>

          <View style={styles.name}>
            <Text style={styles.nameText}>{dataOng.nome ? dataOng.nome : "Insira seu nome"}</Text>
            <Text style={styles.emailText}>{dataContatoOng.email}</Text>
          </View>
        </View>
        <View style={styles.containerHomeConfig}>
          <InformacaoContaOng data={dataOng} setData={setDataOng}/>
          <InformacaoContatoOng/>
          <InformacaoEndrerecoOng/>
          <MeioDeDoacao/>
          <Patrocinadores/>
          <ConfiguracoesGerais/>
        </View>
        
      </ScrollView>
    </>
  );
}
