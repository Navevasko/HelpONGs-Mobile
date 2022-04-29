import { ScrollView, View, Text, Image, TouchableOpacity, StatusBar } from 'react-native'
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
          <Icon name="edit" size={15} style={styles.edit} />
        </TouchableOpacity>
      </View>

      <Text style={styles.name}> Maria da Silva </Text>

      <View style={{ marginTop: 40 }}>
        <TouchableOpacity style={styles.option}>
          <View style={styles.optionStyle}>
            <Text style={styles.textOption}>Informações da conta</Text>

            <View style={styles.line}></View>
          </View>

          <Icon name="arrow-right" style={styles.optionArrow} size={25} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.option}>
          <View style={styles.optionStyle}>
            <Text style={styles.textOption}>Endereço</Text>

            <View style={styles.line}></View>
          </View>

          <Icon name="arrow-right" style={styles.optionArrow} size={25} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.option}>
          <View style={styles.optionStyle}>
            <Text style={styles.textOption}>Opções da conta</Text>

            <View style={styles.line}></View>
          </View>

          <Icon name="arrow-right" style={styles.optionArrow} size={25} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.option}>
          <View style={styles.optionStyle}>
            <Text style={styles.textOption}>Mudar tema</Text>

            <View style={styles.line}></View>
          </View>

          <Icon name="arrow-right" style={styles.optionArrow} size={25} />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}