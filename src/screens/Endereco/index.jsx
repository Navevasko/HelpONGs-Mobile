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

export default function Endereco() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle={"dark-content"} backgroundColor={"transparent"} />
      <ImageBackground
        style={styles.imageBackground}
        source={require("../../assets/img/Background.png")}
      >
        <TextUnderline name="Endereço" title={true} />
        <ScrollView
          style={styles.containerInfo}
          contentContainerStyle={{
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View style={styles.containerInput}>
            <Text style={styles.titleInput}> CEP </Text>
            <TextInput style={styles.input} placeholder="Maria da Silva" />
          </View>

          <View style={styles.containerInput}>
            <Text style={styles.titleInput}> Estado </Text>
            <TextInput style={styles.input} placeholder="Maria da Silva" />
          </View>

          <View style={styles.containerInput}>
            <Text style={styles.titleInput}> Cidade </Text>
            <TextInput style={styles.input} placeholder="Maria da Silva" />
          </View>

          <View style={styles.containerInput}>
            <Text style={styles.titleInput}> Bairro </Text>
            <TextInput style={styles.input} placeholder="Maria da Silva" />
          </View>

          <View style={styles.containerInput}>
            <Text style={styles.titleInput}> Rua </Text>
            <TextInput style={styles.input} placeholder="Maria da Silva" />
          </View>

          <View style={styles.containerInput}>
            <Text style={styles.titleInput}> Número </Text>
            <TextInput style={styles.input} placeholder="Maria da Silva" />
          </View>

          <BtnSubmit text="Salvar" />
          <BtnSubmit text="Cancelar" color={theme.colors.grey} />
        </ScrollView>
      </ImageBackground>
    </View>
  );
}
