import { View, Text, ImageBackground, ScrollView, StatusBar, Image, TouchableOpacity } from 'react-native'
import React, { createElement, useState } from 'react'
import { styles } from './style'
import { theme } from '../../global/styles/theme'
import Menu from '../../components/navBar'
import Icon from "react-native-vector-icons/Feather";
import OpcoesPerfil from '../../components/opcoesPerfil';
import { api } from '../../../api'

function Exibir (vp1) {
  if(vp1 == 1){
    return(
    <View className='Posts' style={{ width:"100%"}}>
      <View style={[styles.card, styles.shadowProp]}>
        <View style={{flexDirection:"row"}}>
          <Image
            source={require('../../assets/img/fotoDePerfil.jpeg')}
            style={styles.fotoDePerfilPost}
          />
          <View style={{flexDirection:"column", marginTop:5}}>
              <Text style={styles.txtNomeUsuarioPost}>O tal do Jorg1nh00</Text>
              <Text style={styles.txtDataPost}>25 de fevereiro de 2022</Text>
          </View>
        </View>
        <View style={{flexDirection:"column"}}>
          <Text style={{color:"black"}}>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
          </Text>
          <Image
            source={require('../../assets/img/post.jpg')}
            style={styles.imgPost}
          />        
          <View style={styles.containerAcoesPost}>
            <Icon
              name='thumbs-up'
              style={styles.iconsAcoesPost}
            />
            <Text>16</Text>
            <Icon
              name='message-square'
              style={styles.iconsAcoesPost}
            />
            <Text>16</Text>
            <Icon
              name='share-2'
              style={styles.iconsAcoesPost}
            />
          </View>                 
        </View>
      </View>


              <View style={[styles.card, styles.shadowProp]}>
                <View style={{flexDirection:"row"}}>
                  <Image
                    source={require('../../assets/img/fotoDePerfil.jpeg')}
                    style={styles.fotoDePerfilPost}
                  />
                  <View style={{flexDirection:"column", marginTop:5}}>
                  <Text style={styles.txtNomeUsuarioPost}>O tal do Jorg1nh00</Text>
              <Text style={styles.txtDataPost}>25 de fevereiro de 2022</Text>
                  </View>
                </View>
                <View style={{flexDirection:"column"}}>
                  <Text style={styles.txtDescricaoPosts}>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                  </Text>
                  <Image
                    source={require('../../assets/img/post.jpg')}
                    style={styles.imgPost}
                  />
                  <View style={styles.containerAcoesPost}>
                    <Icon
                      name='thumbs-up'
                      style={styles.iconsAcoesPost}
                    />
                    <Text>16</Text>
                    <Icon
                      name='message-square'
                      style={styles.iconsAcoesPost}
                    />
                    <Text>16</Text>
                    <Icon
                      name='share-2'
                      style={styles.iconsAcoesPost}
                    />
                  </View>
                </View>
              </View>
    </View>
    )
  }else if(vp1 == 2){
    return(
      <View className='Eventos' style={{width:"100%"}}>
        <View style={[styles.card, styles.shadowProp]}>
        <View style={{flexDirection:"row"}}>
          <Image
            source={require('../../assets/img/fotoDePerfil.jpeg')}
            style={styles.fotoDePerfilPost}
          />
          <View style={{flexDirection:"column", marginTop:5}}>
              <Text style={styles.txtNomeUsuarioPost}>O tal do Jorg1nh0</Text>
              <Text style={styles.txtDataDaVaga}>25 de fevereiro de 2022</Text>
          </View>
        </View>
        <View style={{flexDirection:"column"}}>
          <Text numberOfLines={4}  style={styles.txtDescricaoEventos}>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
          </Text>
          <Image
            source={require('../../assets/img/download.jpeg')}
            style={styles.imgPost}
          />        
          <View style={styles.containerEspecificacoesEventos}>
            <View style={styles.containerEspecificacoesEventoDireito}>
              <View style={{flexDirection:"row", marginVertical:5}}>
                <Text style={styles.txtEspecificacoesEventosbolder}>Objetivo:</Text>
                <Text style={styles.txtEspecificacoesEventos}> Velit officia conseq</Text>
              </View> 
              <View style={{flexDirection:"row",  marginVertical:5}}>
                <Text style={styles.txtEspecificacoesEventosbolder}>Data e Hora:</Text>
                <Text style={styles.txtEspecificacoesEventos}> 26 de Janeiro às 12:00</Text>
              </View>     
              <View style={{flexDirection:"row", marginVertical:5 }}>
                <Text style={styles.txtEspecificacoesEventosbolder}>Total de participantes:</Text>
                <Text style={styles.txtEspecificacoesEventos}> 101</Text>
              </View>
              <View style={{flexDirection:"row", marginVertical:5}}>
                <Text style={styles.txtEspecificacoesEventosbolder}>Status:</Text>
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
      )
  }else{
    return(
      <View className='Vagas' style={{width:"100%"}}>
        <View style={[styles.cardVagas, styles.shadowProp]}>
          <View style={styles.containerDataDaVaga}>
            <Image
              source={require('../../assets/img/fotoDePerfil.jpeg')}
              style={styles.fotoDePerfilVaga}
            />
            <View style={{flexDirection:"column", marginTop:5}}>
                <Text style={styles.txtNomeDeUsuarioVagas}>O tal do Jorg1nh0</Text>
                <Text style={styles.txtDataDaVaga}>25 de fevereiro de 2022</Text>
            </View>
          </View>
          <View style={styles.containerTituloEDescricaoDaVaga}>
          <Text style={styles.txtTituloVagas}>Professor de Informática</Text>
          <Text style={styles.txtDescricaoVagas}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</Text>
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
      )
  }
}

