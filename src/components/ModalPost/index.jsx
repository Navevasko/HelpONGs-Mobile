import { View, Text, Image, TextInput } from 'react-native'
import {Picker} from '../../../node_modules/@react-native-picker/picker'
import React, { useState } from 'react'
import { styles } from './style'
import { theme } from '../../global/styles/theme'
import Shadow from '../Shadow'
import BtnSubmit from '../BtnSubmit'
import InputDesc from '../InputDesc'
import TypePicker from '../TypePicker'
import ONGData from '../ONGData'

export default function ModalPost() {

    const [Type, setType] = useState("post")
    const [Desc, setDesc] = useState("")
    const types = [
      { label: "Post", value: "post" },
      { label: "Evento", value: "evento" },
      { label: "Vaga", value: "vaga" },
    ];

  return (
    <Shadow>
      <View style={styles.modal}>
        <ONGData image={require('../../assets/img/ONG.png')} name={'GreenPeace'} />

        <View style={styles.containerInput}>
          
          <TypePicker onValueChange={(item) => {setType(item)}} selectedValue={Type} items={types} />

          <InputDesc onChangeText={(item) => {setDesc(item)}}/>

          <BtnSubmit
            text={"Adicionar Imagem/Vídeo"}
            color={theme.colors.grey}
          />

          <BtnSubmit
            text={"Publicar"}
          />
        </View>
      </View>
    </Shadow>
  );
}