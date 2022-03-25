import { setStatusBarBackgroundColor } from "expo-status-bar";
import { StyleSheet } from "react-native";

const FonteTitulo = "../../assets/fonts/Montserrat-Bold.ttf";
const FonteTexto = "../../assets/fonts/Montserrat-Regular.ttf" ;


export const styles = StyleSheet.create({
    container:{
        height:"100%",
        width:"100%",
        flexDirection:"column"
        
    },
    ImageBackground:{
        height:"100%",
        width:"100%",
        resizeMode:"contain",
        
    },

    containerLogo:{
        height: 45,
        width:135,
        display:"flex",
        flexDirection:"row",
        alignItems: "flex-start",
        // marginTop:25,
        // backgroundColor:"lightblue",
    },
    containerImgPrincipal:{
        height:320,
        width:320,
        // backgroundColor:"black", 
        marginTop:55,
        marginLeft:5,
    },

    titulo:{
        fontFamily: FonteTitulo,
        fontSize:35,
        fontWeight:'700',
        marginLeft:10,
        color: "#FF9F45",
        lineHeight:43,
        textAlign:'justify',
        // letterSpacing:'-0.02%',
        
    },

    texto:{
        fontFamily: FonteTitulo,
        fontSize:14,
        lineHeight:17,
        fontWeight:'400',
        color:"#292929",
        marginLeft:12,
    },

    btntexto:{
        fontSize:18,
        fontWeight:'500',
        lineHeight:22,
        textAlign:"center",
        color:"#292929",

    },

    btnLogin:{
        height:39,
        width:129,
        marginLeft:13,
        marginTop:8,
        borderRadius:40,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"#FF9F45",

    },

    containerProximaPagina:{
        height:69,
        width:"100%",
        flexDirection:"row",
        marginTop:11,
        justifyContent:"flex-end",
    },

    btnProximaPagina:{
        height:69,
        width:69,
        marginRight:25,
        marginTop: -10,
    }

});