import {
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
  Modal,
  Text,
} from "react-native";
import React, { useState } from "react";
import { styles } from "./style";
import Icon from "react-native-vector-icons/Feather";
import PropTypes from "prop-types";

export default function Menu(estado, dataOng) {
  const [modal, setModal] = useState(false);
  const [modalNotifications, setModalNotifications] = useState(false);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => setModal(true)}>
          <Icon name="menu" style={styles.icons} size={30} />
        </TouchableOpacity>
        <View style={styles.options}>
          <TouchableOpacity onPress={() => {}}>
            <Icon name="message-circle" style={styles.icons} size={30} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setModalNotifications(true)}>
            <Icon name="bell" style={styles.icons} size={30} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <Icon name="settings" style={styles.icons} size={30} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <Image source={require("../../assets/img/ProfilePicture.png")} style={styles.profilePicture} />
          </TouchableOpacity>
        </View>
      </View>
      <Modal animationType="fade" transparent visible={modal}>
        <TouchableOpacity
          onPress={() => setModal(false)}
          style={{
            flex: 1,
            alignItems: "flex-start",
            backgroundColor: "rgba(0, 0, 0, 0.4)",
          }}
        >
          <SafeAreaView>
            <View style={styles.containerModalMenu}>
              <Icon name="menu" style={styles.icons} size={30} />
              <TouchableOpacity style={styles.containerOpcoesModalMenu}>
                <Icon name="home" style={styles.iconsModal} size={30} />
                <Text style={styles.txtOpcoesModalMenu}>Home</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate("Doar")}
                style={styles.containerOpcoesModalMenu}
              >
                <Icon name="heart" style={styles.iconsModal} size={30} />
                <Text style={styles.txtOpcoesModalMenu}>Doar</Text>
              </TouchableOpacity>
              <View style={styles.containerOpcoesModalMenu}>
                <Icon name="layout" style={styles.iconsModal} size={30} />
                <Text style={styles.txtOpcoesModalMenu}>Feed</Text>
              </View>
              <TouchableOpacity
                onPress={() => navigation.navigate("PerfilONG")}
                style={styles.containerOpcoesModalMenu}
              >
                <Icon name="user" style={styles.iconsModal} size={30} />
                <Text style={styles.txtOpcoesModalMenu}>Perfil</Text>
              </TouchableOpacity>
              <View style={styles.containerOpcoesModalMenu}>
                <Icon name="calendar" style={styles.iconsModal} size={30} />
                <Text style={styles.txtOpcoesModalMenu}>
                  Controle de Eventos
                </Text>
              </View>
              <View
                style={[styles.containerOpcoesModalMenu, { marginTop: 100 }]}
              >
                <Icon name="settings" style={styles.iconsModal} size={30} />
                <Text style={styles.txtOpcoesModalMenu}>Configurações</Text>
              </View>
              <View style={styles.containerOpcoesModalMenu}>
                <Icon name="log-out" style={styles.iconsModal} size={30} />
                <Text style={styles.txtOpcoesModalMenu}>Logout</Text>
              </View>
            </View>
          </SafeAreaView>
        </TouchableOpacity>
      </Modal>
      <Modal transparent visible={modalNotifications}>
        <TouchableOpacity
          onPress={() => setModalNotifications(false)}
          style={{
            flex: 1,
            alignItems: "flex-end",
            backgroundColor: "rgba(0, 0, 0, 0.4)",
          }}
        >
          <SafeAreaView>
            <View style={styles.containerModalNotificacoes}>
             
            </View>
          </SafeAreaView>
        </TouchableOpacity>
      </Modal>
    </SafeAreaView>
  );
}

Menu.propTypes = {
  estado: PropTypes.string,
};
