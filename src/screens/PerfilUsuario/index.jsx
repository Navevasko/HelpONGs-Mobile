import {
  View,
  Text,
  ImageBackground,
  StatusBar,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import React, {useState, useEffect} from "react";
import Menu from "../../components/Menu";
import { styles } from "./style";
import { Icon } from "react-native-vector-icons/Feather";
import { theme } from "../../global/styles/theme";
import ProfileOptions from "../../components/ProfileOptions";
import PersonalData from "../../components/PersonalData";
import Followers from "../../components/Follows";
import User from '../../../api/Controllers/userController'
import { api } from "../../../api";

export default function PerfilUsuario(Id) {

  const [userData, setUserData] = useState(async() => {
    const get = await User.getId(3)
    setUserData(get)
    
  })

  console.log(userData)
  

  return (
    <View>
      <StatusBar backgroundColor={"transparent"} barStyle={"dark-content"} />
      <Menu />

      <ScrollView style={styles.container}>
        <View style={styles.containerFotoPerfileBanner}>
          <View style={styles.containerBanner}>
            <Image
              style={styles.imageBanner}
              source={{uri: userData.banner}}
            />
            <View style={styles.containerFotoDePerfil}>
              <Image
                style={styles.imageFotoDePerfil}
                source={{uri: userData.foto}}
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
            <Text style={styles.nomeOng}>{userData.nome}</Text>
            <View style={styles.containerCategorias}>
              <Text style={styles.categorias}>Voluntário</Text>
            </View>
          </View>
          <Text style={styles.txtSeguidores}>127 seguidores / 60 seguindo</Text>
          <Text  style={styles.txtDescricao}>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. 
          </Text>
        </View>

          <PersonalData cep={'Jandira'} date={userData.dataDeNascimento} number={ '(11) 35173-6972' } />

          <Followers/>

      </ScrollView>
    </View>
  );
}
