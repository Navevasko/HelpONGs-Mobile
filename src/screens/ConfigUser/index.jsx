import {
    View,
    Text,
    Image,
    StatusBar,
    ScrollView,
    TouchableOpacity, 
    Modal,
    RefreshControl,
    ToastAndroid
  } from "react-native";
  import React, { useEffect, useState } from "react";
  import { styles } from "./style";
  import { theme } from "../../global/styles/theme";
  import ScreenTitle from "../../components/ScreenTitle";
  import Icon from "react-native-vector-icons/Feather";
  import BtnConfig from "../../components/BtnConfig";
  import { api } from "../../../api";
  import InformacoesDeContaUser from "../../components/InformacoesDeContaUser";
  import ConfiguracoesGerais from "../../components/ConfiguracoesGerais";
  import InformacaoEndrerecoOng from "../../components/InformacaoEndrerecoOng";
  import * as ImagePicker from "expo-image-picker";
  
  export default function ConfigUser() {
  
    const [idUser, setIdUser] = useState(4);
    const [foto, setFoto] = useState(require("../../assets/img/perfilSemFoto.png"));
    const [banner, setBanner] = useState();
    const [nome, setNome] = useState();
    const [email, setEmail] =useState();
    const [idLogin, setIdLogin] = useState();
    const [visible, setVisible] = useState(false);
    const [visibleEditar, setVisibleEditar] = useState(false);
    const [visibleBanner, setvisibleBanner] = useState(false);
    const [btnTxt, setBtnTxt] = useState("Editar");
    const [fileName, setFileName] = useState();
    const [fileType, setFileType] = useState();
    const [base64, setBase64] = useState();
    const [fileNameBanner, setFileNameBanner] = useState();
    const [fileTypeBanner, setFileTypeBanner] = useState();
    const [base64Banner, setBase64Banner] = useState();
    const [tipo, setTipo] = useState();
    const [atualizar, setAtualizar] = useState(false);
  
    useEffect( async() => {
      await Recarregar(); 
    }, []);
  
    function Recarregar(){
      api
        .get(`/user/${idUser}`)
        .then(({data}) => {
          setNome(data.data.nome);
          setEmail(data.data.email);
          setBanner({uri: data.data.banner});
          setFoto({uri: data.data.foto});
          setIdLogin(data.data.tbl_login.idLogin);
        })
        .catch((error) => {
          console.log("errro get usuario",error);
        });
    }
  
    function aoAtualizar(){
      setAtualizar(true);
      Recarregar();
      setAtualizar(false);
    }
  
      // FUNÇÃO PARA ABRIR A GALERIA
      const handleChoosePhoto = async () => {
  
        if(btnTxt == "Editar"){
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
              if(tipo == "foto"){
                setFoto({uri: result.uri});
                setFileName(result.uri.split("/")[11]);
                setFileType(result.type + "/" + result.uri.split("/")[11].split(".")[1]);
                setBase64(result.base64);
                setBtnTxt("Salvar");
              }else if(tipo == "banner"){
                setBanner({uri: result.uri});
                setFileNameBanner(result.uri.split("/")[11]);
                setFileTypeBanner(result.type + "/" + result.uri.split("/")[11].split(".")[1]);
                setBase64Banner(result.base64);
                setBtnTxt("Salvar");
              }
              
              
            }else{
              ToastAndroid.show("Desculpe houve um erro nessa imagem por favor selecione outra!", ToastAndroid.SHORT);
            }
      
          }else{
            return;
          }
        }else{
          uploadImage();
        }
        
      };
      const uploadImage = () => {
        if(btnTxt == "Salvar"){
          api.put(`/user/media/${idUser}`, {
            foto: [
                {
                    fileName: fileName,
                    type: fileType,
                    base64:base64,
                }
            ],
            banner: [
                {
                    fileName:fileNameBanner,
                    type: fileTypeBanner,
                    base64: base64Banner
                }
            ]
        }).then((response) => {
            ToastAndroid.show("Imagem salva com sucesso!", ToastAndroid.SHORT);
            setBtnTxt("Editar");
            setVisibleEditar(false);
            console.log("deu certo");
        }).catch((error) => {
          console.log("ERRO de upload image, config",error);
          setBtnTxt("Editar");
          setVisibleEditar(false);
        })
        }
      } 
  
    return (
      <>
        <StatusBar backgroundColor={"transparent"} barStyle={"dark-content"} />
        <ScreenTitle title={"Configurações"} />
        <ScrollView refreshControl={<RefreshControl
              refreshing={atualizar}
              onRefresh={aoAtualizar}
            />} style={styles.container}>
          <View style={styles.containerPerfil}>
          <TouchableOpacity 
            onLongPress={() => {
              setTipo("banner");
              setVisibleEditar(true) }}
            onPress={() => {setvisibleBanner(true);}}>
            <Image
              source={banner}
              style={styles.banner}
            />
          </TouchableOpacity>
          <TouchableOpacity 
          onLongPress={() => {
            setTipo("foto");
            setVisibleEditar(true)
            }} 
          onPress={() => {
            setVisible(true);
          }}>
            <Image
              source={foto}
              style={styles.profilePicutre}
              resizeMode="cover"
            />
            </TouchableOpacity>
  
            <View style={styles.edit}>
              <Icon name="edit" size={20} />
            </View>
            {/* MODAL PARA ABRIR FOTO DE PERFIL */}
            <Modal animationType="fade" transparent visible={visible} >
            <TouchableOpacity onPress={()=> {setVisible(false)}} style={{flex:1, backgroundColor:"rgba(0, 0, 0, 0.4)",  alignItems:"center", justifyContent:"center"}}>
              <View style={{height:"60%", width:"80%", backgroundColor:"#fafafa", borderRadius:10}}>
              <View style={{width:30, position:"absolute", right:10, top:10, zIndex:999}} >
                <Icon
                  name="x" size={30} TouchableOpacity={()=>{setVisible(false)}}
                />
                </View>
                <Image
                  source={foto}
                  style={{height:"100%", width:"100%", resizeMode:"stretch"}}
                />
              </View>
              </TouchableOpacity>
            </Modal>
            {/* MODAL PARA ABRIR BANNER */}
            <Modal animationType="fade" transparent visible={visibleBanner} >
            <TouchableOpacity onPress={()=> {setvisibleBanner(false)}} style={{flex:1, backgroundColor:"rgba(0, 0, 0, 0.4)",  alignItems:"center", justifyContent:"center"}}>
              <View style={{height:"45%", width:"80%", backgroundColor:"#fafafa", borderRadius:10}}>
              <View style={{width:30, position:"absolute", right:10, top:10, zIndex:999}} >
                <Icon
                  name="x" size={30} TouchableOpacity={()=>{setvisibleBanner(false)}}
                />
                </View>
                <Image
                  source={banner}
                  style={{height:"100%", width:"100%", resizeMode:"stretch"}}
                />
              </View>
              </TouchableOpacity>
            </Modal>
            {/* MODAL EDITAR FOTO */}
            <Modal animationType="fade" transparent visible={visibleEditar} >
            <TouchableOpacity onPress={()=> {setVisibleEditar(false)}} style={{flex:1, backgroundColor:"rgba(0, 0, 0, 0.4)",  alignItems:"center", justifyContent:"center"}}>
              <View style={{height:"45%", width:"80%", backgroundColor:"#fafafa", borderRadius:10, padding:20, flexDirection:"column", justifyContent:'space-between'}}>
              <Text style={{fontSize:16, textAlign:"center", fontFamily:theme.fonts.semiBold}}>Tem certeza que deseja editar essa foto?</Text>
                <Image
                  source={tipo == "foto" ? foto : banner}
                  style={{height:"50%", width:"50%", resizeMode:"stretch", alignSelf:"center"}}
                />
                <View style={{flexDirection:"row", width:"80%", justifyContent:"space-between", alignSelf:"center"}}>
                <TouchableOpacity onPress={()=>{handleChoosePhoto(); uploadImage()}} style={{height:30, width:100, borderRadius:5, backgroundColor:theme.colors.primary, alignItems:"center", justifyContent:"center"}}>
                  <Text>{btnTxt}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {setVisibleEditar(false)}} style={{height:30, width:100, borderRadius:5, backgroundColor:theme.colors.primary, alignItems:"center", justifyContent:"center"}}>
                  <Text>Cancelar</Text>
                </TouchableOpacity>
                </View>
              </View>
              </TouchableOpacity>
            </Modal>
  
            <View style={styles.name}>
              <Text style={styles.nameText}>{nome}</Text>
              <Text style={styles.emailText}>{email}</Text>
            </View>
          </View>
          <View style={{paddingHorizontal:15}}>
          <InformacoesDeContaUser idLogin={idLogin} idUser={idUser}/>
          <InformacaoEndrerecoOng idLogin={idLogin}/>
          <ConfiguracoesGerais idUser={idUser}/>
          </View>
        </ScrollView>
      </>
    );
  }