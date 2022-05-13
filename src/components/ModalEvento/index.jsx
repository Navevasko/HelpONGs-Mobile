import { View, Text, TextInput, Image } from "react-native";
import { RadioButton } from "react-native-paper";
import InputBorder from "../InputBorder";
import BtnSubmit from "../BtnSubmit";
import React, { useState, useEffect } from "react";
import { dateMask, timeMask } from "../../utils/mask";
import { styles } from "./style";
import { theme } from "../../global/styles/theme";
import ModalEndereco from "../ModalEndereco";
import * as ImagePicker from "expo-image-picker";
import TypePicker from "../TypePicker";

export default function ModalEvento() {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState();
  const [endereco, setEndereco] = useState({});
  const [candidatos, setCandidatos] = useState("sim")
  const itemCandidato = [
              { label: "Sim", key: "sim" },
              { label: "Não", key: "nao" },
            ]

  const [modal, setModal] = useState(false);

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
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setFile(result.uri);
    }
  };

  const onSubmit = (data) => {};

  return (
    <View>
      <InputBorder
        text={"Titulo"}
        onChangeText={(item) => {
          setDesc(item);
        }}
        placeholder={"Titulo do evento"}
      />

      <InputBorder
        text={"Descrição"}
        onChangeText={(item) => {
          setDesc(item);
        }}
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
          <InputBorder text={"Data"} placeholder={"00/00/0000"} />
        </View>
        <View style={styles.inputCom}>
          <InputBorder text={"Horário"} placeholder={"00:00"} />
        </View>
        <View style={styles.inputCom}>
          <Text style={styles.texta}> Terá candidatos? </Text>
          <TypePicker
            items={itemCandidato}
            key={'candidatos'}
            selectedValue={candidatos}
            onValueChange={(item) => {
              setCandidatos(item)
            }}
          />
        </View>

        <BtnSubmit
          text="Adicionar endereço"
          color={theme.colors.grey}
          size={2}
          onPress={() => {
            setModal(true);
          }}
        />
      </View>

      {modal && (
        <ModalEndereco
          setData={(data) => {
            setEndereco(data);
          }}
          onClose={() => {
            setModal(false);
          }}
        />
      )}
    </View>
  );
}
