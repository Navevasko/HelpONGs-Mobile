import { StyleSheet, Text, View, Modal, ImageBackground, ScrollView, TouchableOpacity, ToastAndroid, RefreshControl } from 'react-native'
import React, {useState, useEffect} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import OptionsConfig from '../OptionsConfig';
import Icon from "react-native-vector-icons/Feather";
import { theme } from '../../global/styles/theme';
import InputBorder from '../InputBorder';
import InputContainer from '../InputContainer';
import { api } from '../../../api';
import BtnSubmit from '../BtnSubmit';
import APICEP from "../../../api/Controllers/cepController";

export default function InformacaoEndrerecoOng({idLogin}) {

    const [modalVisible, setModalVisible] = useState(false);
    const [dataEnderecoOng, setdataEnderecoOng] = useState([]);
    const [cep, setCep] = useState();
    const [estado, setEstado] = useState();
    const [cidade, setCidade] = useState();
    const [bairro, setBairro] = useState();
    const [rua, setRua] = useState();
    const [numero, setNumero] = useState();
    const [complemento, setComplemento] = useState();
    const [btnTxt, setBtnTxt] = useState("Salvar");
    const [atualizar, setAtualizar] = useState(false);

    useEffect(async()=>{
       await Recarregar();
    },[])

    function Recarregar(){
        api.get(`/adress/${idLogin}`).then((response) =>{
            if(response.data.data.cep  != null){
                setBtnTxt("Atualizar");
                setdataEnderecoOng(response.data.data);
                setCep(response.data.data.cep);
                setEstado(response.data.data.estado);
                setCidade(response.data.data.municipio);
                setBairro(response.data.data.bairro);
                setRua(response.data.data.rua);
                setNumero(String(response.data.data.numero));
                setComplemento(response.data.data.complemento)
            }else {
                console.log("oi",response.data.data.cep )
            }
          }).catch((error) =>{
            console.log("erro via cep", error)
        })
    }

    function aoAtualizar(){
        setAtualizar(true);
        Recarregar();
        setAtualizar(false);
      }

    const handleAPICEP = async (cep) => {
        if (cep != "") {
          let response = await APICEP.get(cep);
    
          setBairro(response.bairro);
          setCep(response.cep);
          setComplemento(response.complemento);
          setCidade(response.localidade);
          setRua(response.logradouro);
          setEstado(response.uf);
    
          console.log(response);
        }
      };

    const btnSalvar = () =>{
      
        if(cep != null && bairro != null && numero != null && rua != null && estado != null){

            if(btnTxt == "Salvar"){

            api.post(`/adress`,{
                idLogin: idLogin,
                cep: cep,
                bairro: bairro,
                numero: numero,
                rua: rua,
                municipio: cidade,
                estado: estado,
                complemento: complemento
            }).then((response) =>{
                ToastAndroid.show("Cadastro realizado com sucesso!", ToastAndroid.SHORT);
            }).catch((error) =>{
                console.log(error)
            })

            }else{
                console.log("bob")
                api.put(`/adress/${idLogin}`,{
                    cep: cep,
                    bairro: bairro,
                    numero: numero,
                    rua: rua,
                    municipio: cidade,
                    estado: estado,
                    complemento: complemento
                }).then((response) =>{
                    ToastAndroid.show("Cadastro atualizado com sucesso!", ToastAndroid.SHORT);
                }).catch((error) =>{
                    console.log("Atualizar",error, cep, numero, rua, cidade, estado, complemento)
                })
            }
        }else{
            ToastAndroid.show("Por favor informe todos os dados!", ToastAndroid.SHORT);
        }

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
        <ScrollView refreshControl={<RefreshControl
                        refreshing={atualizar}
                        onRefresh={aoAtualizar}
                    />}
                    style={{paddingTop:10}}
        >
          <InputContainer>
            <InputBorder 
            title="CEP" 
            keyboardType={"number-pad"} 
            value={cep}
            color={"#FAFAFA"}
            borderColor={theme.colors.placeholder}
            txtColor={theme.colors.black}
            width={"100%"}
            placeholder={"Informe o número do seu cep"}
            onChangeText={(text) => setCep(text)}
            onEndEditing={() => {
              handleAPICEP(cep);
            }}
            />

            <InputBorder 
            title="Estado" 
            value={estado}
            color={"#FAFAFA"}
            borderColor={theme.colors.placeholder}
            txtColor={theme.colors.black}
            width={"100%"}
            placeholder={"Informe o seu bairro"}
            onChangeText={(text) => setEstado(text)}
            />

            <InputBorder
             title="Cidade" 
             value={cidade} 
             color={"#FAFAFA"}
            borderColor={theme.colors.placeholder}
            txtColor={theme.colors.black}
            width={"100%"}
            placeholder={"Informe sua cidade"}
            onChangeText={(text) => setCidade(text)}
             />

            <InputBorder 
            title="Bairro" 
            value={bairro} 
            color={"#FAFAFA"}
            borderColor={theme.colors.placeholder}
            txtColor={theme.colors.black}
            width={"100%"}
            placeholder={"Informe seu bairro"}
            onChangeText={(text) => setBairro(text)}
            />

            <InputBorder 
            title="Rua" 
            value={rua} 
            color={"#FAFAFA"}
            borderColor={theme.colors.placeholder}
            txtColor={theme.colors.black} 
            placeholder={"Informe sua rua"}
            onChangeText={(text) => setRua(text)}
            />

            <InputBorder 
            title="Número"  
            value={numero}
            color={"#FAFAFA"}
            borderColor={theme.colors.placeholder}
            txtColor={theme.colors.black}
            placeholder={"número"}
            onChangeText={(text) => setNumero(text)}
            />

            <InputBorder
              title="Complemento"
              width={"100%"} 
              value={complemento}
              color={"#FAFAFA"}
              borderColor={theme.colors.placeholder}
              txtColor={theme.colors.black}
              placeholder={"Insira o complemento"}
              onChangeText={(text) => setComplemento(text)}
              />
          </InputContainer>
          <View style={{flexDirection:'row', justifyContent:'space-around', marginBottom:20}}>
                <BtnSubmit
                    text={btnTxt}
                    color={theme.colors.primaryFaded}
                    width="35%"
                    height={40}
                    onPress={() => {
                        btnSalvar();
                    }}
                    />
                <BtnSubmit
                    text="Cancelar"
                    color={theme.colors.grey}
                    width="35%"
                    height={40}
                    onPress={() =>{setModalVisible(false)}
                    }
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