import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

const FonteTitulo = "../../assets/fonts/Montserrat-Bold.ttf";
const FonteTexto = "../../assets/fonts/Montserrat-Regular.ttf" ;


export const styles = StyleSheet.create({
    containerImgBackground:{
        flex:1,
        resizeMode:"contain"
    },
    containerConteudo:{
        height:"100%",
        width:"100%",
        flexDirection:"column",
        alignItems:"center",
        justifyContent:"center",
    },
    imgPrincipal:{
        height:317,
        width:300,
        resizeMode:"contain",
    },
    titulo:{
        fontSize:25,
        color:theme.colors.primary,
        
    }

});