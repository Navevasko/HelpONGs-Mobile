import { View, Image } from "react-native";
import { Video } from "expo-av";
import React, { useState } from "react";
import { styles } from "./style";
import { theme } from "../../global/styles/theme";
import InputUnderline from "../InputUnderline";
import InvisibleInput from "../InvisibleInput";
import Icon from "react-native-vector-icons/Feather";

export default function ModalEvento({
  fileArray,
  setFileArray,
  setTitle,
  setDesc,
}) {
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
          onChangeText={(text) => {
            setTitle(text);
          }}
        />

        <InvisibleInput
          placeholder={"Faça uma descrição de seu evento"}
          onChangeText={(text) => {
            setDesc(text);
          }}
        />
      </View>

      <View style={{ width: "100%", minHeight: 400 }}>
        {fileArray.map((file, index) => {
          if (file.type === "image") {
            return (
              <View key={index}>
                <Icon
                  name="x"
                  size={45}
                  style={styles.close}
                  onPress={() => {
                    const newArray = fileArray.filter(
                      (item) => file.uri !== item.uri
                    );
                    setFileArray(newArray);
                  }}
                  key={index}
                />
                <Image
                  source={{ uri: file.uri }}
                  style={styles.file}
                  key={file.uri}
                />
              </View>
            );
          }
        })}
        {fileArray.map((file, index) => {
          if (file.type === "video") {
            return (
              <View key={index}>
                <Icon
                  name="x"
                  size={45}
                  style={styles.close}
                  onPress={() => {
                    const newArray = fileArray.filter(
                      (item) => file.uri !== item.uri
                    );
                    setFileArray(newArray);
                  }}
                />
                <Video
                  source={{ uri: file.uri }}
                  style={styles.file}
                  resizeMode={"cover"}
                  shouldPlay
                  isLooping
                  key={file.uri}
                />
              </View>
            );
          }
        })}
      </View>
    </>
  );
}
