import { StyleSheet, Text, View, SafeAreaView,ScrollView,Button, Modal, TouchableOpacity, ImageBackground, ToastAndroid, } from 'react-native'
import React, {useState, useEffect} from 'react'
import CardContainer from "../../components/CardContainer";
import OptionsConfig from '../OptionsConfig';
import InputBorder from '../InputBorder';
import InputContainer from '../InputContainer';
import Icon from "react-native-vector-icons/Feather";
import { theme } from '../../global/styles/theme';
import ScrollBorder from '../ScrollBorder';
import { api } from '../../../api';
import ChipCategoria from '../ChipCategoria';
import BtnSubmit from '../BtnSubmit';
import { dateMask } from '../../utils/mask';
import SelectCategoria from '../SelectCategoria';

export default function InformacaoContaOng({idOng}) {

    const [modalVisible, setModalVisible] = useState(false);
    const [dataContatoOng, setdataContatoOng] = useState([]);
    const [dataCategoriasOng, setdataCategoriasOng] = useState([]);
    const [dataCategorias, setdataCategorias] = useState([]);
    const [open, setOpen] = useState(false)
    const [nome, setNome] = useState();
    const [descricao, setDescricao] = useState();
    const [historia, setHistoria] = useState();
    const [membros, setMembros] = useState("");
    const [fundacao, setFundacao] = useState(); 
    const [numeroDeSeguidores, setNumeroDeSeguidores] = useState(); 
    const [cnpj, setCNPJ] = useState();
    const [banner, setBanner] = useState();
    const [foto, setFoto] = useState();
    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();
    const [categorias, setCategorias] = useState();
    
    useEffect(async() =>{
        api.get(`/ong/${idOng}`).then((response) =>{
            setNome(response.data.data.nome);
            setDescricao(response.data.data.descricao);
            setHistoria(response.data.data.historia);
            setMembros(String(response.data.data.qtdDeMembros));
            setFundacao(String(response.data.data.dataDeFundacao));
            setNumeroDeSeguidores(response.data.data.numeroDeSeguidores);
            setCNPJ(response.data.data.cnpj);
            setBanner(response.data.data.banner);
            setFoto(response.data.data.foto);
          }).catch((error) => {
              console.log(error);
          })
        await api.get(`/category/${idOng}`).then((response) =>{
            if(response.data.data != null){
                setdataCategoriasOng(response.data.data);
            }
            
          }).catch((error) => {
            console.log("error categoria por id ong", error)
          })

          api.get(`/category`).then((response) => {
              setdataCategorias(response.data.data);
          }).catch((error) => {
              console.log("error categoria", error)
          })

        //   onSubmit();
    }, [])

    // const ResultCategorias = dataCategorias.filter((item) => {
    //     const comparar = item.idCategorias == dataCategoriasOng.idCategorias ? item : "porra"
    //     return comparar
    // })
    // console.log(ResultCategorias)

     
    const onSubmit = () =>{
        if(nome != null && descricao != null && historia != null && membros != null && fundacao != null && email != null && senha != null){
        api.put(`/ong/${idOng}`, {
            ong: {
                nome: nome,
                descricao: descricao,
                numeroDeSeguidores: numeroDeSeguidores,
                cnpj: cnpj,
                banner: banner,
                historia: historia,
                foto: foto,
                qtdDeMembros: Number(membros),
                dataDeFundacao: fundacao,
            },
            login: {
                email: email,
                senha: senha
            }
        }).then((response) =>{
            if (response.status == "200") {
                ToastAndroid.show("Dados salvos com sucesso!", ToastAndroid.SHORT);
              }
            
        }).catch((error) =>{
            console.log(error)
        })
    }else {
        ToastAndroid.show("Por favor preencha todos os campos!", ToastAndroid.SHORT);
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
            <Text style={styles.txtTitulo}>Informações da Conta</Text>
        </View>
        <ScrollView style={{paddingHorizontal:5}}>
        <InputContainer>
            <InputBorder
            title="Nome" 
            placeholder={"Digite seu nome"}
            color={"#FAFAFA"}
            borderColor={theme.colors.placeholder}
            txtColor={theme.colors.black}
            width={"100%"}
            value={nome}
            onChangeText={(text) =>{setNome(text)}}
            max={100}
            />

            <InputBorder
              title="Descrição"
              width={"100%"}
              keyboardType={"number-pad"}
              value={descricao}
              color={"#FAFAFA"}
              borderColor={theme.colors.placeholder}
              txtColor={theme.colors.black}
              placeholder={"Digite uma descrição"}
              onChangeText={(text) =>{setDescricao(text)}}
            />

            <InputBorder 
                title="História" 
                style={{flexDirection:"column"}} 
                width={"100%"} 
                height={200} 
                color={"#FAFAFA"} 
                placeholder={"Digite a história da sua ONG"}
                borderColor={theme.colors.placeholder}
                txtColor={theme.colors.black}
                multiline={true}
                value={historia}
                onChangeText={(text) =>{setHistoria(text)}}
            />
            
            <InputBorder 
                title="Membros" 
                color={"#FAFAFA"} 
                keyboardType={"number-pad"} 
                value={membros}
                txtColor={theme.colors.black}
                borderColor={theme.colors.placeholder}
                placeholder={"quantidade"}
                onChangeText={(text) =>{setMembros(text)}}
            />
            
                <InputBorder
                    title='Data de fundação'
                    placeholder="Data"
                    keyboardType={"number-pad"}
                    color={"#FAFAFA"}
                    width={"50%"}
                    max={10}
                    value={fundacao}
                    txtColor={theme.colors.black}
                    borderColor={theme.colors.placeholder}
                    onChangeText={(text) => {
                    setFundacao(text);
                    }}
                />

            <CardContainer title={"Dados de Login"}>
            <InputContainer flexDirection={"column"}>
                <InputBorder 
                title="E-mal" 
                color={"#FAFAFA"}
                borderColor={theme.colors.placeholder}
                txtColor={theme.colors.black}
                width={"100%"}
                placeholder={"Informe seu E-mail"}
                onChangeText={(text) => setEmail(text)}
                value={email}
                />
                <InputBorder 
                title="Senha" 
                color={"#FAFAFA"}
                borderColor={theme.colors.placeholder}
                txtColor={theme.colors.black}
                width={"100%"}
                placeholder={"Informe sua Senha"}
                onChangeText={(text) => setSenha(text)}
                value={senha}
                />
                </InputContainer>
            </CardContainer>
            
          </InputContainer>
          <CardContainer title={"Editar Categorias"}>
            <InputContainer flexDirection={"column"}>
            <SelectCategoria options={dataCategorias} onChangeSelect={(idCategorias) => {console.log(idCategorias)}}/>
                <ScrollBorder>
                {
               
                dataCategoriasOng.map((item) =>{

                    return(
                    <ChipCategoria text={item.tbl_categorias.nome} key={item.idCategorias} />
                    );
                })
                }
                </ScrollBorder>
            </InputContainer>
            </CardContainer>
            <View style={{flexDirection:'row', justifyContent:'space-around', marginBottom:20}}>
                <BtnSubmit
                    text="Atualizar"
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
        marginLeft:"15%"
    },
    dateComponente:{
        width:200,
        height:41,
        backgroundColor:"#FAFAFA",
        marginTop:27
    }
})