export default function PerfilONG() {

  const [teste, setTeste] = useState();
  const [idOng, setIdOng] = useState(1);
  const [dataOng, setDataOng] = useState([]);
  // const [cores, setCores] = useState(styles.txtAcoesOngs);
  // const [ligar, setLigar] = useState(true);

  // const trocarDeCor = () => {
  //   !setLigar();

  //   if (ligar) {
  //     setCores(styles.buttonStylex);
  //   } else {
  //     setCores(styles.txtAcoesOngs)
  //   }
  // }

  React.useEffect( () =>{

    api.get(`/ong/${idOng}`).then((response) => {
      setDataOng(response.data.data)
    });

  }, [])
  
  return (
    <ImageBackground
        style={styles.imgDeFundo}
        source={require('../../assets/img/imgBackPerfilONG.png')}
    >
     <StatusBar backgroundColor={'transparent'} barStyle={'dark-content'}/>
     <Menu
       estado="false"
       dataOng
     />
        <ScrollView style={styles.containerConteudo}>
            <View style={styles.containerFotoPerfileBanner}>
              <View style={styles.containerBanner}>
                <Image
                  style={styles.imageBanner}
                  source={{uri: dataOng.banner}}
                />
                <View style={styles.containerFotoDePerfil}>
                  <Image
                    style={styles.imageFotoDePerfil}
                    source={{uri: dataOng.foto}}
                  />
                </View>
              </View>
              <View style={styles.containerAcoesPerfil}>
                <OpcoesPerfil
                 iconName="plus-circle"
                 fontSize={15}
                 color={theme.colors.black}
                 text="Seguir"
                />
                <OpcoesPerfil
                 iconName="heart"
                 fontSize={15}
                 color={theme.colors.black}
                 text="Doar"
                />
                <OpcoesPerfil
                 iconName="message-circle"
                 fontSize={15}
                 color={theme.colors.black}
                 text="Chat"
                />
                <View style={{marginLeft:20}}>
                  <OpcoesPerfil
                  iconName="edit"
                  fontSize={15}
                  color={theme.colors.black}
                  text="Editar"
                  />
                </View>
              </View>
            </View>
            <View style={styles.containerDescricao}>
              <View style={styles.containerNomeCategorias}>
                <Text style={styles.nomeOng}>{dataOng.nome}</Text>
                <View style={styles.containerCategorias} >
                  <Text style={styles.categorias}>Natureza</Text>
                  <Text style={styles.categorias}>Fome</Text>
                  <Text style={styles.categorias}>Saúde</Text>
                </View>
              </View>
              <Text style={styles.txtSeguidores}>127 seguidores / 60 seguindo</Text>
              <Text numberOfLines={5} style={styles.txtDescricao}>{dataOng.descricao}</Text>
              <View style={{flexDirection:"row", marginTop:10}}>
                <Icon name="facebook"style={styles.iconRedesSociais}/>
                <Text>ÈoJorg1nh0</Text>
              </View>
              <View style={{flexDirection:"row", marginTop:5}}>
                <Icon name="instagram"style={styles.iconRedesSociais}/>
                <Text>gfjgjgjghj</Text>
              </View>
              <View style={{flexDirection:"row", marginTop:5}}>
                <Icon name="more-horizontal"style={styles.iconRedesSociais}/>
                <Text>Mais Informações</Text>
              </View>
            </View>
            <View style={styles.containerTxtVagasPostsEventos}>
              <View style={{flexDirection:"row"}}>
                <TouchableOpacity onPress={() =>  {setTeste(1)}}>
                  <Text style={styles.txtAcoesOngs}>Posts</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {setTeste(2)}}>
                <Text style={styles.txtAcoesOngs}>Eventos</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {setTeste(3)}}>
                <Text style={styles.txtAcoesOngs}>Vagas</Text>
                </TouchableOpacity>
              </View>
              <View style={{flexDirection:"column"}}>
              {Exibir(teste)}
              {/* <View className='03' style={{height:200, width:"100%", backgroundColor:"green"}}></View> */}
              </View>
            </View>
        </ScrollView>

    </ImageBackground>
  )
}