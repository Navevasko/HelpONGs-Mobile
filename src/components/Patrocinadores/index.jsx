import { StyleSheet, Text, View, Modal,Image,RefreshControl, ImageBackground, ScrollView,ToastAndroid, TouchableOpacity } from 'react-native'
import React, {useState, useEffect} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import OptionsConfig from '../OptionsConfig';
import Icon from "react-native-vector-icons/Feather";
import { theme } from '../../global/styles/theme';
import ScrollBorder from '../ScrollBorder';
import InputContainer from '../InputContainer';
import InputBorder from '../InputBorder';
import BtnConfig from '../BtnConfig';
import { api } from '../../../api';
import * as ImagePicker from "expo-image-picker";

export default function Patrocinadores() {

    const [modalVisible, setModalVisible] = useState(false);
    const [image, setImage] = useState(require("../../assets/img/perfilSemFoto.png"));
    const [deleteCategoria, setDeleteCategoria] = useState("flex");
    const [nome, setNome] = useState();
    const [site, setSite] = useState();
    const [btnTxt, setBtnTxt] = useState("Adicionar");
    const [fileName, setFileName] = useState();
    const [fileType, setFileType] = useState();
    const [base64, setBase64] = useState();
    const [dataPatrocinadores, setDataPatrocinadores] = useState([]);
    const [atualizar, setAtualizar] = useState(false);

    function aoAtualizar(){
      setAtualizar(true);
      categoria();
      setAtualizar(false);
    }

  // EFFECT PARA PEDIR PERMISSÃO PARA ACESSO A GALERIA
  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") { 
          alert("Desculpe! Precisamos de permissão para fazer isso funcionar");
        }
      }
      // await categoria()
      })();
  }, []);

  const categoria = () => { api.get(`/sponsor`).then((response) => {
    setDataPatrocinadores(response.data.data);
  });
}

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

    }
  };
    //FUNÇÃO PARA SALVAR CATEGORIA
    const onSubmit =  () =>{
      if(nome != null && site != null){
        if(btnTxt == "Adicionar"){
          api.post(`/sponsor`,{
            nome: nome,
            site: site,
            media: [
                {
                    fileName: fileName,
                    fileType: fileType,
                    base64: base64
                }
            ]
        }).then((response) => {
          if(response.status == 200){
            ToastAndroid.show("Patrocinador cadastrado com sucesso!", ToastAndroid.SHORT);
            setImage(require("../../assets/img/perfilSemFoto.png"));
            setNome("");
            setSite("");
            categoria();
          }
        }).catch((error) => {
          console.log("error salvar informações de patrocinador",error);
        })
        }
      }else{
        ToastAndroid.show("Por favor cadastre mais informações, para completar o cadastro de patrocinadores!", ToastAndroid.SHORT);
      }
      
    } 

    function excluirCategoria(id){
      if(id != null){
      api.delete(`/sponsor/${id}`).then((response) =>{
        if(response.status == 200){
          ToastAndroid.show("Patrocinador excluido com sucesso!", ToastAndroid.SHORT);
          categoria();
        }
       

      }).catch((error) => {
        console.log("error deletar patrocinador",error);
      })
    
    }
    }

  return (
    <SafeAreaView>
    <TouchableOpacity style={styles.containerPress} onPress={() => setModalVisible(true)}>
        <OptionsConfig txt={"Patrocinadores"} visibleModal={setModalVisible}/>
    </TouchableOpacity>
    <Modal transparent visible={modalVisible}>
        <ImageBackground source={require('../../assets/img/ImgBackground.png')} style={styles.containerPrincipal}>
        <View style={styles.top}>
            <Icon
             name={"chevron-left"} 
             size={30} 
             color={"black"}
             onPress={() =>{setModalVisible(false)}}
             /> 
            <Text style={styles.txtTitulo}>Patrocinadores</Text>
        </View>

        <ScrollView 
        refreshControl={<RefreshControl
            refreshing={atualizar}
            onRefresh={aoAtualizar}
          />}
          style={{paddingTop:15}}>
          <InputContainer>
              <TouchableOpacity style={{flexDirection:"row", alignItems:'center'}} onPress={() => {handleChoosePhoto()}}>
                  <Image
                      source={image}
                      style={{ width: 50, height: 50, borderRadius:50, marginRight:20 }}
                  />
                  <Text style={{fontSize:17}}>Adicionar Imagem</Text>
              </TouchableOpacity>
          </InputContainer>
          <InputContainer>
          <InputBorder 
                title="Nome do Patrocinador"  
                width={"100%"}
                color={"#FAFAFA"}
                borderColor={theme.colors.placeholder}
                txtColor={theme.colors.black}
                value={nome}
                placeholder={"Informe o nome do seu patrocinador"}
                onChangeText={(text) => setNome(text)}
                />
                <InputBorder 
                title="Site"  
                width={"100%"}
                color={"#FAFAFA"}
                borderColor={theme.colors.placeholder}
                txtColor={theme.colors.black}
                value={site}
                placeholder={"Informe o site do seu patrocinador"}
                onChangeText={(text) => setSite(text)}
                />
          </InputContainer>
          <View style={{flexDirection:'row', justifyContent:'space-around', marginBottom:20}}>
                <BtnConfig
                    text={btnTxt}
                    color={theme.colors.primaryFaded}
                    width="35%"
                    height={40}
                    onPress={() => {
                        onSubmit();
                    }}
                    />
            </View>
          <InputContainer>
          {
            dataPatrocinadores.map((item) => {
              return(
                  <ScrollBorder display={deleteCategoria} horizontal={false}  key={item.idPatrocinadores}>
                    <View
                      
                      style={{
                        width: "100%",
                        alignItems: "center",
                        justifyContent: "space-between",
                        borderRadius: 50,
                        flexDirection: "row",
                        padding: 15,
                        marginEnd: 10,
                      }}
                    >
                      <Image
                        source={{uri:item.referencia}}
                        style={{ width: 50, height: 50, marginEnd: 20 }}
                      />
                      <Text
                        style={{
                          marginEnd: 20,
                          fontSize: 22,
                          fontFamily: theme.fonts.semiBold,
                        }}
                      >
                        {" "}{item.nome}{" "}
                      </Text>
                      <Icon name="x-circle" size={35} onPress={() => {excluirCategoria(item.idPatrocinadores)}}/>
                    </View>
                  </ScrollBorder>
              )
            })
            
          }
          </InputContainer>
        </ScrollView>
        </ImageBackground>
    </Modal>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    containerPress:{
        height:45,
        width:"100%",
        // backgroundColor:"aqua"
    },
    containerPrincipal:{
        flex:1,
        backgroundColor:"#FAFAFA"
    },
    top:{
        flexDirection:"row",
        paddingHorizontal:10,
        alignItems:'center',
        marginTop:15
    },
    txtTitulo:{
        // width:"50%",
        textAlign:'center',
        fontFamily:theme.fonts.semiBold,
        fontSize:20,
        paddingBottom:5,
        borderBottomWidth:1,
        borderBottomColor: theme.colors.placeholder,
        color:theme.colors.primary,
        marginLeft:"17%"
    }
})