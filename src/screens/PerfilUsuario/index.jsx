import {
  View,
  StatusBar,
} from "react-native";
import React, {useState} from "react";
import BtnSubmit from "../../components/BtnSubmit";
import ModalCreate from "../../components/ModalCreate";

export default function PerfilUsuario() {

  const [modal, setModal] = useState(false)
  
  return (
    <View style={{ justifyContent: "center" }}>
      <StatusBar barStyle={"dark-content"} backgroundColor={"transparent"} />
      {modal && <ModalCreate isModalVisible={modal} onClose={() => {setModal(false)}} />}
      <BtnSubmit
        onPress={() => {
          setModal(true);
        }}
        text={"teste"}
        size={0}
      />
    </View>
  );
}
