import { View, Modal, ScrollView } from "react-native";
import React, { useState } from "react";
import { styles } from "./style";
import { theme } from "../../global/styles/theme";
import BtnSubmit from "../BtnSubmit";
import InputBorder from "../InputBorder";
import TypePicker from "../TypePicker";
import ONGData from "../ONGData";
import ModalEvento from "../ModalEvento";
import ContainerModal from "../ContainerModal";

export default function ModalCreate({ onClose }) {
  const [Type, setType] = useState("post");
  const types = [
    { label: "Post", value: "post" },
    { label: "Evento", value: "evento" },
    { label: "Vaga", value: "vaga" },
  ];
  return (
    <Modal transparent={true} animationType={"fade"} onRequestClose={onClose}>
      <ContainerModal onClose={onClose}>

        <ONGData
          image={require("../../assets/img/ONG.png")}
          name={"GreenPeace"}
        />

        <ScrollView
          style={styles.containerInput}
          contentContainerStyle={{ justifyContent: "center" }}
        >
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
                size={0}
              />
            </View>
          )}

          {Type == "evento" && <ModalEvento />}

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

              <BtnSubmit text={"teste"} color={theme.colors.grey} size={0} />
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
          <BtnSubmit text={"Publicar"} size={0} />
        </ScrollView>
      </ContainerModal>
    </Modal>
  );
}
