import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        width: "100%",
        height: 45,
        backgroundColor:theme.colors.white,
        alignItems: "center",
        justifyContent: "space-between",
        padding: 10,
        
    },
    options: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "50%",
    },
    icons: {
        width: 30,
        height: 30,
        color: theme.colors.secondary
    },
    iconsModal: {
        width: 30,
        height: 30,
        color: theme.colors.placeholder
    },
    profilePicture: {
        width: 40,
        height: 40,
        borderRadius:50
    },

    containerModalMenu:{
        width:"60%",
        backgroundColor:theme.colors.white,
        minHeight:"65%",
        maxHeight:"90%",
        borderBottomRightRadius:10,
        borderTopRightRadius:10,
        elevation:20,
        flexDirection:"column",
        padding:10
    },

    containerOpcoesModalMenu:{
        flexDirection:"row",
        marginLeft:10,
        marginTop:15,
    },
    txtOpcoesModalMenu:{
        color:theme.colors.placeholder,
        fontSize:20,
        fontFamily:theme.fonts.medium,
        marginLeft:20,
        marginTop:3
    }
})
