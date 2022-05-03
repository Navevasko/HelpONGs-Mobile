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
import User from '../../../api/Controllers/userController'
import ModalPost from "../../components/ModalPost";
import BtnSubmit from "../../components/BtnSubmit";

export default function PerfilUsuario() {

  const [modal, setModal] = useState(false)
  
  return (
    <View style={{ justifyContent: "center" }}>
      <StatusBar barStyle={"dark-content"} backgroundColor={"transparent"} />
      {modal && <ModalPost />}
      <BtnSubmit
        onPress={() => {
          setModal(true);
        }}
        text={"teste"}
      />
    </View>
  );
}
