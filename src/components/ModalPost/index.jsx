import { View, Modal, Text, Image, TextInput, ScrollView, Touchable } from 'react-native'
import {Picker} from '../../../node_modules/@react-native-picker/picker'
import React, { useState } from 'react'
import { styles } from './style'
import { theme } from '../../global/styles/theme'
import Icon from 'react-native-vector-icons/Feather'
import ModalShadow from "../ModalShadow";
import BtnSubmit from '../BtnSubmit'
import InputBorder from "../InputDesc";
import TypePicker from '../TypePicker'
import ONGData from '../ONGData'

export default function ModalPost({onClose}) {

    const [Type, setType] = useState("post")
    const [Desc, setDesc] = useState("")
    const types = [
      { label: "Post", value: "post" },
      { label: "Evento", value: "evento" },
      { label: "Vaga", value: "vaga" },
    ];
    const [modalEndereco, setModalEndereco] = useState(false)

  return (
    <Modal transparent={true} animationType={"fade"} onRequestClose={onClose}>
      <ModalShadow>
        <View style={styles.modal}>
          <Icon
            name="arrow-left-circle"
            size={40}
            style={styles.close}
            onPress={onClose}
          />

          <ONGData
            image={require("../../assets/img/ONG.png")}
            name={"GreenPeace"}
          />

          <ScrollView style={styles.containerInput}>
            <TypePicker
              onValueChange={(item) => {
                setType(item);
              }}
              selectedValue={Type}
              items={types}
            />

            {Type == "post" && (
              <View>
                <InputBorder
                  onChangeText={(item) => {
                    setDesc(item);
                  }}
                  height={200}
                  placeholder={"Faça uma descrição de seu post"}
                />

                <BtnSubmit
                  text={"Adicionar Imagem/Vídeo"}
                  color={theme.colors.grey}
                />
              </View>
            )}

            {Type == "evento" && (
              <View>
                <InputBorder
                  onChangeText={(item) => {
                    setDesc(item);
                  }}
                  placeholder={"Titulo do evento"}
                />

                <InputBorder
                  onChangeText={(item) => {
                    setDesc(item);
                  }}
                  height={200}
                  placeholder={"Faça uma descrição de seu evento"}
                />

                <View>
                  <TextInput style={styles.input} />
                  <TextInput style={styles.input} />
                  <TextInput style={styles.input} />
                  <Touchable />

                  {modalEndereco && <View></View>}
                </View>

                <BtnSubmit text={"teste"} color={theme.colors.grey} size={"small"}/>
              </View>
            )}

            {Type == "vaga" && (
              <View>
                <InputBorder
                  onChangeText={(item) => {
                    setDesc(item);
                  }}
                  placeholder={"Titulo da vaga"}
                />

                <InputBorder
                  onChangeText={(item) => {
                    setDesc(item);
                  }}
                  height={200}
                  placeholder={"Faça uma descrição de sua vaga"}
                />

                <BtnSubmit text={"teste"} color={theme.colors.grey} />
              </View>
            )}

            {/* <InputDesc
              onChangeText={(item) => {
                setDesc(item);
              }}
            />

            <BtnSubmit
              text={"Adicionar Imagem/Vídeo"}
              color={theme.colors.grey}
            /> */}

            <BtnSubmit text={"Publicar"} />
          </ScrollView>
        </View>
      </ModalShadow>
    </Modal>
  );
}