import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { styles } from "./style";
import ONGData from "../ONGData";
import BtnSubmit from "../BtnSubmit";
import FileContainer from "../FileContainer";
import CardContainer from "../CardContainer";
import Options from "../Options";
import { format } from "../../global/styles/format";
import { api } from "../../../api";

export default function Evento() {
  const [dataOng, setDataOng] = useState([]);

  React.useEffect(() => {
    api.get("/feed/0").then(({data}) => {
      setDataOng(data);
    });
  }, []);

  console.log(dataOng);

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
        <Text style={styles.title}>Expedição ao mar</Text>
        <Text style={styles.desc}>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet. Amet minim mollit non deserunt
          ullamco est sit aliqua dolor do amet sint.
        </Text>

        <FileContainer fileArray={fileArray} />

        <View style={[styles.buttonContainer, format.row]}>
          <BtnSubmit
            text={"Candidatar-se"}
            width="49%"
            height={35}
            fontSize={14}
          />

          <BtnSubmit
            text={"Saiba Mais"}
            width="49%"
            height={35}
            fontSize={14}
          />
        </View>

        <Options likes="200K" comments="10K" />
      </View>
    </CardContainer>
  );
}
