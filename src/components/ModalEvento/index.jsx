import { View, Image } from "react-native";
import { Video } from "expo-av";
import React, { useState } from "react";
import { styles } from "./style";
import { theme } from "../../global/styles/theme";
import InputUnderline from "../InputUnderline";
import InvisibleInput from "../InvisibleInput";
import Icon from "react-native-vector-icons/Feather";

export default function ModalEvento({ file, setFile }) {
  const [titulo, setTitulo] = useState("");
  const [desc, setDesc] = useState("");

  const handleFile = (file) => {
    if (file == null) {
      return;
    } else if (file.type == "image") {
      return "image";
    } else if (file.type == "video") {
      return "video";
    }
  };

  return (
    <>
      <View style={{ paddingStart: 20, paddingEnd: 25 }}>
        <InputUnderline
          keyboardType="default"
          borderColor={theme.colors.primary}
          placeholder={"Crie um título para seu evento"}
          textCenter={true}
          value={titulo}
          onChangeText={(text) => {
            setTitulo(text);
          }}
        />

        <InvisibleInput
          placeholder={"Faça uma descrição de seu evento"}
          value={desc}
          onChangeText={(text) => {
            setDesc(text);
          }}
        />
      </View>

      {handleFile(file) == "image" && (
        <View>
          <Icon
            name="x"
            size={45}
            color={theme.colors.secondary}
            style={{
              position: "relative",
              top: 60,
              alignSelf: "flex-end",
              zIndex: 1,
            }}
            onPress={() => {
              setFile('')
            }}
          />
          <Image source={{ uri: file.uri }} style={styles.file} />
        </View>
      )}
      {handleFile(file) == "video" && (
        <Video
          source={{ uri: file.uri }}
          style={styles.file}
          resizeMode={"cover"}
          shouldPlay
          isLooping
        />
      )}
    </>
  );
}
