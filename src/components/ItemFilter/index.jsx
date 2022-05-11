import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Checkbox } from 'react-native-paper';

export default function ItemFilter({item}) {
    const [checked, setChecked] = React.useState(false);
    // const [categoriasSelecionadas, setcategoriasSelecionadas] = useState([]);
    const categoriasSelecionadas = [];
    
    return(
      <View style={{flexDirection:"row", alignItems:'center'}}>
        <Checkbox
          status={checked ? 'checked' : 'unchecked'}
          color="red"
          onPress={() => {
            // Alert.alert(`Categoria, ${item.nome} clicado!`);
            setChecked(!checked);
            // setcategoriasSelecionadas(push(item.nome));
            categoriasSelecionadas.push(item.nome);
            console.log(categoriasSelecionadas);
          }}

        />
        <Text>
          {item.nome}
        </Text>
    </View>
    
    )
    
}

const styles = StyleSheet.create({})