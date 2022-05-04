import { Text, View, ScrollView, StatusBar, TouchableOpacity } from 'react-native'
import React, {useEffect, useState} from 'react'
import Menu from '../../components/navBar'
import { SafeAreaView } from 'react-native-safe-area-context'
import { styles } from './style'
import CardDoar from '../../components/cardDoar'
import Select from '../../components/Select'
import { api } from '../../../api'
import InputPesquisar from '../../components/InputPesquisar'
import Filter from '../../components/Filter'


export default function Doar() {
  const [selectedValue, setSelectedValue] = useState();
  const [pesquisa, setPesquisa] = useState();
  const [dataOng, setDataOng] = useState([]);
  const [dataEstado, setDataEstado] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  React.useEffect(() =>{
    api.get(`/ong`).then((response) => {
      setDataOng(response.data.data)
    });
    api.get('/uf').then((response) => {
      setDataEstado(response.data)
    }); 
}, []);


  return (
    <SafeAreaView>
    <StatusBar backgroundColor={'transparent'} barStyle={'dark-content'}/>
    <Menu/>
    <ScrollView style={styles.container}>
      <View style={styles.containerOpcoes}>
        <Text style={styles.txtOpcoes}>Recentes</Text>
        <Text style={styles.txtOpcoes}>Favoritos</Text>
        <Text style={styles.txtOpcoes}>Mais Famosas</Text>
      </View>
      <View style={styles.containerPesquisa}>
        <TouchableOpacity onPress={() =>{setModalVisible(true)}} style={styles.boxFilter}>
          <Text>Filter</Text>
        </TouchableOpacity>
        {modalVisible && <Filter visible={modalVisible}/>}
        <InputPesquisar/>
      </View>
      <View style={styles.containerSelectEstado}>
      <Text style={styles.txtTituloEstado}>Estados</Text>
      <Select options={dataEstado} onChangeSelect={(id) => alert(id)}/>
      </View>
      <View style={styles.containerCardsDoar}>
      {
        
        dataOng.map(ong => {
          return (
            <CardDoar data={ong} key={ong.idOng} /> 
          )
        })
      }
      </View>
    </ScrollView>
    </SafeAreaView>
  )
}

