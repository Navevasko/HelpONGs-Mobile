import React from "react";

import { StatusBar, View, Text, ScrollView, Image, SafeAreaView, TouchableOpacity, ImageBackground} from "react-native";
import { ImgBack } from "../../components/Loginbackground";
import { Logo } from "../../components/Logo";
import  {styles} from "./style";
import { useNavigation } from "@react-navigation/native";

const image = require("../../assets/img/imgPrincipalLoginUser.png");
const nextImg = require("../../assets/img/next.png");
const backImg = require("../../assets/img/transparentBackground.png");

export function SelecioneLoginUsuario() {
    const navigation = useNavigation();
    // const screenName: never = "LoginUsuario";

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
            <Text style={styles.titulo}>Faça login como {"\n"}voluntário</Text>
            <Text style={styles.texto}>Faça login como voluntário e ajude{"\n"} pessoas, participe de eventos e doe.</Text>
            <TouchableOpacity style={styles.btnLogin} onPress={() => navigation.navigate("LoginUser")}>
                <Text style={styles.btntexto}>Fazer login</Text>
            </TouchableOpacity>
            <View style={styles.containerProximaPagina}>
            <TouchableOpacity style={styles.btnProximaPagina} onPress={() => navigation.navigate("SelecioneLoginOng")} >
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
            