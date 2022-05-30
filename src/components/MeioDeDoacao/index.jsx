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

export default function MeioDeDoacao() {

    const [modalVisible, setModalVisible] = useState(false);
    const [site, setSite] = useState();
    const [pix, setPix] = useState();
    const [agencia, setAgencia] = useState();
    const [conta, setConta] = useState();
    const [tipo, setTipo] = useState();
    const [banco, setBanco] = useState();
    const [btnTxt, setBtnTxt] = useState("Salvar");
    const idOng = 1;
    const [dataMeiosDeDoacao, setdataMeiosDeDoacao] = useState([]);
    

    useEffect(() =>{

        api.get(`/donation-data/${idOng}`).then((response) =>{
            setSite(response.data.data.site);
            setPix(response.data.data.pix);

            if(response.data.data != null ){
                setBtnTxt("Atualizar")
            }
            
        }).catch((error) => {
            console.log(error);
        })

        api.get(`/bank-data/${idOng}`).then((response) => {
            if(response.data.data != null){
            setBtnTxt("Atualizar")    
            setAgencia(response.data.data.agencia);
            setBanco(response.data.data.banco);
            setConta(response.data.data.conta);
            setTipo(response.data.data.tipo);
        }

        }).catch((error) => {
            console.log("dados bancarios",error);
        })


    }, [])

    const onSubmit = () => {
        if(banco != null && agencia != null && conta != null && tipo != null && site != null && pix != null){

        if(btnTxt == "Salvar"){
            
            api.post(`bank-data`,  
            {
                banco: banco,
                agencia: agencia,
                conta: conta,
                tipo : tipo,
                idOng: idOng
            }).then((response) => {
                console.log(response);
            }).catch((error) => {
                console.log(error);
            })

            api.post(`donation-data`,{
                idOng: idOng,
                site: site,
                pix: pix
            }).then((response) => {
                ToastAndroid.show("Cadastro realizado com sucesso!", ToastAndroid.SHORT);
            }).catch((error) => {
                console.log(error);
            })
        }else if(btnTxt == "Atualizar"){

            api.put(`donation-data/${idOng}`,{
                site: site,
                pix: pix
            }).then((response) => {
                console.log("donation data put ",response);
            }).catch((error) => {
                console.log(error);
            })

            api.put(`donation-data/${idOng}`, {
                banco: banco,
                agencia: agencia,
                conta: conta,
                tipo : tipo
            }).then((response) => {
                ToastAndroid.show("Cadastro atualizado com sucesso!", ToastAndroid.SHORT);
            }).catch((error) => {
                console.log(error);
            })

            
        }
    }else{
        ToastAndroid.show("Por favor cadastre todos os dados!", ToastAndroid.SHORT);
    }
    }

  return (
    <SafeAreaView>
    <TouchableOpacity style={styles.containerPress} onPress={() => setModalVisible(true)}>
        <OptionsConfig txt={"Meios de Doação"} visibleModal={setModalVisible}/>
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
            <Text style={styles.txtTitulo}>Meios de Doação</Text>
        </View>
        <ScrollView stylle={{paddingTop:10}}>
          <InputContainer>
            <InputBorder 
            title="Site" 
            color={"#FAFAFA"}
            borderColor={theme.colors.placeholder}
            txtColor={theme.colors.black}
            width={"100%"}
            value={site}
            placeholder={"Informe seu site"}
            onChangeText={(text) => setSite(text)}
            />

            <InputBorder 
            title="Pix" 
            color={"#FAFAFA"}
            borderColor={theme.colors.placeholder}
            txtColor={theme.colors.black}
            width={"100%"}
            placeholder={"Informe seu pix"}
            onChangeText={(text) => setPix(text)}
            value={pix}
            />

            <InputBorder
             title="Agência" 
             color={"#FAFAFA"}
             borderColor={theme.colors.placeholder}
             txtColor={theme.colors.black}
             placeholder={"Agência"}
             multiline={false}
            onChangeText={(text) => setAgencia(text)}
            value={agencia}
             />

            <InputBorder 
            title="Conta"
            color={"#FAFAFA"}
            borderColor={theme.colors.placeholder}
            txtColor={theme.colors.black}
            placeholder={"Conta"}
            onChangeText={(text) => setConta(text)} 
            value={conta}
            />

            <InputBorder
             title="Tipo"
             color={"#FAFAFA"}
             borderColor={theme.colors.placeholder}
             txtColor={theme.colors.black}
             placeholder={"Tipo da conta"}
            onChangeText={(text) => setTipo(text)}
            value={tipo} />

            <InputBorder
             title="Banco"
             color={"#FAFAFA"}
             borderColor={theme.colors.placeholder}
             txtColor={theme.colors.black}
             placeholder={"Banco"}
             onChangeText={(text) => setBanco(text)}
             value={banco}
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