import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    imgDeFundo:{
        flex:1,
        resizeMode:"contain",
    },
    containerConteundo:{
        height:"100%",
        width:"100%",
        flexDirection:"column",
        alignItems:"center",
        justifyContent:"center",
        paddingStart:10,
        paddingEnd:30
    },
    imgPrincipal:{
        height:261,
        width:300,
        resizeMode:"contain",
    },
    txt:{
        color:theme.colors.black,
        fontFamily:theme.fonts.medium,
        fontSize:14,
        lineHeight:17,
        letterSpacing:-0.02,
        fontWeight:'500',
        marginTop:54,
        textAlign:"center"
    },
    txtDestaque:{
        color:theme.colors.primary,
        fontFamily:theme.fonts.semiBold,
        fontSize:36,
        lineHeight:43,
        letterSpacing:-0.02,
        fontWeight:'500',
        textAlign:"center",
        marginBottom:78,
    }
})