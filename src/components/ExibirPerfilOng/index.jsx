import React, {useState} from "react";
import { View, Text, Image } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import { api } from "../../../api";
import { styles } from "../../screens/perfilOng/style";


// const[ dataPost, setDataPost] = useState()

// useEffect(() => {
//   api.get(`/feed/post/ong/${idOng}`).then(({data}) => {
//     setDataPost(data)
//   }).catch((error) => {
//     console.log(error);
//   })

// }, [])


function ExibirPerfilOng(vp1, foto) {
  if (vp1 == 1) {
    return (
      <View className="Posts" style={{ width: "100%" }}>
        <View style={[styles.card, styles.shadowProp]}>
          <View style={{ flexDirection: "row" }}>
            <Image
              source={{uri: foto}}
              style={styles.fotoDePerfilPost}
            />
            <View style={{ flexDirection: "column", marginTop: 5 }}>
              <Text style={styles.txtNomeUsuarioPost}>"AACD"</Text>
              <Text style={styles.txtDataPost}>08/06/2022</Text>
            </View>
          </View>
          <View style={{ flexDirection: "column" }}>
            <Text style={{ color: "black" }}>
              É triste a realidade dos moradores de rua, eles vivem em situações precárias a nível extremo, entretanto, nós podemos mudar essa situação, entre em contato com a nossa ONG e faça uma doação.
            </Text>
            <Image
              source={require("../../assets/img/post.jpeg")}
              style={styles.imgPost}
            />
            <View style={styles.containerAcoesPost}>
              <Icon name="thumbs-up" style={styles.iconsAcoesPost} />
              <Text>1</Text>
              <Icon name="message-square" style={styles.iconsAcoesPost} />
              <Text>0</Text>
              <Icon name="share-2" style={styles.iconsAcoesPost} />
            </View>
          </View>
        </View>
      </View>
    );
  } else if (vp1 == 2) {
    return (
      <View className="Eventos" style={{ width: "100%" }}>
        <View style={[styles.card, styles.shadowProp]}>
          <View style={{ flexDirection: "row" }}>
            <Image
              source={{uri: foto}}
              style={styles.fotoDePerfilPost}
            />
            <View style={{ flexDirection: "column", marginTop: 5 }}>
              <Text style={styles.txtNomeUsuarioPost}>AACD</Text>
              <Text style={styles.txtDataDaVaga}>08/06/2022</Text>
            </View>
          </View>
          <View style={{ flexDirection: "column" }}>
            <Text numberOfLines={4} style={styles.txtDescricaoEventos}>
              Este é um evento totalmente gratuito de custos da viagem oferecidos pela AACD, precisamos de sua coragem para ajudar pessoas na guerra!!
            </Text>
            <Image
              source={require("../../assets/img/download.jpeg")}
              style={styles.imgPost}
            />
            <View style={styles.containerEspecificacoesEventos}>
              <View style={styles.containerEspecificacoesEventoDireito}>
                <View style={{ flexDirection: "row", marginVertical: 5 }}>
                  <Text style={styles.txtEspecificacoesEventosbolder}>
                    Objetivo:
                  </Text>
                  <Text style={styles.txtEspecificacoesEventos}>
                    {" "}
                    Encontrar pessoas que tenham coragem de sair do país para ir ajudar os necessitados da Guerra
                  </Text>
                </View>
                <View style={{ flexDirection: "row", marginVertical: 5 }}>
                  <Text style={styles.txtEspecificacoesEventosbolder}>
                    Data e Hora:
                  </Text>
                  <Text style={styles.txtEspecificacoesEventos}>
                    {" "}
                    08/06/2022
                  </Text>
                </View>
                <View style={{ flexDirection: "row", marginVertical: 5 }}>
                  <Text style={styles.txtEspecificacoesEventosbolder}>
                    Total de participantes:
                  </Text>
                  <Text style={styles.txtEspecificacoesEventos}> 101</Text>
                </View>
                <View style={{ flexDirection: "row", marginVertical: 5 }}>
                  <Text style={styles.txtEspecificacoesEventosbolder}>
                    Status:
                  </Text>
                  <View style={styles.containerStatus}>
                    <Text>Encerrado</Text>
                  </View>
                </View>
              </View>
              <View style={styles.containerbtnCandidaturas}>
                <View style={styles.btnCandidaturas}>
                  <Text>Candidatar-se</Text>
                </View>
                <View style={styles.btnCandidaturas}>
                  <Text>Participar</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  } else {
    return (
      <View className="Vagas" style={{ width: "100%" }}>
        <View style={[styles.cardVagas, styles.shadowProp]}>
          <View style={styles.containerDataDaVaga}>
            <Image
              source={{uri: foto}}
              style={styles.fotoDePerfilVaga}
            />
            <View style={{ flexDirection: "column", marginTop: 5 }}>
              <Text style={styles.txtNomeDeUsuarioVagas}>AACD</Text>
              <Text style={styles.txtDataDaVaga}>08/06/2022</Text>
            </View>
          </View>
          <View style={styles.containerTituloEDescricaoDaVaga}>
            <Text style={styles.txtTituloVagas}>Professor de libras</Text>
            <Text style={styles.txtDescricaoVagas}>
            : A procura de um candidato que se interesse por uma vaga de ensino para crianças sobre libras
            </Text>
            <View style={styles.containerBtnVagas}>
              <View style={styles.btnVagas}>
                <Text>Saiba Mais</Text>
              </View>
              <View style={styles.btnVagas}>
                <Text>Interesse</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export { ExibirPerfilOng };
