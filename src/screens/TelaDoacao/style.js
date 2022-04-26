import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container:{
      height:"100%",
      width:"100%",
      backgroundColor:"aqua",
      flexDirection:"column"
    },
    containerOpcoes:{
        height:50,
        width:"100%",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-around",
        
    },
    txtOpcoes:{
      fontSize:20,
      fontFamily:theme.fonts.semiBold,
      color:theme.colors.black,
      
    },
    containerPesquisa:{
      paddingLeft:20,
      paddingRight:20,
      flexDirection:"row",
      alignItems:"center",
      // justifyContent:"space-around",
    },
    boxFilter:{
      borderWidth:1,
      borderColor:theme.colors.black,
      height:30,
      width:90,
      borderRadius:5,
      padding:3
    },
    containerSelectEstado:{
      paddingLeft:20,
      paddingRight:20,
      flexDirection:"column"
    },
    select:{
      height:50,
      borderWidth:1,
      borderColor:theme.colors.black,
      borderRadius:5
    },

    contanerCardsDoar:{
      flexDirection:"row",
      flexWrap:"wrap"
    }
  });