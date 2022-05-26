import { StyleSheet, Text, View, Modal, ImageBackground, ScrollView, TouchableOpacity, ToastAndroid } from 'react-native'
import React, {useState, useEffect} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import OptionsConfig from '../OptionsConfig';
import Icon from "react-native-vector-icons/Feather";
import { theme } from '../../global/styles/theme';
import InputBorder from '../InputBorder';
import InputContainer from '../InputContainer';
import BtnSubmit from '../BtnSubmit';
import { api } from '../../../api';

export default function InformacaoContatoOng() {

    const [modalVisible, setModalVisible] = useState(false);
    const [email, setEmail] = useState();
    const [celular, setCelular] = useState();
    const [telefone, setTelefone] = useState();
    const idLogin = 3;
    const [btnTxt, setBtnTxt] = useState("Salvar");
 
    useEffect(() =>{
        api.get(`/contact/${idLogin}`).then((response) =>{
            
            if(response.data.data != null ){
                setBtnTxt("Atualizar")
            }
            setCelular(response.data.data.numero);
            setTelefone(response.data.data.telefone);
        }).catch((error) => {
            console.log(error);
        })
    }, [])
    

    const onSubmit = () => {
        if(celular != null || telefone != null){
            if(btnTxt == "Salvar"){
            api.post(`/contact`, {
                idLogin: idLogin,
                numero: celular,
                telefone: telefone
            }).then((response) =>{
                ToastAndroid.show("Cadastro realizado com sucesso!", ToastAndroid.SHORT);
            }).catch((error) => {
                console.log(error);
            })
        }else if(btnTxt == "Atualizar"){
            api.put(`/contact/${idLogin}`, {
                idLogin: idLogin,
                numero: celular,
                telefone: telefone
            }).then((response) =>{
                ToastAndroid.show("Cadastro Atualizado com sucesso!", ToastAndroid.SHORT);
            }).catch((error) => {
                console.log(error);
            })
        }
    }else{
        ToastAndroid.show("Campo obrigatorio não preenchido!", ToastAndroid.SHORT);
    }
    }

  return (
    <SafeAreaView>
    <TouchableOpacity style={styles.containerPress} onPress={() => setModalVisible(true)}>
        <OptionsConfig txt={"Informações de Contato"} visibleModal={setModalVisible}/>
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
            <Text style={styles.txtTitulo}>Informações de Contato</Text>
        </View>
        <ScrollView style={{paddingTop:20, paddingHorizontal:10}}>
          <InputContainer>
            <InputBorder 
            title="Celular" 
            color={"#FAFAFA"}
            borderColor={theme.colors.placeholder}
            txtColor={theme.colors.black}
            width={"100%"}
            placeholder={"Informe seu número de celular"}
            onChangeText={(text) => setCelular(text)}
            value={celular}
            />

            <InputBorder
             title="Telefone" 
             color={"#FAFAFA"}
             borderColor={theme.colors.placeholder}
             txtColor={theme.colors.black}
             width={"100%"}
             value={telefone}
             placeholder={"Informe seu número de telefone"}
            onChangeText={(text) => setTelefone (text)}
             />

          </InputContainer>
          <View style={{flexDirection:'row', justifyContent:'space-around', marginBottom:20}}>
                <BtnSubmit
                    text={btnTxt}
                    color={theme.colors.primaryFaded}
                    width="45%"
                    height={45}
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