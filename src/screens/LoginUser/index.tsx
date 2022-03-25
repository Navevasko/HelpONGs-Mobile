import React from 'react'
import { View, Text, ScrollView, SafeAreaView, Image } from 'react-native'
import { styles } from './style'
import { Logo } from '../../components/Logo'
import { TextInput } from 'react-native-gesture-handler';

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
        <View >
          <View></View>
          <TextInput/>
        </View>
      </ScrollView>
    </SafeAreaView>
    
  );
}