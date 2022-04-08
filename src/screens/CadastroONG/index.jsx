import {
  Text,
  Image,
  TouchableHighlight,
  View,
  ScrollView,
  StatusBar
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

export default function CadastroONG() {
  const [CNPJ, setCNPJ] = useState("");
  const [Email, setEmail] = useState("");
  const [Senha, setSenha] = useState("");
  const [ConfirmSenha, setConfirmSenha] = useState("");

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
        onChangeText={(text) => {
          setCNPJ(text);
        }}
        keyboardType={"number-pad"}
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
          console.log(CNPJ);
          console.log(Email);
          console.log(Senha);
          console.log(ConfirmSenha);
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
