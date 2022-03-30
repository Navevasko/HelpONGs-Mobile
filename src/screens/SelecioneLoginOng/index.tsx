import React from "react";

import { View, Text, ScrollView, Image, TouchableOpacity, ImageBackground} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Logo } from "../../components/Logo";
import  {styles} from "./style";
import { useNavigation } from "@react-navigation/native";

const image = require('../../assets/img/imgPrincipalSelecioneLoginONG.png');
const nextImg = require("../../assets/img/next.png");
const backImg = require("../../assets/img/transparentBackground.png");

export function SelecioneLoginOng() {

    const navigation = useNavigation<any>();

    return (
        <ImageBackground
            style={styles.ImageBackground}
            source={backImg}
        >
        <ScrollView style={styles.container}>  
        {/* <StatusBar
        backgroundColor="transparent"
        />    */}
        
            <SafeAreaView style={styles.containerLogo}>
                <Logo/>
            </SafeAreaView>   
            <View style={styles.containerImgPrincipal}>
                <Image
                    style={{height:"100%", width:"100%", resizeMode:"stretch",}}
                    source={image}
                />
            </View>
            <Text style={styles.titulo}>Faça login como {"\n"}ONG</Text>
            <Text style={styles.texto}>
                Faça login como ONG e crie eventos,{"\n"}posts, vagas e receba doações para{"\n"}receber ajuda de uma forma mais{"\n"}eficiente.
            </Text>
            <TouchableOpacity style={styles.btnLogin}onPress={() => navigation.navigate("LoginONG")}>
                <Text style={styles.btntexto}>Fazer login</Text>
            </TouchableOpacity>
            <View style={styles.containerProximaPagina}>
            <TouchableOpacity style={styles.btnProximaPagina} onPress={() => navigation.navigate("SelecioneLoginUsuario")}>
                <Image
                    style={{height:"100%", width:"100%"}}
                    source={nextImg}
                />
            </TouchableOpacity>
            </View>
            
        </ScrollView>
        </ImageBackground>
    );
}
            