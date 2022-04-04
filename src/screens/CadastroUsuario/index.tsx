import {
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import { Logo } from "../../components/Logo";
import { styles } from "./style";
import InputUnderline from "../../components/InputUnderline";
const imgPrincipal = require("../../assets/img/imgPrincipalCadastroUsuario.png");
import { theme } from "../../global/styles/theme";
import Cadastrar from "../../components/Cadastrar";

export default function CadastroONG() {
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
        placeholder="Digite seu Nome"
        iconName="user"
        size={35}
        color={theme.colors.secondary}
      />

      <InputUnderline
        placeholder="Digite seu Email"
        iconName="mail"
        size={30}
        color={theme.colors.secondary}
      />

      <InputUnderline
        placeholder="Digite sua Senha"
        iconName="lock"
        size={30}
        color={theme.colors.secondary}
      />

      <InputUnderline
        placeholder="Confirme sua Senha"
        iconName="lock"
        size={30}
        color={theme.colors.secondary}
      />

      <Cadastrar />

      <Text style={styles.terms}>
        Ao clicar em Cadastre-se, você concorda com nossos
        <Text
          style={{
            color: theme.colors.primary,
            fontFamily: theme.fonts.semiBold,
          }}
        >
          {" "}
          Termos, Política de Dados e Política de Cookies.
          {" "}
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
