import { View, Image, Text, ImageEditor } from "react-native";
import { Video } from "expo-av";
import React, { useState } from "react";
import { styles } from "./style";
import InvisibleInput from "../InvisibleInput";
import Icon from "react-native-vector-icons/Feather";

export default function ModalPost({ fileArray, setFileArray, setDesc }) {
  return (
    <>
      <View style={{ paddingStart: 20, paddingEnd: 25 }}>
        <InvisibleInput
          placeholder={"Faça uma descrição de seu post"}
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
