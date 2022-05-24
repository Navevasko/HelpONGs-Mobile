import React, { useState, useEffect } from "react";
import * as ImagePicker from "expo-image-picker";
import {
  Image,
  Modal,
  ScrollView,
  Text,
  ToastAndroid,
  View,
} from "react-native";
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
import { api } from "../../../api";
import Loading from "../Loading";
import Ong from "../../../api/Controllers/ongController";
import { theme } from "../../global/styles/theme";
import { Switch } from "react-native-paper";

export default function ModalCreate({ onClose }) {
  const [Type, setType] = useState("evento");
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
  const [tituloEvento, setTituloEvento] = useState("");
  const [objetivo, setObjetivo] = useState("");
  const [descEvento, setDescEvento] = useState("");
  const [descPost, setDescPost] = useState("");
  const [descVaga, setVagaArray] = useState({});
  const [reqVaga, setReqVaga] = useState({});
  const [loading, setLoading] = useState(false);
  const [fileArray, setFileArray] = useState([]);
  const [disableFile, setDisableFile] = useState(false);
  const [candidatos, setCandidatos] = useState(false);

  const handlePost = (type) => {
    if (type == "post") {
      const response = Ong.postPost(descPost, fileArray, 1);
      if (response == "errorDesc") {
        ToastAndroid.show(
          "Por favor, faça uma descrição de seu post",
          ToastAndroid.SHORT
        );
      }
    } else if (type == "evento") {
      const eventoArray = {
        titulo: tituloEvento,
        dataHora: data,
        objetivo: objetivo,
        descricao: descEvento,
        candidato: candidatos,
        endereco: endereco,
        media: [],
      };
      console.log(eventoArray);
    } else if (type == "vaga") {
    }
  };

  // EFFECT PARA PEDIR PERMISSÃO PARA ACESSO A GALERIA
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

  // FUNÇÃO PARA ABRIR A GALERIA
  const handleChoosePhoto = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsMultipleSelection: true,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.cancelled) {
      if (fileArray.length >= 2) {
        setDisableFile(true);
        setFileArray([...fileArray, result]);
      } else {
        setFileArray([...fileArray, result]);
      }
    }
  };

  return (
    <Modal transparent={true} animationType={"slide"} onRequestClose={onClose}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <ContainerModal
          onClose={onClose}
          title={"Criar Publicação"}
          publish={true}
          onPress={() => {
            handlePost(Type);
          }}
        >
          {loading && <Loading />}

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
            {Type == "post" && (
              <ModalPost
                fileArray={fileArray}
                setFileArray={(data) => {
                  setFileArray(data);
                }}
                setDesc={(text) => {
                  setDescPost(text);
                }}
              />
            )}

            {Type == "evento" && (
              <ModalEvento
                fileArray={fileArray}
                setFileArray={(data) => {
                  setFileArray(data);
                }}
                setDesc={(text) => {
                  setDescEvento(text);
                }}
                setTitle={(text) => {
                  setTituloEvento(text);
                }}
                setObjective={(text) => {
                  setObjetivo(text)
                }}
              />
            )}

            {Type == "vaga" && <ModalVaga />}
          </ScrollView>

          <BottomSheetPost>
            {Type == "post" && (
              <FullButton
                icon={"image"}
                text={"Adicionar Foto/Vídeo"}
                onPress={handleChoosePhoto}
                disabled={disableFile}
                toast="Um post só pode ter três fotos."
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

                <FullButton
                  icon={"calendar"}
                  text={"Adicionar Data e Hora"}
                  onPress={() => {
                    setModalDataHora(true);
                  }}
                />

                <FullButton
                  icon={"user"}
                  text="Candidatos?"
                  backColor={
                    candidatos == true
                      ? theme.colors.primary
                      : theme.colors.secondary
                  }
                  onPress={() => {
                    ToastAndroid.show(
                      "Candidatos " +
                        (candidatos == true ? "Adicionados" : "Removidos"),
                      ToastAndroid.SHORT
                    );
                    setCandidatos(!candidatos);
                  }}
                >
                  <Switch
                    style={{
                      marginStart: 50,
                    }}
                    color={theme.colors.white}
                    value={candidatos}
                    onValueChange={() => {
                      setCandidatos(!candidatos);
                    }}
                  />
                </FullButton>
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
