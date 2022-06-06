import { StyleSheet, Text, View, TouchableOpacity, Modal, FlatList, SafeAreaView } from 'react-native'
import React, {useState} from 'react'
import Icon from "react-native-vector-icons/Feather";
import { theme } from '../../global/styles/theme';

export default function SelectCategoria({options, onChangeSelect}) {
    const [txt, setTxt] = useState("Adcione uma categoria");
    const [modalVisible, setModalVisible ] = useState(false);
    const [data, setData] = useState([]);

    function renderOption(item){
        return(
            <TouchableOpacity onPress={()=>{onChangeSelect(item.nome); setModalVisible(false)}} style={styles.optionContainer}>
                <Text style={styles.txtOption}>{item.nome}</Text>
            </TouchableOpacity>
        )
    }
  return (
    <View>
      <TouchableOpacity style={styles.container} onPress={()=>setModalVisible(true)}>
        <Text style={styles.txtSelecione}>{txt}</Text>
        <Icon
            name="chevron-down"
            size={15}
        />
      </TouchableOpacity>
      <Modal animationType="slide" visible={modalVisible} onRequestClose={() => setModalVisible(false)}>
      <SafeAreaView>
        <View style={styles.headerModal}>
        <TouchableOpacity onPress={()=>setModalVisible(false)}>
            <Icon
                name="chevron-left"
                size={30}
            />
        </TouchableOpacity>
        <Text style={styles.modalTitulo}>{txt}</Text>
        <TouchableOpacity onPress={()=>setModalVisible(false)}>
            <Text style={styles.modalCancel}>Cancelar</Text>
        </TouchableOpacity>
        </View>
        <FlatList
            data={ options ?? [""]}
            keyExtractor={(item) => String(item.idCategorias)} renderItem={({item}) =>renderOption(item)}
        />
      </SafeAreaView>
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        height:50,
        borderWidth:1,
        borderColor:"#CCC",
        fontSize:18,
        flexDirection:"row",
        alignItems:'center',
        justifyContent:"space-between",
        paddingHorizontal:12,
        marginBottom:5,
        borderRadius:5
    },
    txtSelecione:{
        fontSize:16,
        color:"#555"
    },
    headerModal:{
        flexDirection:"row",
        alignItems:'center',
        justifyContent:"space-between",
        paddingHorizontal:12,
        borderBottomColor:'#ddd',
        borderBottomWidth:1,
        paddingBottom:12
    },
    modalTitulo:{
        fontSize:18,
        color:theme.colors.placeholder
    },
    modalCancel:{
        fontSize:14,
        color:"blue",
        fontWeight:"bold"
    },
    optionContainer:{
        flexDirection:"row",
        borderBottomColor:"#eee",
        alignItems:'center',
        justifyContent:'space-between',
        borderBottomWidth:1,
        padding:10
    },
    txtOption:{
        fontSize:16, 
        fontFamily:theme.fonts.medium,
        color:theme.colors.black
    }

})