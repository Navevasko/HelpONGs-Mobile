import { StyleSheet, TouchableOpacity, View, SafeAreaView, Image } from 'react-native'
import React from 'react'
import { theme } from '../../global/styles/theme'
import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';

import LoginONG from '../../screens/LoginONG';

const imgConfiguracoes = require('../../assets/img/settings.png')
const imgDePerfil = require('../../assets/img/fotoDePerfil.jpeg')
const imgNotificacao = require('../../assets/img/notificacao.png')

// const Routes = createAppContainer(
//     createDrawerNavigator({
//         LoginONG  
//     })
// )


export default function NavBar() {
  return (
    <SafeAreaView style={styles.containerMenu}>
        {/* <Image 
            style={styles.fotoDePerfil}
            source={imgDePerfil}
        /> */}
        <Image 
            style={styles.configuracoes}
            source={imgNotificacao}
        />

       <Image
            style={styles.configuracoes}
            source={imgConfiguracoes}
        />
        
        <Image 
            style={styles.fotoDePerfil}
            source={imgDePerfil}
        />


    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    containerMenu:{
        height:43,
        width:"100%",
        flexDirection:"row",
        backgroundColor: theme.colors.white,
        paddingEnd:14,
        paddingStart:14,
        paddingBottom:2,
        justifyContent:'flex-end',
        alignItems:'center'
    },
    configuracoes:{
        height:22,
        width:22,
        resizeMode:'contain'
    },
    fotoDePerfil:{
        resizeMode:"contain",
        height:35,
        width:35,
        borderRadius:50,
        // alignSelf:'flex-end'
        marginLeft:18
    }

})