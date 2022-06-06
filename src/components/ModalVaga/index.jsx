import { View } from "react-native";
import InvisibleInput from "../InvisibleInput";
import InputUnderline from "../InputUnderline";
import React, { useState } from "react";

import { theme } from "../../global/styles/theme";
import { styles } from "./style";

export default function ModalVaga({ setTitulo, setDesc, setRequisito }) {
  return (
    <>
      <View style={{ paddingStart: 20, paddingEnd: 25 }}>
        <InputUnderline
          keyboardType="default"
          borderColor={theme.colors.primary}
          placeholder={"Crie um título para sua vaga"}
          textCenter={true}
          onChangeText={(text) => {
            setTitulo(text);
          }}
        />

        <InvisibleInput
          placeholder={"Faça uma descrição de sua vaga"}
          onChangeText={(text) => {
            setDesc(text);
          }}
        />

        <InvisibleInput
          placeholder={"Adicione requisitos para sua vaga"}
          onChangeText={(text) => {
            setRequisito(text);
          }}
        />
      </View>
    </>
  );
}
