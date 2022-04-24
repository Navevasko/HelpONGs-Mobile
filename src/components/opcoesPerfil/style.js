import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

const FonteTitulo = "../../assets/fonts/Montserrat-Bold.ttf";
const FonteTexto = "../../assets/fonts/Montserrat-Regular.ttf" ;


export const styles = StyleSheet.create({
    containerOpcoes:{
        height:"100%",
        width:60,
        padding:3,
        flexDirection:"row",
        backgroundColor:theme.colors.primary,
        borderRadius:3,
        alignItems:"center",
        justifyContent:"space-between",
        marginLeft:"2%",
        paddingRight:6
    },
    icon:{
        height:15,
        width:15,
        marginBottom:2,
    },
    txt:{
        fontSize: 12,
        color:theme.colors.black,
        lineHeight:12,
        letterSpacing:-0.02,
        marginRight:2,
        marginTop:2,
        marginLeft:4
        
    }
})