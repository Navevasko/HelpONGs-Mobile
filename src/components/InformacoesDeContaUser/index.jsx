import { StyleSheet, Text, View, Modal, ImageBackground, ScrollView,ToastAndroid, TouchableOpacity, RefreshControl } from 'react-native'
import React, {useState, useEffect} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import OptionsConfig from '../OptionsConfig';
import Icon from "react-native-vector-icons/Feather";
import { theme } from '../../global/styles/theme';
import InputBorder from '../InputBorder';
import InputContainer from '../InputContainer';
import BtnConfig from '../BtnConfig';
import { api } from '../../../api';

export default function InformacoesDeContaUser( {idLogin, idUser}) {

    const [modalVisible, setModalVisible] = useState(false);
    const [nome, setNome] = useState();
    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();
    const [dataDeNascimento, setDataDeNascimento] = useState();
    const [celular, setCelular] = useState();
    const [telefone, setTelefone] = useState();
    const [btnTxt, setBtnTxt] = useState("Salvar");
    const [dadosUsuario, setDadosUsuario] = useState();
    const [atualizar, setAtualizar] = useState(false);

    useEffect(async() => {

        await Recarregar();
        // BtnSubmit();
    }, []);

    function Recarregar(){
        api
        .get(`/user/${idUser}`)
        .then(({data}) => {
          setNome(data.data.nome);
          setEmail(data.data.email);
          setDadosUsuario(data.data);
          setSenha(data.data.tbl_login.senha);
          setEmail(data.data.tbl_login.email);
          setDataDeNascimento(data.data.dataDeNascimento);

          if(celular == null || telefone == null){
            setBtnTxt("Salvar");
            }else{
                setBtnTxt("Atualizar");
            }
        })
        .catch((error) => {
          console.log("errro get usuario",error);
        });

        api.get(`/contact/${idLogin}`).then(({data}) => {
            setCelular(data.data.numero);
            setTelefone(data.data.telefone);
        }).catch((error) => {
            console.log("erro ao pegar dados de contato de usúario", error);
        })
    }

    function aoAtualizar(){
        setAtualizar(true);
        Recarregar();
        setAtualizar(false);
      }

    // FUNÇÃO PARA ATUALIZAR DADOS DO USUÁRIO
    const onSubmit = () =>{
      
        if(nome != null){
            api.put(`/user/${idUser}`,{
                usuario: {
                    nome: nome,
                    banner: dadosUsuario.banner,
                    curriculo: dadosUsuario.curriculo,
                    foto: dadosUsuario.foto,
                    dataDeNascimento: dataDeNascimento
                },
                login: {
                    email: email,
                    senha: senha
                }
            }).then((response) => {
                console.log(response);
            }).catch((error) => {
                console.log("error de atualização de dados de usúario")
            });

            if(btnTxt == "Salvar"){
                //CADASTRO DE DADOS DE CONTATO DO USÚARIO
                api.post(`/contact`, {
                    idLogin: idLogin,
                    numero: celular,
                    telefone: telefone
                }).then((response) =>{
                    ToastAndroid.show("Cadastro realizado com sucesso!", ToastAndroid.SHORT);
                }).catch((error) => {
                    console.log("erro ao dalvar contato de usuario",error);
                })
            }else if(btnTxt == "Atualizar"){
                //ATUALIZAÇÃO DE DADOS DE CONTATO DO USÚARIO
                api.put(`/contact`, {
                    idLogin: idLogin,
                    numero: celular,
                    telefone: telefone
                }).then((response) =>{
                    ToastAndroid.show(response.message, ToastAndroid.SHORT);
                }).catch((error) => {
                    console.log("erro de atualizar contato de usuario",error);
                })
            }

           

        }else{
            ToastAndroid.show("Por favor informe todos os dados!", ToastAndroid.SHORT);
        }
    }

  return (
    <SafeAreaView>
    <TouchableOpacity style={styles.containerPress} onPress={() => setModalVisible(true)}>
        <OptionsConfig txt={"Informações de Conta"} visibleModal={setModalVisible}/>
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
            <Text style={styles.txtTitulo}>Informações de Conta</Text>
        </View>
        <ScrollView refreshControl={<RefreshControl
                    refreshing={atualizar}
                    onRefresh={aoAtualizar}
                />}
           style={{paddingTop:20, paddingHorizontal:10}}>
          <InputContainer>

            <InputBorder 
            title="Nome" 
            color={"#FAFAFA"}
            borderColor={theme.colors.placeholder}
            txtColor={theme.colors.black}
            width={"100%"}
            value={nome}
            placeholder={"Digite seu nome"}
            onChangeText={(text) =>{setNome(text)}}
            />

            <InputBorder 
            title="E-mal" 
            color={"#FAFAFA"}
            borderColor={theme.colors.placeholder}
            txtColor={theme.colors.black}
            width={"100%"}
            value={email}
            placeholder={"Digite seu e-mail"}
            onChangeText={(text) =>{setEmail(text)}}
            />

            <InputBorder 
            title="Confirmar E-mal" 
            color={"#FAFAFA"}
            borderColor={theme.colors.placeholder}
            txtColor={theme.colors.black}
            width={"100%"}
            value={email}
            placeholder={"Confirme seu e-mail"}
            onChangeText={(text) =>{setEmail(text)}}
            />

            <InputBorder 
            title="Celular" 
            color={"#FAFAFA"}
            borderColor={theme.colors.placeholder}
            txtColor={theme.colors.black}
            width={"100%"}
            value={celular}
            placeholder={"Digite o numero do seu celular"}
            onChangeText={(text) =>{setCelular(text)}}
            />

            <InputBorder
             title="Telefone" 
             color={"#FAFAFA"}
             borderColor={theme.colors.placeholder}
             txtColor={theme.colors.black}
             width={"100%"}
             value={telefone}
            placeholder={"Digite seu número de telefone"}
            onChangeText={(text) =>{setTelefone(text)}}
             />

          </InputContainer>
          <View style={{flexDirection:'row', justifyContent:'space-around', marginBottom:20}}>
                <BtnConfig
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