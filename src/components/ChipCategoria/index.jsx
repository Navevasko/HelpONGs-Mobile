import { View, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import React, {useEffect, useState} from "react";
import { styles } from "./style";
import { api } from "../../../api";

export default function ChipCategoria({ text, data, idOng }) {
  
  const [display , setDisplay] = useState("flex");

  useEffect(() => {
    excluirCategoria();
  }, [])

  function excluirCategoria(categoriaSelecionada){
    
    if(categoriaSelecionada != null){
      setDisplay("none");
      api.delete(`/category/ong/${idOng}/${categoriaSelecionada}`).then((response) =>{
          console.log(response);
      }).catch((error) => {
          console.log("erro excluir categoria")
      })
  }
  }

  return (
    <View style={[styles.container,{ display:display}]}>
      <Text style={styles.text}>{text}</Text>
      <TouchableOpacity onPress={() => {
        excluirCategoria(data.tbl_categorias.nome)
      }}>
      <Icon name="x-circle" size={30} />
      </TouchableOpacity>
    </View>
  );
}