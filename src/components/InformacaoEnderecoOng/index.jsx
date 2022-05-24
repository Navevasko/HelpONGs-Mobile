import { StyleSheet, Text, View, Modal, ImageBackground, ScrollView, TouchableOpacity } from 'react-native'
import React, {useState, useEffect} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import OptionsConfig from '../OptionsConfig';
import Icon from "react-native-vector-icons/Feather";
import { theme } from '../../global/styles/theme';
import InputBorder from '../InputBorder';
import InputContainer from '../InputContainer';
import { api } from '../../../api';
import BtnSubmit from '../BtnSubmit';

export default function InformacaoEndrerecoOng() {

    const [modalVisible, setModalVisible] = useState(false);
    const [idLogin, setidLogin] = useState(1);
    const [dataEnderecoOng, setdataEnderecoOng] = useState([]);
    const [cep, setCep] = useState();
    const [estado, setEstado] = useState();
    const [cidade, setCidade] = useState();
    const [bairro, setBairro] = useState();
    const [rua, setRua] = useState();
    const [numero, setNumero] = useState();
    const [complemento, setComplemento] = useState();

    useEffect(()=>{
        api.get(`/adress/${idLogin}`).then((response) =>{
            setdataEnderecoOng(response.data.data);
          })
    },[])

    const onSubmit = () =>{

    }

  return (
    <SafeAreaView>
    <TouchableOpacity style={styles.containerPress} onPress={() => setModalVisible(true)}>
        <OptionsConfig txt={"Informações de Endereço"} visibleModal={setModalVisible}/>
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
            <Text style={styles.txtTitulo}>Informações de Endereço</Text>
        </View>
        <ScrollView style={{paddingTop:10}}>
          <InputContainer>
            <InputBorder 
            title="CEP" 
            keyboardType={"number-pad"} 
            value={dataEnderecoOng.cep}
            color={"#FAFAFA"}
            borderColor={theme.colors.placeholder}
            txtColor={theme.colors.black}
            width={"100%"}
            onChangeText={(text) => setCep(text)}
            />

            <InputBorder 
            title="Estado" 
            value={dataEnderecoOng.estado}
            color={"#FAFAFA"}
            borderColor={theme.colors.placeholder}
            txtColor={theme.colors.black}
            width={"100%"}
            />

            <InputBorder
             title="Cidade" 
             value={dataEnderecoOng.municipio} 
             color={"#FAFAFA"}
            borderColor={theme.colors.placeholder}
            txtColor={theme.colors.black}
            width={"100%"}
             />

            <InputBorder 
            title="Bairro" 
            value={dataEnderecoOng.bairro} 
            color={"#FAFAFA"}
            borderColor={theme.colors.placeholder}
            txtColor={theme.colors.black}
            width={"100%"}
            />

            <InputBorder 
            title="Rua" 
            value={dataEnderecoOng.rua} 
            color={"#FAFAFA"}
            borderColor={theme.colors.placeholder}
            txtColor={theme.colors.black} 
            />

            <InputBorder 
            title="Número"  
            // value={dataEnderecoOng.numero}
            value={dataEnderecoOng.numero}
            color={"#FAFAFA"}
            borderColor={theme.colors.placeholder}
            txtColor={theme.colors.black}
            />

            <InputBorder
              title="Complemento"
              width={"100%"} 
              value={dataEnderecoOng.complemento}
              color={"#FAFAFA"}
              borderColor={theme.colors.placeholder}
              txtColor={theme.colors.black}
              />
          </InputContainer>
          <View style={{flexDirection:'row', justifyContent:'space-around', marginBottom:20}}>
                <BtnSubmit
                    text="Salvar"
                    color={theme.colors.primaryFaded}
                    width="35%"
                    height={40}
                    onPress={() => {
                        onSubmit();
                    }}
                    />
                <BtnSubmit
                    text="Cancelar"
                    color={theme.colors.grey}
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
        marginLeft:"10%"
    }
})