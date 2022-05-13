import React, { useState } from "react";
import { Modal, ScrollView } from "react-native";
import ContainerModal from "../ContainerModal";
import BtnSubmit from "../BtnSubmit";
import TypePicker from "../TypePicker";
import ONGData from "../ONGData";
import ModalEvento from "../ModalEvento";
import ModalVaga from "../ModalVaga";
import ModalPost from "../ModalPost";
import { styles } from "./style";


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

          {Type == "post" && <ModalPost />}

          {Type == "evento" && <ModalEvento />}

          {Type == "vaga" && <ModalVaga />}
          <BtnSubmit text={"Publicar"} size={0} />
        </ScrollView>
      </ContainerModal>
    </Modal>
  );
}
