import { Text, View, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import { styles } from "../../screens/TelaDoacao/style.js";
import CardDoar from "../CardDoar/index.jsx";
import CardDoarFavorito from "../CardDoarFavorito/index.jsx";
import Select from "../../components/Select";
import Filter from "../../components/Filter";
import InputPesquisar from "../InputPesquisar/index.jsx";
import { api } from "../../../api/index.js";
import { useNavigation } from "@react-navigation/native";

export default function ExibirDoar({ exibir, dataOng, setDataOng }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [dataEstado, setDataEstado] = useState([]);
  const [dataOngFavoritadas, setDataOngsFavoritadas] = useState([]);
  const [idUser, setIdUser] = useState(5);
  const [type, setType] = useState("teste");
  const [ongsFiltradas, setOngsFiltradas] = useState([]);
  const [teste, setTeste] = useState([]);
  const [search, setSearch] = useState("");
  const [ufOngs, setUfOngs] = useState([]);
  

  React.useEffect(() => {
    api
      .get(`/favorite/${idUser}`)
      .then((response) => {
        setDataOngsFavoritadas(response.data.data);
      })
      .catch((error) => {
        console.log("erro de ongsFavoritadas Pelo usúario");
      });
    api.get(`/category`).then((response) => {
      setType(response.data.data);
    });
    api.get(`/ong`).then((response) => {
      setTeste(response.data.data);
    });
    api.get("/uf").then((response) => {
        setDataEstado(response.data.data);
    });
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
  useEffect(() => {
    searchOng();
    // filtroPorEstado();
  }, []);

  const filtroPorEstado = (nome) => {
    api
      .post("/uf/filter", {
        uf: nome
      })
      .then(async (response) =>{
        const tbl_ongs = [];
        await response.data.data.map((ong) => {
          tbl_ongs.push(ong.tbl_ong);
        })

        setTeste(tbl_ongs);
      })

      // const ongsFiltradas = [];
      // const ResultFilterOngsEstados = dataOng.filter((item) => {

        
      //   if (ufOngs.length > 0) {
      //     ufOngs.map((uf, index) => {
      //     const itemId = item.idOng;
      //     if(itemId == uf.idOng){
      //       api.get(`/ong/${uf.idOng}`).then((response) => {
      //         ongsFiltradas.push(response.data.data);
              
      //       })
      //       console.log("oiiiiii",ongsFiltradas);
      //     }
          
          
          // });
        // }
      // })

      // console.log(ResultFilterOngsEstados);
      
  };

  const searchOng = (text) => {
    if (text) {
      const ResultSearchOngs = dataOng.filter((item) => {
        const itemData = item.nome ? item.nome.toUpperCase() : "".toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });

      setTeste(ResultSearchOngs);
      setSearch("");
    } else {
      setTeste(dataOng);
      setSearch(text);
    }
    // console.log(ResultSearchOngs)
  };

  if (exibir == "ExibirFavoritos") {
    return (
      <View style={styles.containerCardsFavoritos}>
        {dataOngFavoritadas.map((ongFavorita) => {
          return (
            <CardDoarFavorito data={ongFavorita} key={ongFavorita.idOng} />
          );
        })}
      </View>
    );
  } else {
    return (
      <View>
        <View style={styles.containerPesquisa}>
          <Filter exibirOngFiltradas={setTeste} />

          <InputPesquisar
            value={search}
            onChangeText={(text) => {
              {
                searchOng(text);
              }
            }}
          />
        </View>
        <View style={styles.containerSelectEstado}>
          <Text style={styles.txtTituloEstado}>Estados</Text>
          {/* {console.log(dataEstado)} */}
          <Select options={dataEstado} onChangeSelect={(nome) => filtroPorEstado(nome)} />
        </View>
        <View style={styles.containerCardsDoar}>
          {teste.map((ong) => {
            return <CardDoar data={ong} key={ong.idOng} />;
          })}
        </View>
      </View>
    );
  }
}

// const styles = StyleSheet.create({

// })