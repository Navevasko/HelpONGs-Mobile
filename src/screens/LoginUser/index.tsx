import React from 'react'
import { View, Text, ScrollView, SafeAreaView, Image, TextInput } from 'react-native'
import { styles } from './style'
import { Logo } from '../../components/Logo'

const image = require("../../assets/img/imgPrincipalLoginV.png");

export default function LoginUser() {
  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        <View style={styles.containerLogo}>
          <Logo/>
        </View>
        <View style={styles.containerImgPrincipal}>
          <Image
            style={{height:"100%", width:"100%", resizeMode:"contain",}}
            source={image}
          />
        </View>
        <Text style={styles.titulo}>Login</Text>
        <View style={styles.containerInput}>
          <View></View>
          <TextInput/>
        </View>
      </ScrollView>
    </SafeAreaView>
    // <View>
    //   <Text>oi</Text>
    // </View>
    
  );
}