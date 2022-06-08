import { styles } from "./style";
import Menu from "../../components/navBar";
import React, { useEffect, useState } from "react";
import { FlatList, View, StatusBar, Text } from "react-native";
import TypePicker from "../../components/TypePicker";
import CardEvent from "../../components/CardEvent";
import { api } from "../../../api";
import { format } from "../../global/styles/format";
import { theme } from "../../global/styles/theme";
import Icon from "react-native-vector-icons/Feather";
import ModalShadow from "../../components/ModalShadow";
import CardContainer from "../../components/CardContainer";
import BtnSubmit from "../../components/BtnSubmit";

export default function ControleVaga({}) {
  const [typeControll, setTypeControll] = useState("event");
  const [allEvent, setAllEvent] = useState();
  let eventData = [];
  const [id, setId] = useState();
  const [idUser, setIdUser] = useState();
  const [Data, setData] = useState([]);
  const [page, setPage] = useState(0);
  const [menu, setMenu] = useState(false);

  const dataTypeControll = [
    { label: "Evento", value: "event" },
    { label: "Vaga", value: "vacancy" },
  ];

  useEffect(() => {
    api
      .get(`/${typeControll}-controller/1`)
      .then(({ data }) => {
        setAllEvent(data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [typeControll]);

  if (allEvent) {
    allEvent.map((item) => {
      if (item.idEventos) {
        eventData = eventData.concat([
          { label: item.titulo, value: item.idEventos },
        ]);
      } else {
        eventData = eventData.concat([
          { label: item.titulo, value: item.idVagas },
        ]);
      }
    });
  }

  useEffect(() => {
    if (id) {
      api
        .get(`/${typeControll}-controller/${1}/${id}/${page}`)
        .then(({ data }) => {
          setData(data.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [id]);

  // const handleReject = () => {
  //   api.delete(`/${typeControll}-controller/${1}/${id}/${page}`);
  // };

  // const handleAccept = () => {};

  return (
    <View style={{ flex: 1 }}>
      {menu && (
        <ModalShadow>
          <View style={styles.containerMenu}>
            <Icon
              name="x"
              size={35}
              style={{ alignSelf: "flex-end" }}
              onPress={() => {
                setMenu(false);
              }}
            />

            <BtnSubmit
              color={theme.colors.primary}
              text={"Aceitar"}
              // onPress={handleAccept()}
            />
            <BtnSubmit
              color={theme.colors.secondary}
              text={"Recusar"}
              // onPress={handleReject()}
            />
          </View>
        </ModalShadow>
      )}

      <StatusBar />

      <Menu />

      <View style={styles.containerPicker}>
        <TypePicker
          items={dataTypeControll}
          onValueChange={(value) => {
            setTypeControll(value);
            setAllEvent("");
          }}
          selectedValue={typeControll}
          width={"100%"}
          height={45}
          fontSize={20}
          border={true}
        />

        {eventData.length !== 0 && (
          <TypePicker
            placeholder={`Selecione ${
              typeControll === "event" ? "o evento" : "a vaga"
            }`}
            items={eventData}
            selectedValue={id}
            onValueChange={(value) => {
              setId(value);
            }}
            width={"100%"}
            height={45}
            fontSize={20}
            border={true}
          />
        )}
      </View>

      <View style={styles.containerShadow}>
        <FlatList
          style={styles.containerList}
          data={Data}
          ListHeaderComponent={() => {
            return (
              <View style={[format.row, styles.info]}>
                <Text style={[styles.text, { width: "35%" }]}> Nome </Text>
                <Text style={styles.text}> Idade </Text>
                <Text style={styles.text}> Curriculo </Text>
              </View>
            );
          }}
          renderItem={({ item }) => {
            return (
              <CardEvent
                nome={item.nome}
                idade={item.dataDeNascimento}
                id={item.tbl_login.idLogin}
                setMenu={(bool) => {
                  setMenu(bool);
                }}
                setId={(id) => {
                  setIdUser(id);
                }}
              />
            );
          }}
          keyExtractor={(item) => {
            item.tbl_login.idLogin;
          }}
        />
      </View>
    </View>
  );
}