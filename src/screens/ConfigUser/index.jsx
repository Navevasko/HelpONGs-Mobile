import {
  View,
  Text,
  Image,
  ImageBackground,
  StatusBar,
  ScrollView,
} from "react-native";
import React, { useEffect } from "react";
import { styles } from "./style";
import { theme } from "../../global/styles/theme";
import ScreenTitle from "../../components/ScreenTitle";
import Icon from "react-native-vector-icons/Feather";
import CardContainer from "../../components/CardContainer";
import InputBorder from "../../components/InputBorder";
import BtnSubmit from "../../components/BtnSubmit";
import { api } from "../../../api";

export default function ConfigUser() {
  useEffect(() => {
    api
      .get("/user/1")
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <StatusBar backgroundColor={"transparent"} barStyle={"dark-content"} />
      <ScreenTitle title={"Configurações"} />
      <ScrollView style={styles.container}>
        <CardContainer height={335}>
          <Image
            source={require("../../assets/img/Banner.png")}
            style={styles.banner}
          />
          <Image
            source={require("../../assets/img/PFP.png")}
            style={styles.profilePicutre}
            resizeMode="cover"
          />

          <View style={styles.edit}>
            <Icon name="edit" size={20} />
          </View>

          <View style={styles.name}>
            <Text style={styles.nameText}>Floyd Miles</Text>
            <Text style={styles.emailText}>willie.jennings@example.com</Text>
          </View>
        </CardContainer>

        <CardContainer title={"Editar Informações da conta"}>
          <View style={styles.inputContainer}>
            <InputBorder title="Nome" />

            <InputBorder title="Email" />

            <InputBorder
              title="Telefone"
              width={"100%"}
              keyboardType={"phone-pad"}
            />
          </View>
        </CardContainer>

        <CardContainer title={"Editar Endereço"}>
          <View style={styles.inputContainer}>
            <InputBorder title="CEP" keyboardType={"number-pad"} />

            <InputBorder title="Estado" />

            <InputBorder title="Cidade" />

            <InputBorder title="Bairro" />

            <InputBorder title="Rua" />

            <InputBorder title="Número" />

            <InputBorder title="Complemento" width={"100%"} />
          </View>
        </CardContainer>

        <CardContainer title={"Exclusão de conta"}>
          <View style={styles.inputContainer}>
            <BtnSubmit
              text="Excluir Conta"
              color={theme.colors.secondary}
              width="100%"
              height={60}
              icon={"alert-triangle"}
            />
          </View>
        </CardContainer>

        <BtnSubmit
          text="Salvar"
          color={theme.colors.primaryFaded}
          width="90%"
          height={60}
          onPress={() => {
            onSubmit();
          }}
        />
      </ScrollView>
    </>
  );
}
