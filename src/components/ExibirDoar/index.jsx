import { Text, View, TouchableOpacity, } from 'react-native'
import React, {useState, useEffect} from 'react'
import {styles} from '../../screens/TelaDoacao/style.js'
import CardDoar from '../../components/cardDoar'
import CardDoarFavorito from '../CardDoarFavorito/index.jsx'
import Select from '../../components/Select'
import Filter from '../../components/Filter'
import InputPesquisar from '../inputPesquisar/index.jsx'
import { api } from '../../../api/index.js'
import { useNavigation } from '@react-navigation/native'

export default function ExibirDoar({exibir, dataOng, setDataOng}) {
    // console.log(dataOng)
    const [modalVisible, setModalVisible] = useState(false);
    const [dataEstado, setDataEstado] = useState([]);
    const [dataOngFavoritadas, setDataOngsFavoritadas] = useState([]);
    const [idUser, setIdUser] = useState(5);
    const [type, setType] = useState("teste");
    const [ongsFiltradas, setOngsFiltradas] = useState([]);
    // const [teste, setTeste] = useState(dataOng);
    const [nomeOngFiltradas, setnomeOngFiltradas] =useState([]);
    const [search, setSearch] = useState('');
    
    React.useEffect(() =>{
        api.get(`/favorite/${idUser}`).then((response) =>{
            setDataOngsFavoritadas(response.data.data);
        }).catch((error) =>{
            console.log("erro de ongsFavoritadas Pelo usúario", )
        }) 
        api.get(`/category`).then((response) =>{    
            setType(response.data.data)
        })
    }, []);

    
    // if(nomeOngFiltradas.length != 0){ 

    //     const ongsFiltradas = []; 
        
    //     dataOng.map((ong) => { 
        
    //     if (nomeOngFiltradas.includes(ong.nome)) { 
        
    //     ongsFiltradas.push(ong); 
        
    //     } 
    // }); 

    // // console.log(ongsFiltradas); 
    
    // setDataOng(ongsFiltradas); 
    
    // } 

    /**** PESQUISAR PELAS ONGS ******/
    useEffect(() =>{
        searchOng();
    }, [])

    const searchOng = (text) =>{
        
         if(text){
            const ResultSearchOngs = dataOng.filter((item) =>{
                const itemData = item.nome ? item.nome.toUpperCase() : ''.toUpperCase();
                const textData = text.toUpperCase();
                return itemData.indexOf(textData) > -1;
                
            });
            
            setDataOng(ResultSearchOngs);
            console.log(text);

        }else{
            setDataOng(dataOng);
            setSearch(text);
        }
        // console.log(ResultSearchOngs)
    }

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
                    <Filter setnomeOngFiltradas={setnomeOngFiltradas} nomeOngFiltradas={nomeOngFiltradas}/>
                    {/* {console.log(nomeOngFiltradas)} */}

                    <InputPesquisar onChangeText={text =>{{searchOng(text)}}} />
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