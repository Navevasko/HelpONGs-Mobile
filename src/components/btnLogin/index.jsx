import { View, Text, TouchableOpacity, ToastAndroid } from "react-native";
import React, { useState } from "react";
import { styles } from "./style";
import { useNavigation } from "@react-navigation/native";
import { api } from "../../../api";

export default function BtnLogin({ tipo, email, senha }) {
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation();
  const onSubmit = async () => {
    // setIsLoading(true);

    if (tipo == "LoginUser") {

        if(email.length == 0 || senha.length == 0){
          ToastAndroid.show("Por favor preencha todos os campos!", ToastAndroid.CENTER);
        }else if(!email.includes("@")){
        ToastAndroid.show("Email inválido", ToastAndroid.CENTER);
      }else{
      const response = 
        await api.post(`/user/login`, {
          email: email,
          senha: senha,
        })
        .then((response) => {
          // console.log(response.data);
          if (response.status == "200") {
            ToastAndroid.show("Login realizado com sucesso", ToastAndroid.SHORT);
          }
        })
        .catch((error) => {
          const errorJSON = JSON.stringify(error);
          if (errorJSON.includes("400")) {
            ToastAndroid.show(
              "Senha ou email incorretos, por favor tente novamente!",
              ToastAndroid.SHORT,
              ToastAndroid.CENTER
            );
            
          }else if(errorJSON.includes("404")){
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
        // console.log(response)
      }
    } else if (tipo == "loginONG") {
      if(email == "" || senha == ""){
        ToastAndroid.show("Por favor preencha todos os campos!", ToastAndroid.CENTER);
      }else if(!email.includes("@")){
        ToastAndroid.show("Email inválido", ToastAndroid.CENTER);
      }else{
        const response = await
        api.post(`/ong/login`, {
          email: email,
          senha: senha,
        })
        .then((response) => {
          const idOng = response.data.data.idOng;
            ToastAndroid.show("Login realizado com sucesso", ToastAndroid.SHORT);
            navigation.navigate("PerfilONG", {idOng});
        })
        .catch((error) => {
          console.log("error login ong", error)
          const a = JSON.stringify(error);
          if (!a.includes("400")) {
            ToastAndroid.show(
              "Email ou senhas informados estão incorretos, por favor tente novamente!",
              ToastAndroid.SHORT,
              ToastAndroid.CENTER
            );
          } else {
            ToastAndroid.show("Erro", ToastAndroid.SHORT, ToastAndroid.CENTER);
          }
        });
      }
      
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