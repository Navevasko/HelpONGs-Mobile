import React, { useState, useEffect } from "react";
import * as ImagePicker from "expo-image-picker";
import { Modal, ScrollView, ToastAndroid } from "react-native";
import ContainerModal from "../ContainerModal";
import TypePicker from "../TypePicker";
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
import ModalCargaHoraria from "../ModalCargaHoraria";
import ONGDataModal from "../OngDataModal";

export default function ModalCreate({ onClose }) {
  const [Type, setType] = useState("post");
  const types = [
    { label: "Post", value: "post" },
    { label: "Evento", value: "evento" },
    { label: "Vaga", value: "vaga" },
  ];
  const [modalEndereco, setModalEndereco] = useState(false);
  const [modalDataHora, setModalDataHora] = useState(false);
  const [modalCargaHoraria, setModalCargaHoraria] = useState(false);
  const [titulo, setTitulo] = useState("");
  const [desc, setDesc] = useState("");
  const [objetivo, setObjetivo] = useState("");
  const [requisitos, setRequisitos] = useState("");
  const [endereco, setEndereco] = useState({
    bairro: "",
    cep: "",
    municipio: "",
    complemento: "",
    uf: "",
    rua: "",
    numero: "",
  });
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(false);
  const [fileArray, setFileArray] = useState([]);
  const [disableFile, setDisableFile] = useState(false);
  const [candidatos, setCandidatos] = useState(false);

  const validateResponse = (result) => {
    console.log(result);

    if (result.status == 500) {
      ToastAndroid.show(
        "Parece que ocorreu um erro com sua internet, por favor tente novamente mais tarde",
        ToastAndroid.SHORT
      );
    } else if (result.status == 400) {
      ToastAndroid.show(
        "Parece que ocorreu um erro, por favor tente novamente",
        ToastAndroid.SHORT
      );
    } else if (result.status == 200) {
      setLoading(false);
      onClose();
    }
  };

  const handleCreate = async (type) => {
    if (type == "post") {
      if (desc == undefined) {
        ToastAndroid.show(
          "Por favor, faça uma descrição de seu post",
          ToastAndroid.SHORT
        );
      } else {
        setLoading(true);
        const response = await Ong.postPost(1, desc, fileArray);
        validateResponse(response);
      }
    } else if (type == "evento") {
      if (
        desc == undefined ||
        objetivo == undefined ||
        titulo == undefined ||
        data == undefined ||
        endereco == {}
      ) {
        ToastAndroid.show("Preencha todos os campos", ToastAndroid.SHORT);
      } else {
        setLoading(true);
        const response = await Ong.postEvent(
          1,
          titulo,
          desc,
          objetivo,
          candidatos,
          fileArray,
          endereco,
          data,
          setLoading
        );

        validateResponse(response);
      }
    } else if (type == "vaga") {
      if (
        titulo == "" ||
        desc == "" ||
        requisitos == "" ||
        data == "" ||
        endereco == {}
      ) {
        ToastAndroid.show(
          "Por favor, preencha todos os campos",
          ToastAndroid.SHORT
        );
      } else {
        setLoading(true);
        const response = await Ong.postVaga(
          1,
          titulo,
          desc,
          requisitos,
          data,
          endereco
        );

        validateResponse(response);
      }
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
      base64: true,
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
            handleCreate(Type);
          }}
        >
          {loading && <Loading />}

          <ONGDataModal
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
                  setDesc(text);
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
                  setDesc(text);
                }}
                setTitle={(text) => {
                  setTitulo(text);
                }}
                setObjective={(text) => {
                  setObjetivo(text);
                }}
              />
            )}

            {Type == "vaga" && (
              <ModalVaga
                setDesc={(text) => {
                  setDesc(text);
                }}
                setRequisito={(text) => {
                  setRequisitos(text);
                }}
                setTitulo={(text) => {
                  setTitulo(text);
                }}
              />
            )}
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
                        (candidatos == true ? "Removidos" : "Adicionados"),
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
                endereco={endereco}
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
                data={data}
                onClose={() => {
                  setModalDataHora(false);
                }}
                setData={(data) => {
                  setData(data);
                }}
              />
            )}

            {modalCargaHoraria && (
              <ModalCargaHoraria
                data={data}
                onClose={() => {
                  setModalCargaHoraria(false);
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
                  text={"Adicionar Carga horária"}
                  onPress={() => {
                    setModalCargaHoraria(true);
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
