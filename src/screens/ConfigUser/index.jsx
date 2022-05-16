import { ScrollView, View, Text, Image, TouchableOpacity, StatusBar } from 'react-native'
import TextUnderline from '../../components/TextUnderline';
import React from 'react'
import { styles } from './style'
import Icon from 'react-native-vector-icons/Feather';

export default function ConfigUser() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <StatusBar barStyle={"dark-content"} backgroundColor={"transparent"} />
      <View style={styles.containerProfilePictures}>
        <Image
          style={styles.banner}
          source={require("../../assets/img/Banner.png")}
        />

        <Image
          style={styles.profilePicture}
          source={require("../../assets/img/PFP.png")}
        />

        <TouchableOpacity style={styles.containerEdit} onPress={() => {}}>
          <Icon name="edit" size={20} style={styles.edit} />
        </TouchableOpacity>
      </View>

      <Text style={styles.name}> Maria da Silva </Text>

      <View style={{ marginTop: 40 }}>
        <TextUnderline text={"Informações da conta"}/>

        <TextUnderline text={"Endereço"}/>

        <TextUnderline text={"Opções da conta"}/>

      </View>
    </ScrollView>
  );
}