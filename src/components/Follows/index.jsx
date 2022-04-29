import {
    View,
    Image,
    TouchableOpacity,
    SafeAreaView,
    Modal,
    Text,
} from "react-native";
import React, { useState } from "react";
import { styles } from "./style";
import Icon from "react-native-vector-icons/Feather";
  
export default function Followers(estado, dataOng) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}> ONGs </Text>
            <Text style={styles.desc}> 73 ONGs que você segue </Text>

            <View style={styles.containerFollow}>
                <View style={styles.ONGContainer}>
                    <Image source={require('../../assets/img/ONG.png')} style={styles.followerImage}/>
                    <Text style={styles.ONGname}> Ong-Unianos </Text>
                </View>

                <View style={styles.ONGContainer}>
                    <Image source={require('../../assets/img/ONG.png')} style={styles.followerImage}/>
                    <Text style={styles.ONGname}> Ong-Unianos </Text>
                </View>

                <View style={styles.ONGContainer}>
                    <Image source={require('../../assets/img/ONG.png')} style={styles.followerImage}/>
                    <Text style={styles.ONGname}> Ong-Unianos </Text>
                </View>

                <View style={styles.ONGContainer}>
                    <Image source={require('../../assets/img/ONG.png')} style={styles.followerImage}/>
                    <Text style={styles.ONGname}> Ong-Unianos </Text>
                </View>

                <View style={styles.ONGContainer}>
                    <Image source={require('../../assets/img/ONG.png')} style={styles.followerImage}/>
                    <Text style={styles.ONGname}> Ong-Unianos </Text>
                </View>

                <View style={styles.ONGContainer}>
                    <Image source={require('../../assets/img/ONG.png')} style={styles.followerImage}/>
                    <Text style={styles.ONGname}> Ong-Unianos </Text>
                </View>

                <View style={styles.ONGContainer}>
                    <Image source={require('../../assets/img/ONG.png')} style={styles.followerImage}/>
                    <Text style={styles.ONGname}> Ong-Unianos </Text>
                </View>

                <View style={styles.ONGContainer}>
                    <Image source={require('../../assets/img/ONG.png')} style={styles.followerImage}/>
                    <Text style={styles.ONGname}> Ong-Unianos </Text>
                </View>

                <View style={styles.ONGContainer}>
                    <Image source={require('../../assets/img/ONG.png')} style={styles.followerImage}/>
                    <Text style={styles.ONGname}> Ong-Unianos </Text>
                </View>
                
            </View>
        </View>
    )
}
  