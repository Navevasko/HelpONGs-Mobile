import { View, Text, TextInput, Image } from "react-native";
import InputBorder from "../InputBorder";
import React, { useState, useEffect } from "react";
import BtnSubmit from "../BtnSubmit";
import * as ImagePicker from "expo-image-picker";

import { theme } from "../../global/styles/theme";
import { styles } from "./style";

export default function ModalPost() {
  const [titulo, setTitulo] = useState("");
  const [desc, setDesc] = useState("");
  const [cargaHoraria, setDate] = useState("");
  const [file, setFile] = useState();

  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Desculpe! Precisamos de permissão para fazer isso funcionar");
        }
      }
    })();
  }, []);

  const handleChoosePhoto = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsMultipleSelection: true,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setFile(result.uri);
    }
  };

  return (
    <View>
      <InputBorder text={"Titulo"} placeholder={"Titulo do evento"} />

      <InputBorder
        text={"Descrição"}
        height={200}
        placeholder={"Faça uma descrição de seu evento"}
      />

      {file && <Image source={{ uri: file }} style={styles.image} />}

      <BtnSubmit
        text={"Adicionar Imagem"}
        color={theme.colors.grey}
        size={0}
        onPress={handleChoosePhoto}
      />

      <View style={styles.containerInfoInputs}>
        <View style={styles.inputCom}>
          <InputBorder
            text={"Inicio do horário"}
            placeholder={"00:00"}
            keyboardType={"number-pad"}
          />
        </View>
        <View style={styles.inputCom}>
          <InputBorder
            text={"Fim do horário"}
            placeholder={"00:00"}
            keyboardType={"number-pad"}
          />
        </View>
      </View>
    </View>
  );
}
