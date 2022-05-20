import { View, Image, Text } from "react-native";
import { Video } from "expo-av";
import React, { useState } from "react";
import { styles } from "./style";
import InvisibleInput from "../InvisibleInput";
import Icon from "react-native-vector-icons/Feather";

export default function ModalPost({ fileArray, setFile }) {
  const [desc, setDesc] = useState("");

  return (
    <>
      <View style={{ paddingStart: 20, paddingEnd: 25 }}>
        <InvisibleInput
          placeholder={"Faça uma descrição de seu post"}
          value={desc}
          onChangeText={(text) => {
            setDesc(text);
          }}
        />
      </View>

      <View style={{ width: "100%", minHeight: 400, backgroundColor: "red" }}>
        {fileArray.map((file) => {
          if (file.type === "image") {
            return (
              <View>
                <Icon
                  name="x"
                  size={45}
                  style={styles.close}
                  onPress={() => {
                    setFile("");
                  }}
                />
                <Image
                  source={{ uri: file.uri }}
                  style={[styles.file, { height: file.height }]}
                  key={file.uri}
                />
              </View>
            );
          }
        })}
        {fileArray.map((file, index) => {
          console.log(`file[${index}]: `, file);
          if (file.type === "video") {
            return (
              <View>
                <Icon
                  name="x"
                  size={45}
                  style={styles.close}
                  onPress={() => {
                    setFileArray(fi);
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

// Object {
//   "cancelled": false,
//   "duration": 30528,
//   "height": 270,
//   "rotation": 0,
//   "type": "video",
//   "uri": "file:///data/user/0/host.exp.exponent/cache/ExperienceData/%2540anonymous%252FHelpONGs-e8f9cee1-e98f-40ef-a883-64c9fe721af7/ImagePicker/bc4a7d6c-a982-4ab2-bdbd-52babf1fa2e2.mp4",
//   "width": 480,
// }
