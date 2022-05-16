import { View } from 'react-native'
import InvisibleInput from '../InvisibleInput';
import InputUnderline from '../InputUnderline';
import React, {useState} from 'react'

import { theme } from '../../global/styles/theme';
import { styles } from './style';

export default function ModalVaga({file}) {

    const [titulo, setTitulo] = useState("")
    const [desc, setDesc] = useState("")
    const [cargaHoraria, setDate] = useState("")

  return (
    <>
      <View style={{ paddingStart: 20, paddingEnd: 25 }}>
        <InputUnderline
          keyboardType="default"
          borderColor={theme.colors.primary}
          placeholder={"Crie um título para seu evento"}
          textCenter={true}
          value={titulo}
          onChangeText={(text) => {
            setTitulo(text);
          }}
        />

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