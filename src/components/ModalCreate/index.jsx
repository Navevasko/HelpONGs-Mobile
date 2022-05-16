import React, { useState, useEffect } from "react";
import * as ImagePicker from "expo-image-picker";
import { Modal, ScrollView, Text } from "react-native";
import ContainerModal from "../ContainerModal";
import TypePicker from "../TypePicker";
import ONGData from "../ONGData";
import BottomSheetPost from "../BottomSheetPost";
import FullButton from "../FullButton";
import ModalEvento from "../ModalEvento";
import ModalVaga from "../ModalVaga";
import ModalPost from "../ModalPost";
import { styles } from "./style";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import ModalEndereco from "../ModalEndereco";
import ModalDataHora from "../ModalDataHora";

export default function ModalCreate({ onClose }) {
  const [Type, setType] = useState("vaga");
  const types = [
    { label: "Post", value: "post" },
    { label: "Evento", value: "evento" },
    { label: "Vaga", value: "vaga" },
  ];
  const [file, setFile] = useState();
  const [modalEndereco, setModalEndereco] = useState(false);
  const [modalDataHora, setModalDataHora] = useState(false);
  const [endereco, setEndereco] = useState({});
  const [data, setData] = useState({});
  const [eventoArray, setEventoArray] = useState({});
  const [postArray, setPostArray] = useState({});
  const [vagaArray, setVagaArray] = useState({});

  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Desculpe! Precisamos de permissão para fazer isso funcionar");
        }
      }
    })();
  }, []);

  const handleChoosePhoto = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.cancelled) {
      setFile(result.uri);
    }
  };
  return (
    <Modal transparent={true} animationType={"slide"} onRequestClose={onClose}>
      <GestureHandlerRootView style={{ flex: 1, backgroundColor: "red" }}>
        <ContainerModal
          onClose={onClose}
          title={"Criar Publicação"}
          publish={true}
          onPress={() => {
            if (Type === "post") {
            } else if (Type === "evento") {
            } else if (Type === "vaga") {
            }
          }}
        >
          <ONGData
            image={require("../../assets/img/ONG.png")}
            name={"GreenPeace"}
          />
          <TypePicker
            onValueChange={(item) => {
              setType(item);
            }}
            selectedValue={Type}
            items={types}
            mode={"dialog"}
          />

          <ScrollView
            style={styles.containerInput}
            contentContainerStyle={{ justifyContent: "center" }}
          >
            {Type == "post" && <ModalPost file={file} />}

            {Type == "evento" && <ModalEvento file={file} />}

            {Type == "vaga" && <ModalVaga />}
          </ScrollView>

          <BottomSheetPost>
            {Type == "post" && (
              <FullButton
                icon={"image"}
                text={"Adicionar Foto/Vídeo"}
                onPress={handleChoosePhoto}
              />
            )}

            {Type == "evento" && (
              <>
                <FullButton
                  icon={"image"}
                  text={"Adicionar Foto/Vídeo"}
                  onPress={handleChoosePhoto}
                />

                <FullButton
                  icon={"map-pin"}
                  text={"Adicionar Endereço"}
                  onPress={() => {
                    setModalEndereco(true);
                  }}
                />

                <FullButton icon={"calendar"} text={"Adicionar Data e Hora"} />
              </>
            )}

            {modalEndereco && (
              <ModalEndereco
                setData={(data) => {
                  setEndereco(data);
                }}
                onClose={() => {
                  setModalEndereco(false);
                }}
              />
            )}

            {modalDataHora && (
              <ModalDataHora
                onClose={() => {
                  setModalDataHora(false);
                }}
                setData={(data) => {
                  setData(data);
                }}
              />
            )}

            {Type == "vaga" && (
              <>
                <FullButton
                  icon={"map-pin"}
                  text={"Adicionar Endereço"}
                  onPress={() => {
                    setModalEndereco(true);
                  }}
                />

                <FullButton
                  icon={"calendar"}
                  text={"Adicionar Data e Hora"}
                  onPress={() => {
                    setModalDataHora(true);
                  }}
                />
              </>
            )}
          </BottomSheetPost>
        </ContainerModal>
      </GestureHandlerRootView>
    </Modal>
  );
}
