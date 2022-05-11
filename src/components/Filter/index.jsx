import { StyleSheet, Text, Modal, View, TouchableOpacity, ScrollView, Alert } from 'react-native'
import React, {useState} from 'react';
import { theme } from '../../global/styles/theme';
import Icon from "react-native-vector-icons/Feather";
import { api } from '../../../api';
import { FlatList } from 'react-native-gesture-handler';
import ItemFilter from '../ItemFilter';


export default function Filter() {
  const [filterVisible, setModalVisible] = useState(false);
  const [dataCategoria, setDataCategoria] = useState([]);
  
  React.useEffect(() =>{
    api.get(`/category`).then((response) => {
      setDataCategoria(response.data.data);
    });
  }, 
  []);
  
  
  return (
    <View>
    <TouchableOpacity onPress={() =>{setModalVisible(true)}} style={styles.boxFilter}>
      <Text>Filter</Text>
    </TouchableOpacity>
    <Modal animationType="fade" transparent visible={filterVisible} >
    <View>
    <View style={styles.container}>
    <View style={{flexDirection:"column-reverse"}}>
      <Icon
            name="x"
            size={25}
            style={styles.icon}
            onPress={() => {
              setModalVisible(false);
              }}
        />
      <Text style={styles.txtCategorias}>Categorias</Text>
    </View>
        <View style={styles.checkboxContainer}>
            <FlatList
              data={dataCategoria}
              keyExtractor={(item) => String(item.idCategorias)} 
              renderItem={({item}) =><ItemFilter item={item}/>}
            />
        </View>
        <View style={{flexDirection:'row', justifyContent:"space-around", paddingTop:5, alignItems:'center'}}>
          <TouchableOpacity style={styles.btnFiltrar} onPress={() => {
            console.log("ongs Filtradas");
          }}>
          <Text>Filtrar</Text>
          </TouchableOpacity>
          <TouchableOpacity>
          <Text>Limpar</Text>
          </TouchableOpacity>
        </View>
      </View>
      </View>
    </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    height:230,
    width:200,
    backgroundColor:theme.colors.primary,
    alignSelf:'flex-start',
    marginVertical:"30%",
    marginHorizontal:"5%",
    flexDirection:"column",
    padding:10,
    borderRadius:10
  },
  txtCategorias:{
    fontFamily:theme.fonts.bold,
    alignSelf:"flex-start"
  },
  icon:{
    color:theme.colors.black,
    alignSelf:"flex-end",
    marginTop:-20
  },
  boxFilter:{
    borderWidth:1,
    borderColor:theme.colors.black,
    height:30,
    width:90,
    borderRadius:5,
    padding:3
  },
  checkboxContainer:{
    height:160
  }
})