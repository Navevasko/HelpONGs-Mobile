import { View, Text, Image, TextInput } from 'react-native'
import {Picker} from '../../../node_modules/@react-native-picker/picker'
import React, { useState } from 'react'
import { styles } from './style'
import { theme } from '../../global/styles/theme'
import Shadow from '../Shadow'
import BtnSubmit from '../BtnSubmit'

export default function ModalPost() {

    const [type, setType] = useState("post")

  return (
    <Shadow>
      <View style={styles.modal}>
        <View style={styles.ONGInformation}>
          <Image
            source={require("../../assets/img/ONG.png")}
            style={styles.imageONG}
          />
          <Text style={styles.textONG}> GreenPeace </Text>
        </View>

        <View style={styles.containerInput}>
          <View style={styles.pickerContainer}>
            <Picker
              style={{ color: theme.colors.black }}
              mode={"dropdown"}
              onValueChange={(item) => {
                setType(item);
              }}
              selectedValue={type}
            >
              <Picker.Item label="Post" value={"post"} />
              <Picker.Item label="Evento" value={"evento"} />
              <Picker.Item label="Vaga" value={"vaga"} />
            </Picker>
          </View>

          <TextInput style={styles.descInput} placeholder={'Faça uma descrição de seu post'}/>

          <BtnSubmit text={'Publicar'} color={'red'}/>
        </View>
      </View>
    </Shadow>
  );
}