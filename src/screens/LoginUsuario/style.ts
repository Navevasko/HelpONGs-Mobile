import { StyleSheet } from "react-native";

const FonteTitulo = "../../assets/fonts/Montserrat-Bold.ttf";
const FonteTexto = "../../assets/fonts/Montserrat-Regular.ttf" ;


export const styles = StyleSheet.create({
    container:{
        height:"100%",
        width:"100%",
        flexDirection:"column"
    },
    containerLogo:{
        height: 45,
        width:"100%",
        display:"flex",
        flexDirection:"row",
        alignItems: "flex-start",
        marginTop:25,
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
        fontFamily: FonteTexto,
        fontSize:14,
        lineHeight:17,
        fontWeight:'400',
        color:"#292929",
        marginLeft:12,
    },

});