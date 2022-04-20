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
import BtnSubmit from "../../components/Cadastrar";
import InputUnderline from "../../components/InputUnderline";
import InputUnderlinePassword from "../../components/InputUnderlinePassword";
import { cnpjMask } from "../../utils/mask";
import axios from "axios";
import Ong from "../../../api/ongController";

const imgPrincipal = require("../../assets/img/imgPrincipalCadastroONG.png");

export default function CadastroONG() {
  /* Criando as constantes dos dados */

  const [Nome, setNome] = useState("");
  const [CNPJ, setCNPJ] = useState("11.567.352/0001-40");
  const [Email, setEmail] = useState("AACDA@hotmaail.com");
  const [Senha, setSenha] = useState("1");
  const [ConfirmSenha, setConfirmSenha] = useState("1");
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async () => {

    const trueCNPJ = Ong.trueCNPJ(CNPJ)
    if (Ong.searchCNPJ(trueCNPJ)) {
      Ong.post(Nome, trueCNPJ, Email, Senha);
    }
    // setIsLoading(true);

    // const getResponse = await axios
    //   .get(`https://publica.cnpj.ws/cnpj/${trueCNPJ}`)
    //   .then(async ({ data }) => {
    //     if (data.nome_fantasia == null) {
    //       setNome(data.razao_social);
    //       console.log(Nome);
    //     } else {
    //       setNome(data.nome_fantasia);
    //       console.log(Nome);
    //     }
    //     const response = await axios
    //       .post(`${baseURL}/ong/pre-register`, {
    //         cnpj: CNPJ,
    //         email: Email,
    //         nome: Nome,
    //         senha: Senha,
    //       })
    //       .then(({ data }) => {
    //         setIsLoading(false);
    //         console.log(data);
    //       })
    //       .catch((error) => {
    //         const response = JSON.stringify(error);
    //         if (response.includes("400")) {
    //           ToastAndroid.show(
    //             "Email ou CNPJ já existem, faça login",
    //             ToastAndroid.SHORT,
    //             ToastAndroid.CENTER
    //           );
    //           setIsLoading(false);
    //         }
    //       });
    //   })
    //   .catch((error) => {
    //     const response = JSON.stringify(error);
    //     console.log(error);
    //     if (response.includes("429")) {
    //       ToastAndroid.show(
    //         "Não conseguimos encontrar o seu CNPJ, por favor tente novamente mais tarde",
    //         ToastAndroid.SHORT,
    //         ToastAndroid.CENTER
    //       );
    //       setIsLoading(false);
    //     }
    //   });
  };

  /* Criando a função para validar os dados */
  // const validate = (StringCNPJ, Email, Senha, ConfirmSenha) => {
  //   if (StringCNPJ != "" && Email != "" && Senha != "" && ConfirmSenha != "") {
  //     /* Transformando o StringCNPJ em número */
  //     StringCNPJ =
  //       StringCNPJ.substring(0, 2) +
  //       StringCNPJ.substring(3, 6) +
  //       StringCNPJ.substring(7, 10) +
  //       StringCNPJ.substring(11, 15) +
  //       StringCNPJ.substring(15, 17);
  //     const CNPJ = parseInt(StringCNPJ);
  //     if (Email.includes("@")) {
  //       if(Senha.length < 10 || ConfirmSenha < 10)
  //     }
  //     else {
  //       ToastAndroid.show("Email inválido", ToastAndroid.SHORT);
  //     }
  //   } else {
  //     ToastAndroid.show("Preencha todos os campos", ToastAndroid.SHORT);
  //     return false;
  //   }
  // };

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
        isPassword={true}
        onChangeText={(text) => {
          setSenha(text);
        }}
        editable={!isLoading}
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
        editable={!isLoading}
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