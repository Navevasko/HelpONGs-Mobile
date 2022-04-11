import { StyleSheet } from 'react-native'
import { theme } from '../../global/styles/theme';

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
        paddingStart:10,
        paddingEnd:30
    },
    titulo:{
        fontSize:25,
        fontFamily:theme.fonts.bold,
        color:theme.colors.primary,
        lineHeight:30,
        textAlign:'center',
        fontWeight:'600',
        marginBottom:5
    },
    txtSubtitulo:{
        fontSize:12,
        fontFamily:theme.fonts.medium,
        color:theme.colors.black,
        lineHeight:15,
        textAlign:'center',
        fontWeight:'500'
    },
    containerImg:{
        height:261,
        width:300,
        resizeMode:"contain",
        marginBottom:90
    },
    containerInput:{
        marginBottom:47
    },
});