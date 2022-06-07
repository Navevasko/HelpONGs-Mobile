import { setStatusBarBackgroundColor } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

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
        // backgroundColor:"lightblue",
        // marginTop:15
    },
    containerImgPrincipal:{
        height:288,
        width:386,
        marginLeft:5,
    },

    titulo:{
        fontFamily: theme.fonts.bold,
        fontSize:48,
        fontWeight:'bold',
        marginLeft:10,
        color: "#FF9F45",
        lineHeight:58,  
        // letterSpacing:'-0.02%',
        
    },
    containerInput:{
        width:"100%",
        
    },

    containerEsqueciSenha:{
        width:"100%",
        height:17,
        paddingRight:27,
    },

    txtEsqueciSenha:{
        width:129,
        height:17,
        alignSelf:"flex-end",
        textDecorationLine:"underline",
        fontSize:14,
        lineHeight:17,
        color:"#292929"
    },

    containerBtnLogin:{
        marginTop:23,
    },
    
    containerLinha:{
        height:19,
        width:318,
        flexDirection:"row",
        marginTop:25,
        alignSelf:"center",
        justifyContent:"space-between"
    },
    
    txtMudarDeOpcao:{
        fontWeight:"bold",
        marginTop:-5,
        fontSize:14,
        lineHeight:17
    },

    linha:{
        width:110,
        height:1,
        backgroundColor:"#8C8C8C"
    },

    imgIconeGoogle:{
        height:83,
        width:83,
        alignSelf:"center",
        marginTop:-10,
    },

    containerCriarUmaConta:{
        height:47,
        width:"100%",
        alignItems:"center",
        marginTop: 10,
    },

    txtCriarUmaConta:{
        fontWeight:"300",
        lineHeight:22,
        fontSize:18,
        color:"#FF9F45" 
    },

    txtNaoTemConta:{
        fontWeight:"300",
        lineHeight:22,
        fontSize:18,
        color:"#292929" 
    }


});