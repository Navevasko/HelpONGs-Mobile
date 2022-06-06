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
import CardContainer from '../CardContainer';
import { api } from '../../../api';

export default function ConfiguracoesGerais({idUser, idOng}) {

    const [modalVisible, setModalVisible] = useState(false);
    const [modalVisibleExcluir, setModalVisibleExcluir] = useState(false);
    const [modalVisibleAgradecimento, setModalVisibleAgradecimento] = useState(false);

    useEffect(async() => {
      await ExcluirConta();
    }, []);

    function ExcluirConta(){
      if(idUser){
        api.delete(`/user/${idUser}`).then((response) => {
          console.log(response);
          setModalVisibleAgradecimento(true);
        }).catch((error) => {
          console.log("error em excluir conta usúario", error);
        })
      }else if(idOng){
        api.delete(`/ong/${idOng}`).then((response) => {
          console.log(response);
          setModalVisibleAgradecimento(true);
        }).catch((error) => {
          console.log("error em excluir conta ong", error, idOng);
        })
      }
      
    }
    

  return (
    <SafeAreaView>
    <TouchableOpacity style={styles.containerPress} onPress={() => setModalVisible(true)}>
        <OptionsConfig txt={"Configurações Gerais"} visibleModal={setModalVisible}/>
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
            <Text style={styles.txtTitulo}>Configurações Gerais</Text>
        </View>

        <ScrollView >
          <InputContainer>
            <ScrollBorder horizontal={false}>
            <Text style={{fontSize:20, color:theme.colors.secondary,marginBottom:10, fontFamily:theme.fonts.semiBold}}> Lista de Bloqueados</Text>
              <View
                style={{
                  width: "100%",
                  alignItems: "center",
                  justifyContent: "space-between",
                  borderRadius: 50,
                  flexDirection: "row",
                  padding: 15,
                  marginEnd: 10,
                  backgroundColor: theme.colors.grey,
                  borderRadius: 10,
                  marginStart: 10,
                }}
              >
                <Image
                  source={require("../../assets/img/PFP.png")}
                  style={{ width: 80, height: 80 }}
                />
                <View
                  style={{
                    width: 250,
                    height: 100,
                    justifyContent: "center",
                  }}
                >
                  <Text
                    style={{
                      fontSize: 18,
                      marginBottom: -15,
                      fontFamily: theme.fonts.semiBold,
                      textAlign: "center",
                    }}
                  >
                    Cameron Williamson
                  </Text>
                  <BtnSubmit
                    text={"Desbloquear"}
                    width={"80%"}
                    height={30}
                    color={theme.colors.secondary}
                  />
                {/*MODAL TEM CERTEZA QUE DEJA EXCLUIR SUA CONTA  */}
                <Modal animationType="fade" transparent visible={modalVisibleExcluir} >
                  <TouchableOpacity onPress={()=> {setModalVisibleExcluir(false)}} style={{flex:1, backgroundColor:"rgba(0, 0, 0, 0.4)",  alignItems:"center", justifyContent:"center"}}>
                    <View style={{height:"35%", width:"80%", backgroundColor:"#ECECEC", borderRadius:10, padding:5}}>
                    <Text style={{fontSize:23, textAlign:"center", fontFamily:theme.fonts.semiBold}}>Tem certeza que deseja excluir sua conta?</Text>
                    <TouchableOpacity style={{marginTop:50, alignSelf:"center", height:35, width:200, borderRadius:5, alignItems:"center", justifyContent:"center", backgroundColor:theme.colors.secondary}} onPress={()=>{ExcluirConta()}}>
                      <Text style={{fontSize:23, textAlign:"center", fontFamily:theme.fonts.semiBold}}>Sim</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{marginTop:10, alignSelf:"center", height:35, width:200, borderRadius:5, alignItems:"center", justifyContent:"center", backgroundColor:theme.colors.grey}} onPress={()=>{setModalVisibleExcluir(false)}}>
                      <Text style={{fontSize:23, textAlign:"center", fontFamily:theme.fonts.semiBold}}>Não</Text>
                    </TouchableOpacity>
                  </View>
                  </TouchableOpacity>
                </Modal>
                {/*MODAL TEM CERTEZA QUE DEJA EXCLUIR SUA CONTA  */}
                <Modal animationType="fade" transparent visible={modalVisibleAgradecimento} >
                  <TouchableOpacity onPress={()=> {setModalVisibleExcluir(false); setModalVisibleAgradecimento(false)}} style={{flex:1, backgroundColor:"rgba(0, 0, 0, 0.4)",  alignItems:"center", justifyContent:"center"}}>
                    <View style={{height:"60%", width:"80%", backgroundColor:"#ECECEC", borderRadius:10, padding:5}}>
                    <View style={{width:30, position:"absolute", right:10, top:10, zIndex:999}} >
                      <Icon
                        name="x" size={30} TouchableOpacity={()=>{setModalVisibleAgradecimento(false);setModalVisibleExcluir(false);}}
                      />
                    </View>
                    <Text style={{marginTop:25, fontSize:25, textAlign:"center", fontFamily:theme.fonts.medium}}>Foi bom ter você conosco,{"\n"} sentiremos sua falta!</Text>
                    <Image
                      source={require('../../assets/img/agradecimento.png')}
                      style={{marginTop:5, resizeMode:"contain", height:250}}
                    />
                  </View>
                  </TouchableOpacity>
                </Modal>
                </View>
              </View>
            </ScrollBorder>
          </InputContainer>
          <InputContainer>
          <CardContainer title={"Deseja excluir sua conta"}>
          <InputContainer>
          <View style={{alignItems:"center", justifyContent:"center", width:"100%"}}>
            <BtnSubmit
              text="Excluir"
              color={theme.colors.secondary}
              width="60%"
              height={45}
              icon={"alert-triangle"}
              onPress={()=>{setModalVisibleExcluir(true)}}
            />
            </View>
          </InputContainer>
        </CardContainer>
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
        marginLeft:"10%"
    }
})