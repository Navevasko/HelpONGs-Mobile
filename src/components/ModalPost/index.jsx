import { View, Image } from "react-native";
import React, { useState } from "react";
import { styles } from "./style";
import InvisibleInput from "../InvisibleInput";

export default function ModalPost({file}) {
  const [titulo, setTitulo] = useState("");
  const [desc, setDesc] = useState("");
  const [cargaHoraria, setDate] = useState("");


  return (
    <>
      <View style={{ paddingStart: 20, paddingEnd: 25 }}>
        
        <InvisibleInput
          placeholder={"Faça uma descrição de seu evento"}
          value={desc}
          onChangeText={(text) => {
            setDesc(text);
          }}
        />
      </View>

      <>{file && <Image source={{ uri: file }} style={styles.image} />}</>
    </>
  );
}
