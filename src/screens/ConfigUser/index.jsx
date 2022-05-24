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
import InformacoesDeContaUser from "../../components/InformacoesDeContaUser";
import EnderecoUser from "../../components/EnderecoUser";
import ConfiguracoesGerais from "../../components/ConfiguracoesGerais";

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
        <View style={styles.containerPerfil}>
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
        </View>
        <View style={{paddingHorizontal:15}}>
        <InformacoesDeContaUser/>
        <EnderecoUser/>
        <ConfiguracoesGerais/>
        </View>
      </ScrollView>
    </>
  );
}
