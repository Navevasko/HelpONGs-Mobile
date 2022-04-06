import React from 'react'
import { View, Text, ScrollView, SafeAreaView, Image, TouchableOpacity, StatusBar } from 'react-native'
import { styles } from './style'
import { Logo } from '../../components/Logo'
import { theme } from '../../global/styles/theme'
import InputUnderline from '../../components/inputCadastro'
import BtnLogin from '../../components/btnLogin/Login'

const image = require("../../assets/img/imgPrincipalLoginONG.png");
// const imgEye = require("../../assets/img/eye-off.png");

export default function LoginONG() {
  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        <StatusBar backgroundColor={'transparent'} barStyle={'dark-content'}/>
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
            fontSize={25}
            color={theme.colors.secondary}
          />
          <Text style={styles.containerTxtOu}>Ou</Text>
          <View style={styles.containerInputEmail}>
            <InputUnderline
              placeholder="Email"
              iconName="mail"
              fontSize={25}
              color={theme.colors.secondary}
            />
          </View>
          <InputUnderline 
            placeholder="Digite sua senha"
            iconName="unlock"
            fontSize={25}
            color={theme.colors.secondary}
          />
          {/* <Image
            style={styles.containerIcon}
            source={imgEye}
          /> */}
          </View>
        <View style={styles.containerEsqueciSenha}>
          <TouchableOpacity onPress={() => {console.log('Esqueci a senha');}}>
              <Text style={styles.txtEsqueciSenha}>Esqueceu a senha?</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.containerBtnLogin}>
          <BtnLogin/>
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