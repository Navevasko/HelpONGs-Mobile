import { View, Image, Text } from "react-native";
import { Video } from "expo-av";
import React, { useState } from "react";
import { styles } from "./style";
import InvisibleInput from "../InvisibleInput";
import Icon from "react-native-vector-icons/Feather";

export default function ModalPost({file, setFile}) {
  const [desc, setDesc] = useState("");

  const handleFile = (file) => {
    if (file == null) {
      return;
    } else if(file.type == 'image'){
      return 'image'
    }
    else if (file.type == 'video'){
      return 'video'
    }
  };


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

      {handleFile(file) == "image" && (
        <View>
          <Icon
            name="x"
            size={45}
            style={styles.close}
            onPress={() => {
              setFile("");
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

// Object {
//   "cancelled": false,
//   "duration": 30528,
//   "height": 270,
//   "rotation": 0,
//   "type": "video",
//   "uri": "file:///data/user/0/host.exp.exponent/cache/ExperienceData/%2540anonymous%252FHelpONGs-e8f9cee1-e98f-40ef-a883-64c9fe721af7/ImagePicker/bc4a7d6c-a982-4ab2-bdbd-52babf1fa2e2.mp4",
//   "width": 480,
// }