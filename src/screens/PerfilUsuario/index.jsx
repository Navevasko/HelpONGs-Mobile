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

export default function PerfilUsuario({Id}) {

  const [userData, setUserData] = useState([])

  
  useEffect(() => {
    api.get(`/user/${1}`).then(({data}) => {
      setUserData(data.data)
    }).catch((error) => {
      console.log( "Erro na tela de Perfil de Usuário" , error );
    })
  }, [])
  
  console.log(userData);

  return (

    
    <View>
      <StatusBar backgroundColor={"transparent"} barStyle={"dark-content"} />
      <Menu />

      <ScrollView style={styles.container}>
        <View style={styles.containerFotoPerfileBanner}>
          <View style={styles.containerBanner}>
            <Image
              style={styles.imageBanner}
              source={!userData.banner ? {uri: userData.banner} : require('../../assets/img/Banner.jpeg')}
            />
            <View style={styles.containerFotoDePerfil}>
              <Image
                style={styles.imageFotoDePerfil}
                source={!userData.foto ? {uri: userData.foto} : require("../../assets/img/User.png")}
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
        </View>

          <PersonalData cep={'Jandira'} date={userData.dataDeNascimento} number={ '(11) 35173-6972' } />

          <Followers followers={userData.tbl_seguidor}/>

      </ScrollView>
    </View>
  );
}
