import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

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
        paddingEnd:30,
        paddingStart:30,
    },
    imgPrincipal:{
        height:317,
        width:300,
        resizeMode:"contain",
    },
    titulo:{
        fontSize:30,
        color:theme.colors.primary,
        textAlign:"center",
        fontWeight:"700",
        letterSpacing:-0.02,
        lineHeight:30,
        fontFamily:theme.fonts.medium,
        marginBottom:-55
    },
    txtEmail:{
        textAlign:"center",
        fontSize:18,
        color:theme.colors.black,
        lineHeight:21,
        letterSpacing:-0.02,
        fontWeight:"600",
        marginTop:-40,
        marginBottom:14
    },
    txtInput:{
        textAlign:"center"
    },

    containerBtn:{
        marginTop:83,
    }

});