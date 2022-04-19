import React, {useState} from 'react'
import { View, Text, ScrollView, SafeAreaView, Image, TouchableOpacity, StatusBar } from 'react-native'
import { styles } from './style'
import { Logo } from '../../components/Logo'
import { theme } from '../../global/styles/theme'
import InputUnderline from '../../components/inputCadastro'
import BtnLogin from '../../components/btnLogin/Login'
import { useNavigation } from "@react-navigation/native";

const image = require("../../assets/img/imgPrincipalLoginONG.png");
// const imgEye = require("../../assets/img/eye-off.png");

export default function LoginONG() {

  const [cnpj, setCnpj] = useState();
  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();
  const navigation = useNavigation();

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
            source={image}
          />
        </View>
        <Text style={styles.titulo}>Login</Text>
        <View style={styles.containerInput}>
          <InputUnderline
            placeholder="CNPJ"
            iconName="user"
            size={25}
            color={theme.colors.secondary}
            onChangeText={(text) => {
              setCnpj(text);
            }}
          />
          <Text style={styles.containerTxtOu}>Ou</Text>
          <View style={styles.containerInputEmail}>
            <InputUnderline
              placeholder="Email"
              iconName="mail"
              size={25}
              color={theme.colors.secondary}
              onChangeText={(text) => {
              setEmail(text);
            }}
            />
          </View>
          <InputUnderline 
            placeholder="Digite sua senha"
            iconName="unlock"
            size={25}
            color={theme.colors.secondary}
            onChangeText={(text) => {
              setSenha(text);
            }}
          />
          {/* <Image
            style={styles.containerIcon}
            source={imgEye}
          /> */}
          </View>
        <View style={styles.containerEsqueciSenha}>
          <TouchableOpacity onPress={() => {navigation.navigate("EsqueciSenha")}}>
              <Text style={styles.txtEsqueciSenha}>Esqueceu a senha?</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.containerBtnLogin}>
          <BtnLogin tipo="loginONG" email={email} senha={senha} cnpj={cnpj}  />
        </View>
        <View style={styles.containerCriarUmaConta}>
          <Text style={styles.txtNaoTemConta}>Não tem uma conta?</Text>
          <TouchableOpacity onPress={() => {console.log('Crie uma agora');}}>
            <Text style={styles.txtCriarUmaConta}>Crie uma agora</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
    // <View>
    //   <Text>oi</Text>
    // </View>
    
  );
}