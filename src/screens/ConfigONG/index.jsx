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
import * as ImagePicker from "expo-image-picker";



export default function ConfigONG() {

  const [idOng, setIdOng] = useState(9);
  const [dataOng, setDataOng] = useState([]);
  const [dataContatoOng, setdataContatoOng] = useState([]);
  const [dataIdCategoriasOng, setdataIdCategoriasOng] = useState([]);
  const [qtdDeMembros, setqtdDeMembros] = useState();
  const [numero, setNumero] = useState();
  const [date, setDate] = useState('23/10/2000');
  const [visible, setVisible] = useState(false);
  const [visibleEditar, setVisibleEditar] = useState(false);
  const [fileName, setFileName] = useState();
  const [fileType, setFileType] = useState();
  const [base64, setBase64] = useState();
  const [image, setImage] = useState(require("../../assets/img/perfilSemFoto.png"));

useEffect(async()=>{

  await api.get(`/ong/${idOng}`).then((response) =>{
    setDataOng(response.data.data);
    setImage(response.data.data.foto);
  })

  api.get(`/contact/${idOng}`).then((response) =>{
    setdataContatoOng(response.data.data);
  })

  api.get(`/category/${idOng}`).then((response) =>{
    setdataIdCategoriasOng(response.data.data);
  })

}, []);


  // FUNÇÃO PARA ABRIR A GALERIA
  const handleChoosePhoto = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsMultipleSelection: false,
      allowsEditing: true,
      aspect: [1, 1],
      base64: true,
      quality: 1,
    });
    if(!result.cancelled){
      if(result.uri != null){
        setImage({uri: result.uri});
        setFileName(result.uri.split("/")[11]);
        setFileType(result.type + "/" + fileName.split(".")[1]);
        setBase64(result.base64);
      }else{
        ToastAndroid.show("Desculpe houve um erro nessa imagem por favor selecione outra!", ToastAndroid.SHORT);
      }

    }else{
      return;
    }
  };


  // const teste = () => {

  //   let idCategorias = [];
  //   dataIdCategoriasOng.map((item) =>{
  //       idCategorias.push(item.idCategorias);
  //   });

  //   let arrayidCategorias = [];

  //   // dataCategoriasOng.map((item) =>{
  //   //   arrayidCategorias.push(item.idCategorias);
  //   // });

  //   // let arrayCategorias = [];
  //   // let idx = arrayidCategorias.indexOf(idCategorias);
  //   // while (idx == -1) {
  //   //   arrayCategorias.push(idx);
  //   //   idx = dataCategoriasOng.indexOf(idCategorias, idx ++);
      
  //   // }
  //   // console.log("foi",arrayCategorias);
  // }

  

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
        <TouchableOpacity 
        onLongPress={() => {
          setVisibleEditar(true)
          }} 
        onPress={() => {
          setVisible(true);
        }}>
          <Image
            source={image}
            style={styles.profilePicutre}
            resizeMode="cover"
          />
          </TouchableOpacity>

          <View style={styles.edit}>
            <Icon name="edit" size={20} />
          </View>
          <Modal animationType="fade" transparent visible={visible} >
          <TouchableOpacity onPress={()=> {setVisible(false)}} style={{flex:1, backgroundColor:"rgba(0, 0, 0, 0.4)",  alignItems:"center", justifyContent:"center"}}>
            <View style={{height:"60%", width:"80%", backgroundColor:"#fafafa", borderRadius:10}}>
            <View style={{width:30, position:"absolute", right:10, top:10, zIndex:999}} >
              <Icon
                name="x" size={30} TouchableOpacity={()=>{setVisible(false)}}
              />
              </View>
              <Image
                source={image}
                style={{height:"100%", width:"100%", resizeMode:"stretch"}}
              />
            </View>
            </TouchableOpacity>
          </Modal>
          <Modal animationType="fade" transparent visible={visibleEditar} >
          <TouchableOpacity onPress={()=> {setVisibleEditar(false)}} style={{flex:1, backgroundColor:"rgba(0, 0, 0, 0.4)",  alignItems:"center", justifyContent:"center"}}>
            <View style={{height:"45%", width:"80%", backgroundColor:"#fafafa", borderRadius:10, padding:20, flexDirection:"column", justifyContent:'space-between'}}>
            <Text style={{fontSize:16, textAlign:"center", fontFamily:theme.fonts.semiBold}}>Tem certeza que deseja editar essa foto?</Text>
              <Image
                source={image}
                style={{height:"50%", width:"50%", resizeMode:"stretch", alignSelf:"center"}}
              />
              <View style={{flexDirection:"row", width:"80%", justifyContent:"space-between", alignSelf:"center"}}>
              <TouchableOpacity onPress={()=>{handleChoosePhoto()}} style={{height:30, width:100, borderRadius:5, backgroundColor:theme.colors.primary, alignItems:"center", justifyContent:"center"}}>
                <Text>Editar</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => {setVisibleEditar(false)}} style={{height:30, width:100, borderRadius:5, backgroundColor:theme.colors.primary, alignItems:"center", justifyContent:"center"}}>
                <Text>Cancelar</Text>
              </TouchableOpacity>
              </View>
            </View>
            </TouchableOpacity>
          </Modal>

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
