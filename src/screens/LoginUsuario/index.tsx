import React from "react";

import { StatusBar, View, Text, ScrollView, StyleSheet , Image, Button} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ImgBack } from "../../components/Loginbackground";
import { Logo } from "../../components/Logo";
import  {styles} from "./style";

const image = require("../../assets/img/imgPrincipalLoginUser.png");

export function LoginUsuario() {
    return (
        <ScrollView style={styles.container}>     
        {/* <ImgBack/> */}
            <SafeAreaView style={styles.containerLogo}>
                <Logo/>
            </SafeAreaView>   
            <View style={styles.containerImgPrincipal}>
                <Image
                    style={{height:"100%", width:"100%"}}
                    source={image}
                />
            </View>
            <Text style={styles.titulo}>Faça login como{"\n"} voluntário</Text>
            <Text style={styles.texto}>Faça login como voluntário e ajude{"\n"} pessoas, participe de eventos e doe.</Text>
            <Button
                onPress={() => {console.log('Hello World');
                }}
                title="Fazer login"
                
            />
        </ScrollView>
    );
}