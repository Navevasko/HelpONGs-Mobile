import { StyleSheet, Text, Modal, View, Image, ScrollView  } from 'react-native'
import React, {useState} from 'react';
import { theme } from '../../global/styles/theme';
import Icon from "react-native-vector-icons/Feather";

export default function ModalDoar({visible}) {

  const [modalVisible, setModalVisible] = useState(visible)

  return (
    <Modal animationType="fade" visible={modalVisible} transparent>
      <View style={styles.containerPrincipal}>
        <View style={styles.container}>
        <ScrollView>
        <Icon
          name="x"
          size={30}
          style={styles.icon}
          onPress={() => setModalVisible(false)}
        />
        <Text style={styles.txtTitulo}>Ultilize as informações{"\n"}para fazer uma doação</Text>
        <Image
          source={require("../../assets/img/ImgmPrincipalModalDoar.png")}
          style={styles.imgPrincipal}
        />
        <View>
          <Text style={styles.txtSubtitulo}>Informações de contato</Text>
          <View style={{flexDirection:'row'}}>
            <Text>Celular</Text>
            <Text>(11)786855575</Text>
          </View>
          <View style={{flexDirection:'row'}}>
            <Text>Telefone</Text>
            <Text>(11)786855575</Text>
          </View>
          <View style={{flexDirection:'row'}}>
            <Text>Email</Text>
            <Text>ongBrasil@gmail.com</Text>
          </View>
          <View style={{flexDirection:'row'}}>
            <Text>Site: </Text>
            <Text>www.ongBrasil.com.br</Text>
          </View>
        </View>
        <View>
          <Text style={styles.txtSubtitulo}>Meios De Doação</Text>
          <View style={{flexDirection:'row'}}>
            <Text>Celular</Text>
            <Text>(11)786855575</Text>
          </View>
          <View style={{flexDirection:'row'}}>
            <Text>Telefone</Text>
            <Text>(11)786855575</Text>
          </View>
          <View style={{flexDirection:'row'}}>
            <Text>Email</Text>
            <Text>ongBrasil@gmail.com</Text>
          </View>
          <View style={{flexDirection:'row'}}>
            <Text>Site: </Text>
            <Text>www.ongBrasil.com.br</Text>
          </View>
          <View style={{flexDirection:'row'}}>
            <Text>Celular</Text>
            <Text>(11)786855575</Text>
          </View>
          <View style={{flexDirection:'row'}}>
            <Text>Telefone</Text>
            <Text>(11)786855575</Text>
          </View>
          <View style={{flexDirection:'row'}}>
            <Text>Email</Text>
            <Text>ongBrasil@gmail.com</Text>
          </View>
          <View style={{flexDirection:'row'}}>
            <Text>Site: </Text>
            <Text>www.ongBrasil.com.br</Text>
          </View>
        </View>
        </ScrollView>
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  containerPrincipal:{
    flex:1,
    backgroundColor:"rgba(0, 0, 0, 0.4)",
    justifyContent:'center',
    alignItems:'center',
  },
  container:{
    height:"95%",
    width:"95%",
    backgroundColor:theme.colors.input,
    alignSelf:'center',
    borderRadius:10,
    paddingTop:10,
    paddingEnd:10,
    paddingStart:10
  },
  icon:{
    color:theme.colors.black,
    alignSelf:"flex-end"
  },
  txtTitulo:{
    alignSelf:'center',
    fontSize:25,
    fontFamily:theme.fonts.bold,
    textAlign:'center'
  },
  imgPrincipal:{
    height:250,
    width:230,
    resizeMode:'cover',
    // backgroundColor:"green",
    alignSelf: 'center'
  },
  txtSubtitulo:{
    fontFamily:theme.fonts.semiBold,
    fontSize:24,
    color:theme.colors.black,
    alignSelf:'center',
    marginBottom:10
  }
})