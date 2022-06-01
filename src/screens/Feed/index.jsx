import { View, Text, StatusBar, ScrollView, TextInput } from "react-native";
import React, { useEffect, useState } from "react";
import { styles } from "./style";
import Menu from "../../components/navBar";
import Icon from "react-native-vector-icons/Feather";
import { theme } from "../../global/styles/theme";
import EventoPreview from "../../components/EventoPreview";
import Post from "../../components/Post";
import Evento from "../../components/Evento";
import Vaga from "../../components/Vaga";
import CreatePost from "../../components/CreatePost";
import { api } from "../../../api";
import { format } from "../../global/styles/format";
import BtnSubmit from "../../components/BtnSubmit";
import ModalVagaInformation from "../../components/ModalVagaInformation";

export default function Feed({}) {
  const [Data, setData] = useState();
  const [OpenModalVaga, setOpenModalVaga] = useState(true);
  const [idVaga, setIdVaga] = useState();

  useEffect(() => {
    api
      .get("/feed/0")
      .then(({ data }) => {
        setData(data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <View style={styles.container}>
      {OpenModalVaga && (
        <ModalVagaInformation
          onClose={() => {
            setOpenModalVaga(false);
          }}
        />
      )}
      <StatusBar backgroundColor={"transparent"} barStyle={"dark-content"} />
      <Menu />
      <ScrollView>
        <View style={styles.search}>
          <Icon name="search" size={30} color={theme.colors.secondary} />
          <TextInput
            style={styles.searchInput}
            placeholder={"Pesquise por uma ONG"}
            selectionColor={theme.colors.primaryFaded}
          />
        </View>

        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={styles.containerEventoPreview}
        >
          <EventoPreview
            title={"Evento Mil"}
            ONGProfilePic={require("../../assets/img/ONG.png")}
            imagem={require("../../assets/img/Evento.png")}
          />

          <EventoPreview
            title={"Evento Mil"}
            ONGProfilePic={require("../../assets/img/ONG.png")}
            imagem={require("../../assets/img/Evento.png")}
          />

          <EventoPreview
            title={"Evento Mil"}
            ONGProfilePic={require("../../assets/img/ONG.png")}
            imagem={require("../../assets/img/Evento.png")}
          />

          <EventoPreview
            title={"Evento Mil"}
            ONGProfilePic={require("../../assets/img/ONG.png")}
            imagem={require("../../assets/img/Evento.png")}
          />

          <EventoPreview
            title={"Evento Mil"}
            ONGProfilePic={require("../../assets/img/ONG.png")}
            imagem={require("../../assets/img/Evento.png")}
          />

          <EventoPreview
            title={"Evento Mil"}
            ONGProfilePic={require("../../assets/img/ONG.png")}
            imagem={require("../../assets/img/Evento.png")}
          />
        </ScrollView>

        <CreatePost />

        {Data != undefined &&
          Data.map((card) => (
            <Vaga
              titulo={card.titulo}
              desc={card.descricao}
              ONGdata={card.tbl_ong}
              date={card.dataDeCriacao}
              setOpenModal={(data) => [setOpenModalVaga(data)]}
              idVaga={card.idVagas}
              key={card.idVagas}
            />
          ))}
      </ScrollView>
    </View>
  );
}
