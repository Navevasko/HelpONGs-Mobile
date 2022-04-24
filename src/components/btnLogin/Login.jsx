import { View, Text, TouchableOpacity, ToastAndroid } from "react-native";
import React, { useState } from "react";
import { styles } from "./style";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
import LoginUser from "../../screens/LoginUser";
import { api } from "../../../api";

export default function BtnLogin({ tipo, email, senha, cnpj }) {
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation();

  const onSubmit = async () => {
    // setIsLoading(true);

    if (tipo == "LoginUser") {

      if(email == "" || senha == ""){
        ToastAndroid.show("Por favor preencha todos os campos!", ToastAndroid.CENTER);
      }else{
      const response = 
        await api.post(`/user/login`, {
          email: email,
          senha: senha,
        })
        .then((response) => {
          // console.log(response.data);
          if (response.status == "200") {
            ToastAndroid.show(response.data.message, ToastAndroid.SHORT);
            navigation.navigate("PerfilONG");
          }
        })
        .catch((error) => {
          const a = JSON.stringify(error);
          if (a.includes("400")) {
            ToastAndroid.show(
              "Senha ou email incorretos, por favor tente novamente!",
              ToastAndroid.SHORT,
              ToastAndroid.CENTER
            );
          } else {
            ToastAndroid.show("Erro", ToastAndroid.SHORT, ToastAndroid.CENTER);
            // console.log(error)
          }
        });
      }
      // console.log(response);
    } else if (tipo == "loginONG") {
      
      const response = await axios
        .post(`${baseUrl}/ong/login`, {
          cnpj: cnpj,
          email: email,
          senha: senha,
        })
        .then((response) => {
          console.log(response.data);
          if (response.status == "200") {
            navigation.navigate("PerfilONG");
          }
        })
        .catch((error) => {
          const a = JSON.stringify(error);
          if (!a.includes("400")) {
            ToastAndroid.show(
              "Email ou CNPJ e senhas informados estão incorretos, por favor tente novamente!",
              ToastAndroid.SHORT,
              ToastAndroid.CENTER
            );
          } else {
            ToastAndroid.show("Erro", ToastAndroid.SHORT, ToastAndroid.CENTER);
          }
        });
    }
  };

  return (
    <TouchableOpacity
      onPress={() => {
        onSubmit();
      }}
    >
      <View style={styles.btnLogin}>
        <Text style={styles.txtLogin}>Login</Text>
      </View>
    </TouchableOpacity>
  );
}
