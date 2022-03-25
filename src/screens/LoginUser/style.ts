import { setStatusBarBackgroundColor } from "expo-status-bar";
import { StyleSheet } from "react-native";

const FonteTitulo = "../../assets/fonts/Montserrat-Bold.ttf";
const FonteTexto = "../../assets/fonts/Montserrat-Regular.ttf" ;


export const styles = StyleSheet.create({
    container:{
        height:"100%",
        width:"100%",
        flexDirection:"column",
        backgroundColor:"#FFFFFF",
    },
    containerLogo:{
        height: 45,
        width:135,
        display:"flex",
        flexDirection:"row",
        alignItems: "flex-start",
        marginTop:25,
        // backgroundColor:"lightblue",
    },
    containerImgPrincipal:{
        height:288,
        width:386,
        marginLeft:5,
    },

    titulo:{
        // fontFamily: FonteTitulo,
        fontSize:48,
        fontWeight:'bold',
        marginLeft:10,
        color: "#FF9F45",
        lineHeight:58,
        
        
        // letterSpacing:'-0.02%',
        
    },
});