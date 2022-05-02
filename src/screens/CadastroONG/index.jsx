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
import { theme } from "../../global/styles/theme";
import BtnSubmit from "../../components/BtnSubmit";
import InputUnderline from "../../components/InputUnderline";
import InputUnderlinePassword from "../../components/InputUnderlinePassword";
import { cnpjMask, emailMask, passwordMask } from "../../utils/mask";
import Ong from "../../../api/Controllers/ongController";
import ValidateCadastro from "../../utils/validators";

const imgPrincipal = require("../../assets/img/imgPrincipalCadastroONG.png");

export default function CadastroONG() {
  /* Criando as constantes dos dados */

  const [CNPJ, setCNPJ] = useState("20.857.131/0001-05");
  const [Email, setEmail] = useState("TESTE@TESTE.COM");
  const [Senha, setSenha] = useState("1");
  const [ConfirmSenha, setConfirmSenha] = useState("1");
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async () => {

    if (CNPJ != "" && Email != "" && Senha != "" && ConfirmSenha != "") {
      if (Email.includes("@")) {
        if (Senha == ConfirmSenha) {
          setIsLoading(true);
          const trueCNPJ = Ong.trueCNPJ(CNPJ);
          let post = await Ong.post(trueCNPJ, Email, Senha);
          const postString = JSON.stringify(post);
          if (postString.includes("400")) {
            ToastAndroid.show(
              "Email ou CNPJ já existem, faça login",
              ToastAndroid.SHORT
            );
            setIsLoading(false);
          }
          if(postString.includes("erro apiExterna")){
            ToastAndroid.show(
              "Número de CNPJ inválido",
              ToastAndroid.SHORT
            );
            setIsLoading(false);
          }
          if (postString.includes("429")) {
            ToastAndroid.show(
              "Muitas requisições por CNPJ, por favor tente novamente mais tarde",
              ToastAndroid.SHORT
            );
            setIsLoading(false);
          }
          if (postString.includes("200")) {
            ToastAndroid.show(
              "Cadastro efetuado com sucesso!",
              ToastAndroid.SHORT
            );
            setIsLoading(false);
          }
        } else {
          ToastAndroid.show("As senhas não coincidem", ToastAndroid.SHORT);
        }
      } else {
        ToastAndroid.show("Email inválido", ToastAndroid.SHORT);
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
        editable={!isLoading}
      />

      <InputUnderline
        iconName={"mail"}
        color={theme.colors.secondary}
        size={30}
        placeholder={"Digite seu E-mail"}
        value={emailMask(Email)}
        onChangeText={(text) => {
          setEmail(text);
        }}
        keyboardType={"email-address"}
        editable={!isLoading}
      />

      <InputUnderlinePassword
        iconName={"lock"}
        color={theme.colors.secondary}
        size={30}
        placeholder={"Digite sua Senha"}
        value={passwordMask(Senha)}
        isPassword={true}
        onChangeText={(text) => {
          setSenha(text);
        }}
        editable={!isLoading}
        max={80}
      />

      <InputUnderlinePassword
        iconName={"lock"}
        color={theme.colors.secondary}
        size={30}
        placeholder={"Confirme sua Senha"}
        value={passwordMask(ConfirmSenha)}
        isPassword={true}
        onChangeText={(text) => {
          setConfirmSenha(text);
        }}
        editable={!isLoading}
        max={80}
      />

      <BtnSubmit text={"Cadastrar"} onPress={onSubmit} editable={!isLoading} />

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