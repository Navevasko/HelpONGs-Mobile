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

export default function ConfiguracoesGerais() {

    const [modalVisible, setModalVisible] = useState(false);

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