import {
  View,
  Text,
  StatusBar,
  ImageBackground,
  ScrollView,
  TextInput,
} from "react-native";
import TextUnderline from "../../components/TextUnderline";
import Icon from "react-native-vector-icons/Feather";
import { styles } from "./style";
import React from "react";
import BtnSubmit from "../../components/BtnSubmit";

export default function InformacoesConta() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle={"dark-content"} backgroundColor={"transparent"} />
      <ImageBackground
        style={styles.imageBackground}
        source={require("../../assets/img/Background.png")}
      >
        <TextUnderline name="Informações da Conta" title={true} />
        <ScrollView
          style={styles.containerInfo}
          contentContainerStyle={{
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View style={styles.containerInput}>
            <Text style={styles.titleInput}> Nome </Text>
            <TextInput style={styles.input} placeholder="Maria da Silva" />
          </View>

          <View style={styles.containerInput}>
            <Text style={styles.titleInput}> Email </Text>
            <TextInput style={styles.input} placeholder="Maria da Silva" />
          </View>

          <View style={styles.containerInput}>
            <Text style={styles.titleInput}> Confirmar email </Text>
            <TextInput style={styles.input} placeholder="Maria da Silva" />
          </View>

          <View style={styles.containerInput}>
            <Text style={styles.titleInput}> Telefone </Text>
            <TextInput style={styles.input} placeholder="Maria da Silva" />
          </View>

          <View style={styles.containerInput}>
            <Text style={styles.titleInput}> Celular </Text>
            <TextInput style={styles.input} placeholder="Maria da Silva" />
          </View>

          <BtnSubmit text="Salvar" />
        </ScrollView>
      </ImageBackground>
    </View>
  );
}
