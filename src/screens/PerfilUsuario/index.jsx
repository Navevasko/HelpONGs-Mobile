import {
  View,
  Text,
  ImageBackground,
  StatusBar,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Menu from "../../components/Menu";
import { styles } from "./style";
import { Icon } from "react-native-vector-icons/Feather";
import { theme } from "../../global/styles/theme";
import ProfileOptions from "../../components/ProfileOptions";
import PersonalData from "../../components/PersonalData";

export default function PerfilUsuario() {
  return (
    <View>
      <StatusBar backgroundColor={"transparent"} barStyle={"dark-content"} />
      <Menu />

      <ScrollView style={styles.container}>
        <View style={styles.containerFotoPerfileBanner}>
          <View style={styles.containerBanner}>
            <Image
              style={styles.imageBanner}
              source={require("../../assets/img/Banner.png")}
            />
            <View style={styles.containerFotoDePerfil}>
              <Image
                style={styles.imageFotoDePerfil}
                source={require("../../assets/img/ProfilePicture.png")}
              />
            </View>
          </View>
          <View style={styles.containerAcoesPerfil}>
            <ProfileOptions
              iconName="plus-circle"
              fontSize={15}
              color={theme.colors.black}
              text="Seguir"
            />
            <ProfileOptions
              iconName="heart"
              fontSize={15}
              color={theme.colors.black}
              text="Doar"
            />
            <ProfileOptions
              iconName="message-circle"
              fontSize={15}
              color={theme.colors.black}
              text="Chat"
            />
            <View style={{ marginLeft: 20 }}>
              <ProfileOptions
                iconName="edit"
                fontSize={15}
                color={theme.colors.black}
                text="Editar"
              />
            </View>
          </View>
        </View>

        <View style={styles.containerDescricao}>
          <View style={styles.containerNomeCategorias}>
            <Text style={styles.nomeOng}>TESTE</Text>
            <View style={styles.containerCategorias}>
              <Text style={styles.categorias}>Natureza</Text>
              <Text style={styles.categorias}>Fome</Text>
              <Text style={styles.categorias}>Saúde</Text>
            </View>
          </View>
          <Text style={styles.txtSeguidores}>127 seguidores / 60 seguindo</Text>
          <Text  style={styles.txtDescricao}>
            TESTE
          </Text>
        </View>

        <View>
          <PersonalData/>
        </View>

      </ScrollView>
    </View>
  );
}