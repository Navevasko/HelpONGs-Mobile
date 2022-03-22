import React from "react";

import { View, Image} from "react-native";
import  {styles} from "./style";
const image = require("../../assets/img/transparentBackground.png");

export function ImgBack() {
    return (
        <View>
            <Image
                style={styles.ImageBackground}
                source={image}
            />
        </View>
    );
}