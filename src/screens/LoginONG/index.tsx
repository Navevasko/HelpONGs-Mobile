import React from 'react'
import { View, Text, ScrollView, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import { styles } from './style'
import { Logo } from '../../components/Logo'
import { theme } from '../../global/styles/theme'
import SignUpInput from '../../components/inputCadastro'
import BtnLogin from '../../components/btnLogin/Login'

const image = require("../../assets/img/imgPrincipalLoginONG.png");

export default function LoginONG() {
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
          <SignUpInput
            placeholder="CNPJ"
            iconName="person-outline"
            fontSize={45}
            color={theme.colors.secondary}
          />
          <Text style={styles.containerTxtOu}>Ou</Text>
          <View style={styles.containerInputEmail}>
            <SignUpInput
              placeholder="Email"
              iconName="person-outline"
              fontSize={45}
              color={theme.colors.secondary}
            />
          </View>
          <SignUpInput 
            placeholder="Digite sua senha"
            iconName="person-outline"
            fontSize={45}
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