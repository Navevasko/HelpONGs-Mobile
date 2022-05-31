import { View, Text, Image } from "react-native";
import React from "react";
import { styles } from "./style";
import { theme } from "../../global/styles/theme";
import Icon from "react-native-vector-icons/Feather";
import CardContainer from "../CardContainer";
import ONGData from "../ONGData";
import Options from "../Options";
import FileContainer from "../FileContainer";

export default function Post() {
  const fileArray = [
    {
      fileName: require("../../assets/img/Evento.png"),
      base64: "",
      fileType: "image/jpg",
    },
    {
      fileName: require("../../assets/img/Evento.png"),
      base64: "",
      fileType: "image/jpg",
    },
    {
      fileName: require("../../assets/img/Evento.png"),
      base64: "",
      fileType: "image/jpg",
    },
  ];
  return (
    <CardContainer>
      <ONGData
        name="GreenPeace"
        date="24 de Fevereiro de 2022"
        image={require("../../assets/img/ONG.png")}
      />

      <View style={styles.postData}>
        <Text style={styles.desc}>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet. Amet minim mollit non deserunt
          ullamco est sit aliqua dolor do amet sint.
        </Text>

        <FileContainer fileArray={fileArray} />

        <Options likes="14K" comments="10K" />
      </View>
    </CardContainer>
  );
}
