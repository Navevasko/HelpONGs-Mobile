import { View, Text, TouchableOpacity, ToastAndroid } from "react-native";
import React, { useState } from "react";
import { styles } from "./style";

export default function BtnLogin({ onPress }) {
  // const [isLoading, setIsLoading] = useState(false);
  // const navigation = useNavigation();

  // const onSubmit = async () => {
  //   // setIsLoading(true);

   

  //     if(email == "" || senha == ""){
  //       ToastAndroid.show("Por favor preencha todos os campos!", ToastAndroid.SHORT);
  //     }else{
  //     const response = 
  //       await api.post(`/ong/login`, {
  //         email: email,
  //         senha: senha,
  //       })
  //       .then((response) => {
  //         // console.log(response.data);
  //         if (response.status == "200") {
  //           ToastAndroid.show(response.data.message, ToastAndroid.SHORT);
  //           navigation.navigate("PerfilONG");
  //         }
  //       })
  //       .catch((error) => {
    
  //         const errorJSON = JSON.stringify(error);
  //         if (errorJSON.includes("404" && "401")) {
  //           ToastAndroid.show(
  //             "Senha ou email incorretos, por favor tente novamente!",
  //             ToastAndroid.SHORT,
  //             ToastAndroid.CENTER
  //           );
  //         } else {
  //           // ToastAndroid.show("Erro", ToastAndroid.SHORT, ToastAndroid.CENTER);
  //           console.log(error)
  //         }
  //       });
  //     }
      // console.log(response);
    // } else if (tipo == "loginONG") {
      
      // const response = await axios
      //   .post(`${baseUrl}/ong/login`, {
      //     cnpj: cnpj,
      //     email: email,
      //     senha: senha,
      //   })
      //   .then((response) => {
      //     console.log(response.data);
      //     if (response.status == "200") {
      //       navigation.navigate("PerfilONG");
      //     }
      //   })
      //   .catch((error) => {
      //     const a = JSON.stringify(error);
      //     if (!a.includes("400")) {
      //       ToastAndroid.show(
      //         "Email ou CNPJ e senhas informados estão incorretos, por favor tente novamente!",
      //         ToastAndroid.SHORT,
      //         ToastAndroid.CENTER
      //       );
      //     } else {
      //       ToastAndroid.show("Erro", ToastAndroid.SHORT, ToastAndroid.CENTER);
      //     }
      //   });
    // }
  // };

  return (
    <TouchableOpacity
      onPress={onPress}
    >
      <View style={styles.btnLogin}>
        <Text style={styles.txtLogin}>Login</Text>
      </View>
    </TouchableOpacity>
  );
}
