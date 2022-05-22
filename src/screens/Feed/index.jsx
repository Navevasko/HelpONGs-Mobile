import {
  View,
  Text,
  StatusBar,
  ScrollView,
  TextInput,
  Image,
} from "react-native";
import React from "react";
import { styles } from "./style";
import Menu from "../../components/navBar";
import Icon from "react-native-vector-icons/Feather";
import { theme } from "../../global/styles/theme";
import EventoPreview from "../../components/EventoPreview";
import Post from "../../components/Post";

export default function Feed() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={"transparent"} barStyle={"dark-content"} />
      <Menu />
      <ScrollView>
        <View style={styles.search}>
          <Icon name="search" size={30} color={theme.colors.grey} />
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

        <Post />
        <Post />
        <Post />
      </ScrollView>
    </View>
  );
}
