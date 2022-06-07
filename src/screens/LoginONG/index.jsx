import React, {useState, useEffect} from 'react'
import { View, Text, ScrollView, SafeAreaView, Image, TouchableOpacity, StatusBar } from 'react-native'
import { styles } from './style'
import Logo from '../../components/Logo'
import { theme } from '../../global/styles/theme'
import InputUnderline from '../../components/InputUnderline'
import InputUnderlinePassword from '../../components/InputUnderlinePassword'
import BtnLogin from '../../components/btnLogin'
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function LoginONG() {
  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();
  const navigation = useNavigation();

  useEffect(() => {
    AsyncStorage.getItem("UserLogin").then((data) => {
      const dataArray = JSON.parse(data)
      if(dataArray.data.idUsuario){
        navigation.navigate("PerfilUsuario", {id: dataArray.data.idUsuario})
      }
      else if(dataArray.data.idONG) {
        navigation.navigate("PerfilONG", {id: dataArray.data.idONG})
      }
    }).catch((error) => {
      console.log("Erro AsyncStorage ", error);
    })

  }, [])
  

  return (
    <SafeAreaView>
    <StatusBar backgroundColor={'transparent'} barStyle={'dark-content'}/>
      <ScrollView style={styles.container}>
        <View style={styles.containerLogo}>
          <Logo/>
        </View>
        <View style={styles.containerImgPrincipal}>
          <Image
            style={{height:"100%", width:"100%", resizeMode:"contain",}}
            source={require("../../assets/img/imgPrincipalLoginONG.png")}
          />
        </View>
        <Text style={styles.titulo}>Login</Text>
        <View style={styles.containerInput}>
          <View style={styles.containerInputEmail}>
            <InputUnderline
              placeholder="Email"
              iconName="mail"
              size={25}
              color={theme.colors.secondary}
              onChangeText={(text) => {
              setEmail(text);
            }}
            keyboardType={"email-address"}
            />
          </View>
          <InputUnderlinePassword
            iconName={"lock"}
            color={theme.colors.secondary}
            size={25}
            placeholder={"Digite sua Senha"}
            isPassword={true}
            onChangeText={(text) => {
              setSenha(text);
            }}
          />
          </View>
        <View style={styles.containerEsqueciSenha}>
          <TouchableOpacity onPress={() => {navigation.navigate("EsqueciSenha")}}>
              <Text style={styles.txtEsqueciSenha}>Esqueceu a senha?</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.containerBtnLogin}>
          <BtnLogin tipo="loginONG" email={email} senha={senha} />
        </View>
        <View style={styles.containerCriarUmaConta}>
          <Text style={styles.txtNaoTemConta}>Não tem uma conta?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("CadastroONG")}>
            <Text style={styles.txtCriarUmaConta}>Crie uma agora</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
