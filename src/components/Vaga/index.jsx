import { View, Text } from "react-native";
import React from "react";
import { styles } from "./style";
import ONGData from "../ONGData";
import CardContainer from "../CardContainer";
import BtnSubmit from "../BtnSubmit";
import { format } from "../../global/styles/format";

export default function Vaga() {
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

        <View style={[styles.buttonContainer, format.row]}>
          <BtnSubmit
            text={"Saiba Mais"}
            width="49%"
            height={35}
            fontSize={14}
          />

          <BtnSubmit
            text={"Tenho Interesse"}
            width="49%"
            height={35}
            fontSize={14}
          />
        </View>
      </View>
    </CardContainer>
  );
}
