import {
  View,
  StatusBar,
  ScrollView,
  TextInput,
  ToastAndroid,
  RefreshControl,
  ActivityIndicator,
  FlatList,
} from "react-native";
import React, { useEffect, useState, useRef, useCallback } from "react";
import { styles } from "./style";
import Menu from "../../components/navBar";
import Icon from "react-native-vector-icons/Feather";
import { theme } from "../../global/styles/theme";
import EventoPreview from "../../components/EventoPreview";
import Post from "../../components/Post";
import Evento from "../../components/Evento";
import Vaga from "../../components/Vaga";
import CreatePost from "../../components/CreatePost";
import { api } from "../../../api";
import ModalVagaInformation from "../../components/ModalVagaInformation";
import SearchResult from "../../components/SearchResult";
import ModalExcluir from "../../components/ModalExcluir";
import ModalEventoInformation from "../../components/ModalEventoInformation";
import ModalCreate from "../../components/ModalCreate";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Feed({}) {
  const [Data, setData] = useState([]);
  const [OpenModalVaga, setOpenModalVaga] = useState(false);
  const [OpenModalEvento, setOpenModalEvento] = useState(false);
  const [id, setId] = useState();
  const [idOng, setIdOng] = useState();
  const [type, setType] = useState();
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [searchData, setSearchData] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [page, setPage] = useState(0);
  const [modalExcluir, setModalExcluir] = useState(false);
  const [modalEditar, setModalEditar] = useState(true);
  const scrollRef = useRef();
  const [atEnd, setAtEnd] = useState(false);
  const [openModalCreate, setOpenModalCreate] = useState(false);
  const [user, setUser] = useState()

  const isCloseToBottom = useCallback(
    ({ layoutMeasurement, contentOffset, contentSize }) => {
      return layoutMeasurement.height + contentOffset.y >= contentSize.height;
    }
  );

  useEffect(() => {
    AsyncStorage.getItem("UserLogin").then((data) => {
      setUser(JSON.parse(data))
    })
  }, [])

  console.log(user);

  useEffect(() => {
    let isMounted = true;

    api
      .get(`/feed/${page}`)
      .then(({ data }) => {
        if (data.data.length !== 0) {
          if (Data) {
            if (isMounted) {
              if (Data.length >= 18) {
                setData(data.data);
              } else {
                setData(Data.concat(data.data));
              }
            }
          }
        } else {
          setAtEnd(true);
        }
      })
      .catch((error) => {
        console.log(error);
      });

    return () => {
      isMounted = false;
    };
  }, [page]);

  const wait = (timeout) => {
    return new Promise((resolve) => setTimeout(resolve, timeout));
  };

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    api
      .get(`/feed/0`)
      .then(({ data }) => {
        setRefreshing(false);
        setData([]);
        wait(1000).then(() => {
          setData(data.data);
        });
        setAtEnd(false);
      })
      .catch((error) => {
        setRefreshing(false);
        console.log(error);
      });
  });

  const handleSearch = useCallback(async (searchString) => {
    if (searchString) {
      api
        .get("/ong")
        .then(({ data }) => {
          const filter = data.data.filter((item) => {
            const name = item.nome.toUpperCase();
            const search = searchString.toUpperCase();

            if (name.includes(search)) {
              return item;
            }
          });
          setSearchData(filter);
        })
        .catch((error) => {
          console.log(error);
          ToastAndroid.show(
            "Ocorreu um erro, por favor tente novamente",
            ToastAndroid.SHORT
          );
        });
    } else {
      setSearchData([]);
    }
  });

  return (
    <View style={styles.container}>
      {openModalCreate && (
        <ModalCreate
          onClose={() => {
            setOpenModalCreate(false);
          }}
          foto={user ? user.data.foto : ""}
          nome={user ? user.data.nome : ""}
        />
      )}

      {OpenModalVaga && (
        <ModalVagaInformation
          onClose={() => {
            setOpenModalVaga(false);
          }}
          idVaga={id}
          idOng={idOng}
        />
      )}

      {OpenModalEvento && (
        <ModalEventoInformation
          onClose={() => {
            setOpenModalEvento(false);
          }}
          idEvento={id}
          idOng={idOng}
        />
      )}

      {modalExcluir && (
        <ModalExcluir
          id={id}
          type={type}
          idOng={idOng}
          setModal={(bool) => {
            setModalExcluir(bool);
          }}
          setPage={(number) => {
            setPage(number);
          }}
        />
      )}

      <StatusBar backgroundColor={"transparent"} barStyle={"dark-content"} />
      <Menu />
      <View>
        <View>
          <View style={styles.search}>
            <Icon name="search" size={30} color={theme.colors.secondary} />
            <TextInput
              style={styles.searchInput}
              placeholder={"Pesquise por uma ONG"}
              selectionColor={theme.colors.primaryFaded}
              value={search}
              onChangeText={(text) => {
                setSearch(text);
                handleSearch(text);
              }}
            />
            {search !== "" && (
              <Icon
                name="x"
                size={20}
                onPress={() => {
                  setSearch("");
                }}
              />
            )}
          </View>

          {search !== "" && <SearchResult searchData={searchData} />}
        </View>

        {Data && (
          <FlatList
            showsVerticalScrollIndicator={false}
            ref={scrollRef}
            ListHeaderComponent={
              <>
                <ScrollView
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                  style={styles.containerEventoPreview}
                >
                  {Data &&
                    Data.map((item) => {
                      if (item.tbl_evento_media) {
                        return (
                          <EventoPreview
                            title={item.titulo}
                            imagem={item.tbl_evento_media[0].url}
                            ONGProfilePic={item.tbl_ong.foto}
                            key={Math.random()}
                          />
                        );
                      } else {
                        return;
                      }
                    })}
                </ScrollView>

                <CreatePost
                  setOpenModal={(bool) => {
                    setOpenModalCreate(bool);
                  }}
                  image={user ? user.data.foto : ""}
                />
              </>
            }
            refreshControl={
              <RefreshControl
                tintColor={theme.colors.primary}
                refreshing={refreshing}
                onRefresh={() => {
                  onRefresh();
                  setAtEnd(false);
                  setPage(0);
                }}
              />
            }
            onScroll={({ nativeEvent }) => {
              if (isCloseToBottom(nativeEvent)) {
                setPage(page);
                if (!atEnd) {
                  setLoading(true);

                  wait(1000).then(() => {
                    setPage(page + 1);
                    setLoading(false);
                  });
                }
              }
            }}
            contentContainerStyle={{
              paddingBottom: loading ? 200 : 140,
              paddingTop: 10,
            }}
            data={Data}
            keyExtractor={Math.random}
            renderItem={({ item }) => {
              let type = item.type;
              if (type == "post") {
                return (
                  <Post
                    idOng={item.idOng}
                    idPost={item.idPost}
                    ONGdata={item.tbl_ong}
                    fileArray={item.tbl_post_media}
                    desc={item.descricao}
                    date={item.dataDeCriacao}
                    setIdPost={(id) => {
                      setId(id);
                    }}
                    setIdOng={(id) => {
                      setIdOng(id);
                    }}
                    setType={(type) => {
                      setType(type);
                    }}
                    setEditar={(bool) => {
                      setModalEditar(bool);
                    }}
                    setExcluir={(bool) => {
                      setModalExcluir(bool);
                    }}
                  />
                );
              } else if (type == "evento") {
                return (
                  <Evento
                    idOng={item.idOng}
                    idEvento={item.idEventos}
                    ONGdata={item.tbl_ong}
                    fileArray={item.tbl_evento_media}
                    titulo={item.titulo}
                    desc={item.descricao}
                    date={item.dataDeCriacao}
                    candidatos={item.candidatos}
                    setIdEvento={(id) => {
                      setId(id);
                    }}
                    setIdOng={(id) => {
                      setIdOng(id);
                    }}
                    setType={(type) => {
                      setType(type);
                    }}
                    setEditar={(bool) => {
                      setModalEditar(bool);
                    }}
                    setExcluir={(bool) => {
                      setModalExcluir(bool);
                    }}
                    setOpenModal={(bool) => {
                      setOpenModalEvento(bool);
                    }}
                  />
                );
              } else if (type == "vaga") {
                return (
                  <Vaga
                    idOng={item.idOng}
                    titulo={item.titulo}
                    desc={item.descricao}
                    ONGdata={item.tbl_ong}
                    date={item.dataDeCriacao}
                    setType={(type) => {
                      setType(type);
                    }}
                    setOpenModal={(data) => {
                      setOpenModalVaga(data);
                    }}
                    idVaga={item.idVagas}
                    setIdVaga={(id) => {
                      setId(id);
                    }}
                    setIdOng={(id) => {
                      setIdOng(id);
                    }}
                    setEditar={(bool) => {
                      setModalEditar(bool);
                    }}
                    setExcluir={(bool) => {
                      setModalExcluir(bool);
                    }}
                  />
                );
              }
            }}
          />
        )}
      </View>

      {loading && (
        <ActivityIndicator
          size={60}
          color={theme.colors.secondary}
          style={{ position: "absolute", bottom: 0, alignSelf: "center" }}
        />
      )}
    </View>
  );
}
