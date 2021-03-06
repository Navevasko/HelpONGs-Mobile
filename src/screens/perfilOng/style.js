import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  imgDeFundo: {
    flex: 1,
    resizeMode: "contain",
  },
  containerConteudo: {
    height: "100%",
    width: "100%",
    flexDirection: "column",
  },
  containerFotoPerfileBanner: {
    height: 222,
    width: "90%",
    alignSelf: "center",
    marginTop: 8,
  },
  containerBanner: {
    height: 163,
    width: "100%",
    backgroundColor:theme.colors.grey,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  imageBanner: {
    height: "100%",
    width: "100%",
    resizeMode: "cover",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  containerFotoDePerfil: {
    height: 100,
    width: 100,
    borderRadius: 50,
    borderWidth: 4,
    borderColor: theme.colors.white,
    alignSelf: "flex-start",
    marginTop: -60,
    marginStart: -10,
    backgroundColor: theme.colors.white,
  },
  imageFotoDePerfil: {
    height: "100%",
    width: "100%",
    resizeMode: "cover",
    borderRadius: 50,
  },
  containerAcoesPerfil: {
    height: "12%",
    minWidth: "75%",
    maxWidth:"80%",
    flexDirection: "row",
    justifyContent: 'space-between',
    marginTop: 4,
    alignSelf: "flex-end",

  },
  containerDescricao: {
    width: "100%",
    flexDirection: "column",
    marginTop: -20,
    paddingStart: 18,
  },
  containerNomeCategorias: {
    flexDirection: "row",
    flexWrap:"wrap",
    marginVertical:5
  },
  nomeOng: {
    fontSize: 20,
    color: theme.colors.black,
    fontFamily: theme.fonts.name,
  },
  containerCategorias: {
    flexDirection: "row",
    height: 18,
  },
  categorias: {
    height: 20,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    backgroundColor: theme.colors.primaryLight,
    marginLeft: 5,
    textAlign: "center",
    paddingLeft: 5,
    paddingRight: 5,
    marginTop: 4,
  },
  txtSeguidores: {
    color: theme.colors.placeholder,
    fontWeight: "400",
    lineHeight: 13,
    fontSize: 12,
    fontFamily: theme.fonts.semibold,
    marginTop: 5,
  },

  txtDescricao: {
    width: "85%",
  },

  iconRedesSociais: {
    color: theme.colors.secondary,
    fontSize: 20,
    marginRight: 5,
  },

  containerTxtVagasPostsEventos: {
    // backgroundColor:"aqua",
    marginTop: 10,
  },

  txtAcoesOngs: {
    height: 35,
    fontSize: 25,
    marginLeft: 20,
    fontFamily: theme.fonts.medium,
    color: theme.colors.grey,
    marginBottom: 5,
  },

  buttonStylex: {
    color: theme.colors.black,
  },

  card: {
    backgroundColor: theme.colors.white,
    borderRadius: 8,
    width: "93%",
    alignSelf: "center",
    marginVertical: 10,
    paddingLeft: 17,
    paddingRight: 9,
    paddingTop: 5,
    paddingBottom: 10,
    elevation: 8,
  },
  cardVagas: {
    backgroundColor: theme.colors.white,
    borderRadius: 8,
    width: "93%",
    alignSelf: "center",
    alignContent: "center",
    marginVertical: 10,
    paddingLeft: 17,
    paddingRight: 9,
    paddingTop: 10,
    paddingBottom: 10,
    elevation: 5,
  },
  containerDataDaVaga: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 5,
  },
  fotoDePerfilVaga: {
    height: 65,
    width: 65,
    resizeMode: "cover",
    borderRadius: 50,
    marginRight: 10,
    marginBottom: 5,
  },
  txtNomeDeUsuarioVagas: {
    fontFamily: theme.fonts.name,
    fontSize: 20,
    letterSpacing: -0.02,
    lineHeight: 21,
    fontWeight: "700",
    marginBottom: 5,
  },
  txtDataDaVaga: {
    fontFamily: theme.fonts.semiBold,
    color: theme.colors.placeholder,
    fontSize: 13,
    lineHeight: 13,
    letterSpacing: -0.02,
  },
  containerTituloEDescricaoDaVaga: {
    flexDirection: "column",
    textAlign: "center",
    width: "85%",
    alignSelf: "center",
    marginTop: 15,
  },
  txtTituloVagas: {
    fontFamily: theme.fonts.bold,
    fontSize: 20,
    letterSpacing: -0.02,
    color: theme.colors.black,
    lineHeight: 22,
    textAlign: "center",
    marginBottom: 5,
  },
  txtDescricaoVagas: {
    fontFamily: theme.fonts.medium,
    fontSize: 16,
    lineHeight: 18,
    textAlign: "center",
  },
  containerBtnVagas: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 5,
    alignSelf: "center",
    width: "90%",
    marginTop: 15,
    marginBottom: 10,
   
  },
  btnVagas: {
    height: 40,
    width: 108,
    backgroundColor: theme.colors.primary,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    paddingLeft: 10,
    paddingRight: 10,
  },
  shadowProp: {
    shadowColor: "#171717",
  },
  containerEspecificacoesEventos: {
    marginTop: 5,
    flexDirection: "row",
    width:"100%"
  },
  txtEspecificacoesEventosbolder: {
    color: theme.colors.black,
    fontFamily: theme.fonts.medium,
    fontWeight: "bold",
    fontSize: 15,
  },
  txtEspecificacoesEventos: {
    fontFamily: theme.fonts.medium,
    fontSize: 13,
    marginVertical: 3,
  },

  txtDescricaoEventos:{
    color:theme.colors.black,
    fontFamily:theme.fonts.medium,
    fontSize:13,
    textAlign:"justify",
    letterSpacing:-0.02
  },

  containerStatus: {
    height: 28,
    width: 115,
    backgroundColor: theme.colors.secondary,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 7,
    marginLeft: 20,
    marginBottom: 10,
  },

  containerbtnCandidaturas:{
    flexDirection:"column",
    alignSelf:'flex-end',
    height:70,
    right:0,
    position:"absolute"
  },

  btnCandidaturas: {
    backgroundColor: theme.colors.primaryFaded,
    marginBottom: 10,
    borderRadius: 7,
    height: 28,
    width: 115,
    alignItems: "center",
    justifyContent: "center",

  },

  fotoDePerfilPost: {
    height: 50,
    width: 50,
    resizeMode: "cover",
    borderRadius: 50,
    marginRight: 15,
    marginBottom: 5,
  },
  imgPost: {
    height: 168,
    width: "100%",
    borderRadius: 10,
    resizeMode: "cover",
    marginTop: 10,
  },

  containerAcoesPost: {
    flexDirection: "row",
    marginTop: 12,
  },

  iconsAcoesPost: {
    fontSize: 15,
    color: theme.colors.primary,
    marginHorizontal: 5,
    // marginRight:-1,
    marginTop: 2,
  },
  txtNomeUsuarioPost: {
    fontFamily: theme.fonts.name,
    fontSize: 15,
    letterSpacing: -0.02,
    lineHeight: 18,
    fontWeight: "400",
    marginTop:5
  },
  txtDataPost:{
      color:theme.colors.placeholder,
      fontSize:11,
      fontFamily:theme.fonts.regular,
      marginLeft:2
  },
  txtDescricaoPosts:{
      fontFamily:theme.fonts.medium,
      fontSize:12,
      lineHeight:14,
      letterSpacing: -0.02,
      color:theme.colors.black,
      
  }

});
