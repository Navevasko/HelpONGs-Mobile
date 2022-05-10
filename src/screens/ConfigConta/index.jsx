import {
  View,
  Text,
  StatusBar,
  ImageBackground,
  ScrollView,
  TextInput,
} from "react-native";
import TextUnderline from "../../components/TextUnderline";
import { styles } from "./style";
import { theme } from "../../global/styles/theme";
import React from "react";
import BtnSubmit from "../../components/BtnSubmit";
import CardBlock from "../../components/CardBlock";

export default function ConfigConta() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle={"dark-content"} backgroundColor={"transparent"} />
      <ImageBackground
        style={styles.imageBackground}
        source={require("../../assets/img/Background.png")}
      >
        <TextUnderline name="Opções de Conta" title={true} />

        <Text style={styles.title}> Bloqueados </Text>
        
        <CardBlock/>

        <BtnSubmit text="Excluir conta" color={theme.colors.secondary} />
      </ImageBackground>
    </View>
  );
}
