import React from "react";
import { Image, View } from "react-native";
import { styles } from "./style";
const image = require("../../../assets/logo.png");

export function Logo(){
    return(
        <Image
            style={styles.logo}
            source={image}

        />
    );
}