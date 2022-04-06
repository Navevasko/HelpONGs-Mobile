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
        height:120,
        width:"100%",
        flexDirection:"column",
        marginTop:-20,
        paddingStart:18
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
        
        backgroundColor:theme.colors.primaryLight,
        marginLeft:5
    }


})