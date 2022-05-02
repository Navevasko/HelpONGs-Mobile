import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  Image,
  TextInput,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import { styles } from "./style";
import { Logo } from "../../components/Logo";
import { theme } from "../../global/styles/theme";
import BtnLogin from "../../components/btnLogin";
import InputUnderline from "../../components/InputUnderline";
import InputUnderlinePassword from "../../components/InputUnderlinePassword";
// import { useNavigation } from "@react-navigation/native";

export default function LoginUser() {
  
  const [variavel, setVariavel] = useState();
  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();
  // const navigation = useNavigation();
    // const onSubmit = async () => {

    //   const result = post(email, senha);

    //   if(result == true) {
    //     navigation.navigate("PerfilONG");
    //     console.log("eai")
    //   }
      
    // };

  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
      <StatusBar backgroundColor={'transparent'} barStyle={'dark-content'}/>
        <View style={styles.containerLogo}>
          <Logo />
        </View>
        <View style={styles.containerImgPrincipal}>
          <Image
            style={{ height: "100%", width: "100%", resizeMode: "contain" }}
            source={require("../../assets/img/imgPrincipalLoginV.png")}
          />
        </View>
        <Text style={styles.titulo}>Login</Text>
        <View style={styles.containerInput}>
          <InputUnderline
            placeholder="Email"
            iconName="mail"
            size={25}
            color={theme.colors.secondary}
            onChangeText={(text) => {
              setEmail(text);
            }}
            keyboardType={"email-address"}
          />
          <InputUnderlinePassword
            iconName={"lock"}
            color={theme.colors.secondary}
            size={25}
            placeholder={"Digite sua Senha"}
            isPassword={true}
            onChangeText={(text) => {
              setSenha(text);
            }}
          />
        </View>
        <View style={styles.containerEsqueciSenha}>
          <TouchableOpacity
            onPress={() => {
              console.log("Esqueci a senha");
            }}
          >
            <Text style={styles.txtEsqueciSenha}>Esqueceu a senha?</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.containerBtnLogin}>
          <BtnLogin
            tipo="LoginUser" email={email} senha={senha}
          />
        </View>
        <View style={styles.containerLinha}>
          <View style={styles.linha}></View>
          <Text style={styles.txtMudarDeOpcao}>Ou</Text>
          <Text style={styles.linha}></Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            console.log("Login google");
          }}
        >
          <Image style={styles.imgIconeGoogle} source={require("../../assets/img/iconGoogle.png")} />
        </TouchableOpacity>
        <View style={styles.containerCriarUmaConta}>
          <Text style={styles.txtNaoTemConta}>Não tem uma conta?</Text>
          <TouchableOpacity
            onPress={() => {
              console.log("Crie uma agora");
            }}
          >
            <Text style={styles.txtCriarUmaConta}>Crie uma agora</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
