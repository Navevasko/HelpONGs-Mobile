import { Text, View, TouchableOpacity, } from 'react-native'
import React, {useState, useEffect} from 'react'
import {styles} from '../../screens/TelaDoacao/style.js'
import CardDoar from '../../components/cardDoar'
import CardDoarFavorito from '../CardDoarFavorito/index.jsx'
import Select from '../../components/Select'
import Filter from '../../components/Filter'
import InputPesquisar from '../../components/InputPesquisar'
import { api } from '../../../api/index.js'
import { useNavigation } from '@react-navigation/native'

export default function ExibirDoar(exibir, dataOng) {

    const [modalVisible, setModalVisible] = useState(false);
    const [dataEstado, setDataEstado] = useState([]);
    const [dataOngFavoritadas, setDataOngsFavoritadas] = useState([]);
    const [idUser, setIdUser] = useState(5);
    const navigation = useNavigation();

    React.useEffect(() =>{
        api.get(`/favorite/${idUser}`).then((response) =>{
            setDataOngsFavoritadas(response.data.data);
        }).catch((error) =>{
            console.log("erro de ongsFavoritadas Pelo usúario", )
        }) 
    }, []);
// console.log(dataOngFavoritadas);
    if(exibir == "ExibirFavoritos"){
        
        return(
            <View style={styles.containerCardsFavoritos}>
                {
                    dataOngFavoritadas.map(ongFavorita => {
                        return (
                            <CardDoarFavorito data={ongFavorita} key={ongFavorita.idOng}/>
                        )
                    })
                }
            </View>
        )
    }else{
        return(
            <View>
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
            </View>
        )
    }

}

// const styles = StyleSheet.create({
    
// })