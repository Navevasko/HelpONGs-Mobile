import React from "react";
import { Image, View } from "react-native";
const image = require("../../../assets/logo.png");

export function Logo(){
    return(
        <Image
            style={{height:45,width:135,resizeMode:"contain", display:"flex"}}
            source={image}

        />
    );
}