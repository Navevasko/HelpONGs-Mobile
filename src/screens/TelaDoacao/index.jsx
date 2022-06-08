import { Text, View, ScrollView, StatusBar, TouchableOpacity } from 'react-native'
import React, {useEffect, useState} from 'react'
import Menu from '../../components/navBar'
import { SafeAreaView } from 'react-native-safe-area-context'
import { styles } from './style'
import { api } from '../../../api'
import Filter from '../../components/Filter'
import ExibirDoar from '../../components/ExibirDoar'


export default function Doar({route}) {
  const [selectedValue, setSelectedValue] = useState();
  const [pesquisa, setPesquisa] = useState();
  const [dataOng, setDataOng] = useState([]);
  const [dataEstado, setDataEstado] = useState([]);
  // const [modalVisible, setModalVisible] = useState(false);
  const [exibir, setExibir] = useState("");
  const idOng = 1;
  console.log(route.params);
  

    useEffect(async() =>{
    await api.get(`/ong`).then((response) => {
      console.log(response.data.data)
    }).catch((error) => {
      console.log("error get ong doar",error);
    })
    await api.get('/uf').then((response) => {
      setDataEstado(response.data)
    }).catch((error) => {
      console.log("error get uf doar",error);
    })
}, []);


  return (
    <SafeAreaView>
    <StatusBar backgroundColor={'transparent'} barStyle={'dark-content'}/>
    <Menu idOng={idOng}/>
    <ScrollView style={styles.container}>
      <View style={styles.containerOpcoes}>
      <TouchableOpacity onPress={() => {setExibir("first")}}>
        <Text style={styles.txtOpcoes}>Recentes</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {setExibir("ExibirFavoritos")}}>
        <Text style={styles.txtOpcoes}>Favoritos</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
        <Text style={styles.txtOpcoes}>Mais Famosas</Text>
        </TouchableOpacity>
      </View>
      {ExibirDoar({exibir, dataOng, setDataOng})}
    </ScrollView>
    </SafeAreaView>
  )
}