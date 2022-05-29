import { StyleSheet, Text, View, Modal,Image, ImageBackground, ScrollView, TouchableOpacity } from 'react-native'
import React, {useState, useEffect} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import OptionsConfig from '../OptionsConfig';
import Icon from "react-native-vector-icons/Feather";
import { theme } from '../../global/styles/theme';
import ScrollBorder from '../ScrollBorder';
import InputContainer from '../InputContainer';
import InputBorder from '../InputBorder';
import BtnSubmit from '../BtnSubmit';
import { api } from '../../../api';

export default function Patrocinadores() {

    const [modalVisible, setModalVisible] = useState(false);
    const [nome, setNome] = useState();
    const [site, setSite] = useState();
    const [btnTxt, setBtnTxt] = useState("Adcionar");
    const [fileName, setFileName] = useState("fbfbbb");
    const [fileType, setFileType] = useState("fbfbbb");
    const [base64, setBase64] = useState("fbfbbb");

    const onSubmit =  () =>{
      if(btnTxt == "Adcionar"){
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
        console.log(response);
      }).catch((error) => {
        console.log(error);
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

        <ScrollView style={{paddingTop:15}}>
          <InputContainer>
              <View style={{flexDirection:"row", alignItems:'center'}}>
                  <Image
                      source={require("../../assets/img/perfilSemFoto.png")}
                      style={{ width: 50, height: 50, borderRadius:50, marginRight:20 }}
                  />
                  <Text style={{fontSize:17}}>Adicionar Imagem</Text>
              </View>
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
          <InputContainer>
            <ScrollBorder horizontal={false}>
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
                  source={require("../../assets/img/ONG.png")}
                  style={{ width: 50, height: 50, marginEnd: 20 }}
                />
                <Text
                  style={{
                    marginEnd: 20,
                    fontSize: 22,
                    fontFamily: theme.fonts.semiBold,
                  }}
                >
                  {" "}
                  COCA COLA{" "}
                </Text>
                <Icon name="x-circle" size={35} />
              </View>
            </ScrollBorder>
          </InputContainer>
          <View style={{flexDirection:'row', justifyContent:'space-around', marginBottom:20}}>
                <BtnSubmit
                    text={btnTxt}
                    color={theme.colors.primaryFaded}
                    width="35%"
                    height={40}
                    onPress={() => {
                        onSubmit();
                    }}
                    />
            </View>
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