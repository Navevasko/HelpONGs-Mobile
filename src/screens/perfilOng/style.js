import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    imgDeFundo:{
        flex:1,
        resizeMode:"contain",
    },
    containerConteudo:{
        height:"100%",
        width:"100%",
        flexDirection:"column"
    },
    containerFotoPerfileBanner:{
        height:222,
        width:"90%",
        alignSelf:"center",
        marginTop:8
    },
    containerBanner:{
        height:163,
        width:"100%",
    },
    imageBanner:{
        height:"100%",
        width:"100%",
        resizeMode:"cover",
        borderTopRightRadius:20,
        borderTopLeftRadius:20
    },
    containerFotoDePerfil:{
        height:100,
        width:100,
        borderRadius:50,
        borderWidth: 4,
        borderColor:theme.colors.white,
        alignSelf:"flex-start",
        marginTop:-60,
        marginStart:-10,
        backgroundColor:theme.colors.white
    },
    imageFotoDePerfil:{
        height:"100%",
        width:"100%",
        resizeMode:"contain",
        borderRadius:50,
    },
    containerAcoesPerfil:{
        height:20,
        width:"75%",
        flexDirection:"row",
        marginTop:4,
        alignSelf:"flex-end", 
    }, 
    containerDescricao:{
        width:"100%",
        flexDirection:"column",
        marginTop:-20,
        paddingStart:18,
    },
    containerNomeCategorias:{
        flexDirection:"row"
    },
    nomeOng:{
       fontSize:20,
       color:theme.colors.black,
       fontFamily:theme.fonts.name
    }, 
    containerCategorias:{
        flexDirection:"row",
        height:18,
    },
    categorias:{
        height:25,
        justifyContent:"center",
        alignItems:"center",
        borderRadius:15,
        backgroundColor:theme.colors.primaryLight,
        marginLeft:5,
        textAlign:"center",
        paddingLeft:5,
        paddingRight:5,
        marginTop:4,
    },
    txtSeguidores:{
        color:theme.colors.placeholder,
        fontWeight:"400",
        lineHeight:13,
        fontSize:12,
        fontFamily:theme.fonts.semibold,
        marginTop: 5
    },

    txtDescricao:{
        width:"85%"
    },

    iconRedesSociais:{
        color:theme.colors.secondary,
        fontSize:20,
        marginRight:5
    },

    containerTxtVagasPostsEventos:{
        // backgroundColor:"aqua",
        marginTop:10
    },

    txtAcoesOngs:{
        height:35,
        fontSize:25,
        marginLeft:20,
        fontFamily:theme.fonts.medium,
        color:theme.colors.grey,
        marginBottom:5
    },

    buttonStylex:{
        color:theme.colors.black
    },

    card: {
        backgroundColor:theme.colors.white,
        borderRadius: 8,
        width: '93%',
        alignSelf:"center",
        marginVertical: 10,
        paddingLeft:17,
        paddingRight:9,
        paddingTop:5,
        paddingBottom:10,
        elevation:20
      },
    shadowProp: {
        shadowColor: '#171717',
      },
    containerEspecificacoesEventos:{
        marginTop:5,
        flexDirection:"row"
    },
    txtEspecificacoesEventosbolder:{
        color:theme.colors.black,
        fontFamily:theme.fonts.medium,
        fontWeight:"bold",
        fontSize:15,
    },
    txtEspecificacoesEventos:{
        fontFamily:theme.fonts.medium,
        fontSize:13,
        marginVertical:3
    },

    containerStatus:{
        height:28,
        width:115,
        backgroundColor:theme.colors.secondary,
        alignItems:"center",
        justifyContent:"center",
        borderRadius:7,
        marginLeft:20,
        marginBottom:10
    },

    btnCandidaturas:{
        backgroundColor:theme.colors.primaryFaded,
        marginBottom:10,
        borderRadius:7,
        height:28,
        width:115,
        alignItems:"center",
        justifyContent:"center",
    },

    fotoDePerfilPost:{
        height:50,
        width:50,
        resizeMode:"cover",
        borderRadius:50,
        marginRight:15,
        marginBottom:5
    },
    imgPost:{
        height:168,
        width:"100%",
        borderRadius:10,
        resizeMode:"cover",
        marginTop:10
    },

    containerAcoesPost:{
        flexDirection:"row",
        marginTop:12
    },

    iconsAcoesPost:{
        fontSize:15,
        color:theme.colors.primary,
        marginHorizontal:5,
        // marginRight:-1,
        marginTop:2
    }

})