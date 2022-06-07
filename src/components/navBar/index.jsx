import { View, Image, TouchableOpacity, SafeAreaView, Modal, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import {styles} from './style'
import Icon from "react-native-vector-icons/Feather";
import { useNavigation } from "@react-navigation/native";
import PropTypes from "prop-types";
import { api } from "../../../api";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Menu({estado, idOng}) {

    const [modalVisible, setModalVisible] = useState(estado);
    const [modalNotificacoesVisible, setModalNotificacoesVisible] = useState(false);
    const navigation = useNavigation();
    const [data, setData] = useState([]);

    const handleLogout = () => {
        AsyncStorage.removeItem("UserLogin")
        navigation.navigate("SelecioneLoginOng")
    }

    useEffect(async() => {
        await api.get(`/ong/${idOng}`).then((response) => {
            setData(response.data.data);
        }).catch((error) => {
            console.log("erro get navBar", error);
        })
    },[])
    
  return (
      
    <SafeAreaView>
        <View style={styles.container}>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
        </TouchableOpacity>
        <View style={styles.options}>
            <TouchableOpacity onPress={() => {}}>
            <Icon name="settings" style={styles.icons} size={30} />
            </TouchableOpacity>
            <Image source={{uri: data.foto}} style={styles.profilePicture} />
        </View>
        </View>
        <Modal transparent visible={modalVisible}>
        <TouchableOpacity onPress={() => setModalVisible(false)}  style={{flex:1, alignItems:'flex-start', backgroundColor:"rgba(0, 0, 0, 0.4)"
}}>
            <SafeAreaView>
                <View style={styles.containerModalMenu}>
                    <Icon name="menu" style={styles.icons} size={30} />
                    <TouchableOpacity style={styles.containerOpcoesModalMenu}>
                        <Icon name="home" style={styles.iconsModal} size={30}/>
                        <Text style={styles.txtOpcoesModalMenu}>Home</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {navigation.navigate("Doar", {idOng}); setModalVisible(false);}} style={styles.containerOpcoesModalMenu}>
                        <Icon name="heart" style={styles.iconsModal} size={30}/>
                        <Text style={styles.txtOpcoesModalMenu}>Doar</Text>
                    </TouchableOpacity>
                    <View style={styles.containerOpcoesModalMenu}>
                        <Icon name="layout" style={styles.iconsModal} size={30}/>
                        <Text style={styles.txtOpcoesModalMenu}>Feed</Text>
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate("PerfilONG",{idOng})} style={styles.containerOpcoesModalMenu}>
                        <Icon name="user" style={styles.iconsModal} size={30}/>
                        <Text style={styles.txtOpcoesModalMenu}>Perfil</Text>
                    </TouchableOpacity>
                    <View style={styles.containerOpcoesModalMenu}>
                        <Icon name="calendar" style={styles.iconsModal} size={30}/>
                        <Text style={styles.txtOpcoesModalMenu}>Controle de Eventos</Text>
                    </View>
                    <View style={[styles.containerOpcoesModalMenu, {marginTop:100}]}>
                        <Icon name="settings" style={styles.iconsModal} size={30}/>
                        <Text style={styles.txtOpcoesModalMenu}>Configurações</Text>
                    </View>
                    <TouchableOpacity style={styles.containerOpcoesModalMenu} onPress={handleLogout} >
                        <Icon name="log-out" style={styles.iconsModal} size={30}/>
                        <Text style={styles.txtOpcoesModalMenu}>Logout</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
            </TouchableOpacity>
        </Modal>
        <Modal transparent visible={modalNotificacoesVisible}>
        <TouchableOpacity onPress={() => setModalNotificacoesVisible(false)}  style={{flex:1, alignItems:'flex-end', backgroundColor:"rgba(0, 0, 0, 0.4)"
}}>
            <SafeAreaView>
                <View style={styles.containerModalNotificacoes}>
                    <View style={styles.containerPerfilNotificacao}>
                        <Image
                            source={{uri: data.foto}}
                            style={styles.ImgNotificacao}
                        />
                        <Text>{data.nome}</Text>
                    </View>
                    <View style={styles.containerNotificacao}>
                        <Image
                            source={require('../../assets/img/fotoPerfilNotificao.png')}
                            style={styles.ImgNotificacao}
                        />
                        <View style={{flexDirection:"column"}}>
                            <Text style={styles.txtNome}>Maycon Douglas</Text>
                            <Text style={styles.txtDataNotificacao}>25 de fevereiro de 2022</Text>
                            <Text numberOfLines={2} style={styles.txtNotificacao}>Comentou em uma publicação sua: Simplesmente incrivel como faço para participar?</Text>
                        </View>
                    </View>
                    <View style={styles.containerNotificacao}>
                        <Image
                            source={require('../../assets/img/fotoPerfilNotificao.png')}
                            style={styles.ImgNotificacao}
                        />
                        <View style={{flexDirection:"column"}}>
                            <Text style={styles.txtNome}>Maycon Douglas</Text>
                            <Text style={styles.txtDataNotificacao}>25 de fevereiro de 2022</Text>
                            <Text numberOfLines={2} style={styles.txtNotificacao}>Comentou em uma publicação sua: Simplesmente incrivel como faço para participar?</Text>
                        </View>
                    </View>
                    <View style={styles.containerNotificacao}>
                        <Image
                            source={require('../../assets/img/fotoPerfilNotificao.png')}
                            style={styles.ImgNotificacao}
                        />
                        <View style={{flexDirection:"column"}}>
                            <Text style={styles.txtNome}>Maycon Douglas</Text>
                            <Text style={styles.txtDataNotificacao}>25 de fevereiro de 2022</Text>
                            <Text numberOfLines={2} style={styles.txtNotificacao}>Comentou em uma publicação sua: Simplesmente incrivel como faço para participar?</Text>
                        </View>
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