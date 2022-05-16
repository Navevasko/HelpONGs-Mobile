import { View, Text, Image, ImageBackground, StatusBar } from 'react-native'
import React from 'react'
import ContainerTitle from "../../components/ContainerTitle";
import { styles } from './style';

export default function ConfigONG() {
  return (
    <ContainerTitle title={"Configurações"}>
      <View>
        <StatusBar />
        <ImageBackground>
          <View>
            <Image source={require("../../assets/img/Banner.png")} />
            <Image source={require("../../assets/img/PFP.png")} />
          </View>
        </ImageBackground>
      </View>
    </ContainerTitle>
  );
}