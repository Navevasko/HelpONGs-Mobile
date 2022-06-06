import { View, Text } from "react-native";
import React, { useState } from "react";
import { styles } from "./style";
import Icon from "react-native-vector-icons/Feather";
import { format } from "../../global/styles/format";
import { theme } from "../../global/styles/theme";

export default function CardEvent({
  nome,
  idade,
  curriculo,
  id,
  setMenu,
  setId,
}) {
  const transformDate = (string) => {
    const date = new Date();
    const data = string.split("T")[0];

    const ano = data.split("-")[0];
    const mes = data.split("-")[2];
    const dia = data.split("-")[1];

    const dia_atual = date.getDate();
    const mes_atual = date.getMonth() + 1;
    const ano_atual = date.getFullYear();

    let idade = ano_atual - ano;

    if (mes_atual < mes || (mes_atual == mes && dia_atual == dia)) {
      idade = idade - 1;
    }

    return idade;
  };

  return (
    <>
      <View style={[format.row, styles.container]} key={id}>
        <Text style={[styles.text, { width: "30%" }]}>{nome}</Text>
        <Text style={styles.text}>{transformDate(idade)}</Text>
        <Icon name="file-text" size={25} color={theme.colors.secondary} />
        <Icon
          name="more-vertical"
          size={25}
          color={theme.colors.black}
          onPress={() => {
            setMenu(true);
            setId(id);
          }}
        />
      </View>
    </>
  );
}
