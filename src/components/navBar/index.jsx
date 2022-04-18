import { View, Image, TouchableOpacity, SafeAreaView, Modal, Text } from "react-native";
import React, { useState } from "react";
import {styles} from './style'
import Icon from "react-native-vector-icons/Feather";
import { useNavigationState } from "@react-navigation/native";
import PropTypes from "prop-types";

export default function Menu(estado) {

    const [modalVisible, setModalVisible] = useState({estado});

  return (
      
    <SafeAreaView>
        <View style={styles.container}>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
            <Icon name="menu" style={styles.icons} size={30} />
        </TouchableOpacity>
        <View style={styles.options}>
            <TouchableOpacity onPress={() => {}}>
            <Icon name="message-circle" style={styles.icons} size={30} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {}}>
            <Icon name="bell" style={styles.icons} size={30} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {}}>
            <Icon name="settings" style={styles.icons} size={30} />
            </TouchableOpacity>
            <Image source={require("../../assets/img/fotoDePerfil.jpeg")} style={styles.profilePicture} />
        </View>
        </View>
        <Modal transparent visible={modalVisible}>
        <TouchableOpacity onPress={() => setModalVisible(false)}  style={{flex:1, alignItems:'flex-start', backgroundColor:"rgba(0, 0, 0, 0.4)"
}}>
            <SafeAreaView>
                <View style={styles.containerModalMenu}>
                    <Icon name="menu" style={styles.icons} size={30} />
                    <View style={styles.containerOpcoesModalMenu}>
                        <Icon name="home" style={styles.iconsModal} size={30}/>
                        <Text style={styles.txtOpcoesModalMenu}>Home</Text>
                    </View>
                    <View style={styles.containerOpcoesModalMenu}>
                        <Icon name="heart" style={styles.iconsModal} size={30}/>
                        <Text style={styles.txtOpcoesModalMenu}>Doar</Text>
                    </View>
                    <View style={styles.containerOpcoesModalMenu}>
                        <Icon name="layout" style={styles.iconsModal} size={30}/>
                        <Text style={styles.txtOpcoesModalMenu}>Feed</Text>
                    </View>
                    <View style={styles.containerOpcoesModalMenu}>
                        <Icon name="user" style={styles.iconsModal} size={30}/>
                        <Text style={styles.txtOpcoesModalMenu}>Perfil</Text>
                    </View>
                    <View style={styles.containerOpcoesModalMenu}>
                        <Icon name="calendar" style={styles.iconsModal} size={30}/>
                        <Text style={styles.txtOpcoesModalMenu}>Controle de Eventos</Text>
                    </View>
                </View>
            </SafeAreaView>
            </TouchableOpacity>
        </Modal>
    </SafeAreaView>
  );
}

Menu.propTypes ={
    estado:PropTypes.string
};