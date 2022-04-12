import {
  Text,
  Image,
  TouchableHighlight,
  View,
  ScrollView,
  StatusBar,
  ToastAndroid,
} from "react-native";
import { useState } from "react";
import React from "react";
import Logo from "../../components/Logo";
import { styles } from "./style";
const imgPrincipal = require("../../assets/img/imgPrincipalCadastroONG.png");
import { theme } from "../../global/styles/theme";
import BtnSubmit from "../../components/Cadastrar";
import InputUnderline from "../../components/InputUnderline";
import InputUnderlinePassword from "../../components/InputUnderlinePassword";
import { cnpjMask } from "../../utils/mask";

// import axios from "axios";
// const baseURL = "http://localhost:3131";

// axios ({
//   method: 'post',
//   url: `${baseURL}/ong/pre-register `,
// }).then((response) => {
//   console.log(response.data)
// })

export default function CadastroONG() {
  /* Criando as constantes dos dados */

  const [CNPJ, setCNPJ] = useState("");
  const [Email, setEmail] = useState("");
  const [Senha, setSenha] = useState("");
  const [ConfirmSenha, setConfirmSenha] = useState("");

  /* Criando a função para validar os dados */
  const validate = (StringCNPJ, Email, Senha, ConfirmSenha) => {
    if (StringCNPJ != "" && Email != "" && Senha != "" && ConfirmSenha != "") {
      /* Transformando o StringCNPJ em número */
      StringCNPJ =
        StringCNPJ.substring(0, 2) +
        StringCNPJ.substring(3, 6) +
        StringCNPJ.substring(7, 10) +
        StringCNPJ.substring(11, 15) +
        StringCNPJ.substring(15, 17);
      const CNPJ = parseInt(StringCNPJ);
      if(Email.includes('@')) {
        ToastAndroid.show("TESTEA", ToastAndroid.SHORT);
      }
      else{
        ToastAndroid.show('TESTE', ToastAndroid.SHORT)
      }
    } else {
      ToastAndroid.show("Preencha todos os campos", ToastAndroid.SHORT);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <StatusBar backgroundColor={"transparent"} barStyle={"dark-content"} />

      <View style={styles.containerLogo}>
        <Logo />
      </View>
      <View style={styles.containerImage}>
        <Image source={imgPrincipal} style={styles.image} />
      </View>

      <Text style={styles.title}> Cadastro </Text>

      <InputUnderline
        iconName={"user"}
        color={theme.colors.secondary}
        size={30}
        placeholder={"Digite seu CNPJ"}
        value={cnpjMask(CNPJ)}
        onChangeText={(text) => {
          setCNPJ(text);
        }}
        keyboardType={"number-pad"}
        max={18}
      />

      <InputUnderline
        iconName={"mail"}
        color={theme.colors.secondary}
        size={30}
        placeholder={"Digite seu E-mail"}
        onChangeText={(text) => {
          setEmail(text);
        }}
        keyboardType={"email-address"}
      />

      <InputUnderlinePassword
        iconName={"lock"}
        color={theme.colors.secondary}
        size={30}
        placeholder={"Digite sua Senha"}
        isPassword={true}
        onChangeText={(text) => {
          setSenha(text);
        }}
      />

      <InputUnderlinePassword
        iconName={"lock"}
        color={theme.colors.secondary}
        size={30}
        placeholder={"Confirme sua Senha"}
        isPassword={true}
        onChangeText={(text) => {
          setConfirmSenha(text);
        }}
      />

      <BtnSubmit
        text={"Cadastrar"}
        onPress={() => {
          validate(CNPJ, Email, Senha, ConfirmSenha);
        }}
      />

      <Text style={styles.terms}>
        Ao clicar em Cadastre-se, você concorda com nossos
        <Text
          style={{
            color: theme.colors.primary,
            fontFamily: theme.fonts.semiBold,
          }}
        >
          Termos, Política de Dados e Política de Cookies.
        </Text>
        Você poderá receber notificações por SMS e cancelar isso quando quiser.
      </Text>

      <TouchableHighlight style={styles.signUp}>
        <Text
          style={{
            textAlign: "center",
            fontSize: 18,
            fontFamily: theme.fonts.light,
          }}
        >
          Já tem uma conta? Faça
          <Text
            style={{
              color: theme.colors.primary,
              fontFamily: theme.fonts.bold,
            }}
          >
            {" "}
            Login
          </Text>
        </Text>
      </TouchableHighlight>
    </ScrollView>
  );
}
