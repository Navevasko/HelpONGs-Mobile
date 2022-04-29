import {
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
  ToastAndroid
} from "react-native";
import React from "react";
import Logo from "../../components/Logo";
import { styles } from "./style";
const imgPrincipal = require("../../assets/img/imgPrincipalCadastroUsuario.png");
import { theme } from "../../global/styles/theme";
import BtnSubmit from "../../components/BtnSubmit";
import InputUnderline from "../../components/InputUnderline";
import InputUnderlinePassword from "../../components/InputUnderlinePassword";
import { nameMask, emailMask, passwordMask } from "../../utils/mask";
import { useState } from "react";
import User from "../../../api/Controllers/userController";

export default function CadastroUsuario() {

  const [Nome, setNome] = useState("");
  const [Email, setEmail] = useState("");
  const [Senha, setSenha] = useState("");
  const [ConfirmSenha, setConfirmSenha] = useState("");
  const [isLoading, setIsLoading] = useState(false)

  const onSubmit = async () => {
    if (Nome != "" && Email != "" && Senha != "" && ConfirmSenha != "") {
      if (Email.includes("@")) {
        if (Senha == ConfirmSenha) {
          setIsLoading(true);
          let post = await User.post(Nome, Email, Senha);
          const postString = JSON.stringify(post);
          if (postString.includes("400")) {
            ToastAndroid.show(
              "Email ou Nome já existem, faça login",
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
      <SafeAreaView style={styles.containerLogo}>
        <Logo />
      </SafeAreaView>
      <SafeAreaView style={styles.containerImage}>
        <Image source={imgPrincipal} style={styles.image} />
      </SafeAreaView>

      <Text style={styles.title}> Cadastro </Text>

      <InputUnderline
        iconName={"user"}
        color={theme.colors.secondary}
        size={30}
        placeholder={"Digite seu Nome"}
        keyboardType={"default"}
        value={nameMask(Nome)}
        onChangeText={((text) => {setNome(text)})}
        max={50}
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

      <BtnSubmit text={"Cadastrar"} onPress={onSubmit} editable={!isLoading}/>

      <Text style={styles.terms}>
        Ao clicar em Cadastre-se, você concorda com nossos
        <Text
          style={{
            color: theme.colors.primary,
            fontFamily: theme.fonts.semiBold,
          }}
        >
          {" "}
          Termos, Política de Dados e Política de Cookies.{" "}
        </Text>
        Você poderá receber notificações por SMS e cancelar isso quando quiser.
      </Text>

      <TouchableOpacity style={styles.signUp}>
        <Text style={styles.textSignUp}>
          Já tem uma conta? Faça
          <Text style={styles.destaqueSignUp}> Login</Text>
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
