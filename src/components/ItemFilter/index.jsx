import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Checkbox } from 'react-native-paper';

export default function ItemFilter({item, setProps, value }) {
    const [checked, setChecked] = React.useState(false);
    // const [categoriasSelecionadas, setcategoriasSelecionadas] = useState([]);
    // const categoriasSelecionadas = [];
    
    return(
      <View style={{flexDirection:"row", alignItems:'center'}}>
        <Checkbox
          status={checked ? 'checked' : 'unchecked'}
          color="red"
          onPress={() => {setProps(item.nome);  setChecked(!checked);}}
          //   // Alert.alert(`Categoria, ${item.nome} clicado!`);
          //   setChecked(!checked);
          //   // setcategoriasSelecionadas(push(item.nome));
          //   // setProps.push(item.nome);
          // }}
          // onChange={(e) => setProps(e.target.value)}

        />
        <Text>
          {item.nome}
        </Text>
    </View>
    
    )
    
}

const styles = StyleSheet.create({})