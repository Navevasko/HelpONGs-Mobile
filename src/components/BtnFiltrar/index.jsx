import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { api } from '../../../api'

export default function BtnFiltrar({setnomeOngFiltradas, father}) {
  // console.log(father);
      React.useEffect(() => {
        if(father){
          api.post('/category/filter', {
           categorias:["Meio-Ambiente"]
         }).then((response) =>{
          setnomeOngFiltradas(response.data.data);
         })
      }
      }, []);
        
  return (
    <TouchableOpacity style={styles.btnFiltrar} onPress={() => {
        
      }}>
      <Text>Filtrar</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({})