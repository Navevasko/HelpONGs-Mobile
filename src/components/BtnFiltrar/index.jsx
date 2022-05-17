import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, {useState} from "react";
import { api } from "../../../api";

export default function BtnFiltrar({ father, setOi }) {

  const [nomeOngFiltradas, setnomeOngFiltradas] =useState([]);
  const [dataOng, setDataOng] = useState([]);

  React.useEffect(() => {
    onSubmit();
  }, []);

    const onSubmit =() =>{
      if (father) {
      api
        .post("/category/filter", {
          categorias: [father],
        })
        .then((response) => {
          setnomeOngFiltradas(response.data.data);
        });
    }

    console.log(nomeOngFiltradas);
    if(nomeOngFiltradas.length != 0){ 

      api.get(`/ong`).then((response) => {
        setDataOng(response.data.data)
      });

      const ongsFiltradas = []; 
      
      dataOng.map((ong) => { 
      
      if (nomeOngFiltradas.includes(ong.nome)) { 
      
      ongsFiltradas.push(ong); 
      
      } 
  }); 

  console.log(ongsFiltradas); 
  
  // console.log(ongsFiltradas); 
  
  }
  }
  

  return (
    <TouchableOpacity style={styles.btnFiltrar} onPress={() => {onSubmit()}}>
      <Text>Filtrar</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({});
