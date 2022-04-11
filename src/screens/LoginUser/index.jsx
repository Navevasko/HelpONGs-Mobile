import React from 'react'
import { View, Text, ScrollView, SafeAreaView, Image, TextInput,TouchableOpacity } from 'react-native'
import { styles } from './style'
import { Logo } from '../../components/Logo'
import { theme } from '../../global/styles/theme'
import SignUpInput from '../../components/inputCadastro'
import BtnLogin from '../../components/btnLogin/Login'
import InputUnderline from '../../components/inputCadastro'

const image = require("../../assets/img/imgPrincipalLoginV.png");
const imgGoogle = require("../../assets/img/iconGoogle.png");

export default function LoginUser() {
  return (
    <SafeAreaView>
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
            placeholder="Email"
            iconName="mail"
            fontSize={25}
            color={theme.colors.secondary}
          />
          <InputUnderline
            placeholder="Digite sua senha"
            iconName="unlock"
            fontSize={25}
            color={theme.colors.secondary}
          />
          </View>
        <View style={styles.containerEsqueciSenha}>
          <TouchableOpacity onPress={() => {console.log('Esqueci a senha');}}>
              <Text style={styles.txtEsqueciSenha}>Esqueceu a senha?</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.containerBtnLogin}>
          <BtnLogin/>
        </View>
        <View style={styles.containerLinha}>
          <View style={styles.linha}></View>
          <Text style={styles.txtMudarDeOpcao}>Ou</Text>
          <Text style={styles.linha}></Text>
        </View>
        <TouchableOpacity onPress={() => {console.log('Login google');}}>
          <Image
            style={styles.imgIconeGoogle}
            source={imgGoogle}
          />
        </TouchableOpacity>
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