import { StyleSheet, Text, Modal, View, Image, ScrollView  } from 'react-native'
import React, {useState} from 'react';
import { theme } from '../../global/styles/theme';
import Icon from "react-native-vector-icons/Feather";

export default function ModalDoar({visible}) {
  // const [visibility, setvisibility] = useState(true);

  // function trocarVisibilidade(atual) {
    // setvisibility(!atual);
  // }
  // console.log(oi);
  console.log(`visible: `, visible);

  return (
    <Modal animationType="fade" visible={true} transparent>
      <View style={styles.containerPrincipal}>
        <View style={styles.container}>
        <ScrollView>
        <Icon
          name="x"
          size={30}
          style={styles.icon}
          onPress={() => {
            // trocarVisibilidade(true);

            console.log(`visible: `, visible);
            }}
        />
        <Text style={styles.txtTitulo}>Ultilize as informações{"\n"}para fazer uma doação</Text>
        <Image
          source={require("../../assets/img/ImgmPrincipalModalDoar.png")}
          style={styles.imgPrincipal}
        />
        <View style={{marginBottom:10}}>
          <Text style={styles.txtSubtitulo}>Informações de contato</Text>
          <View style={{flexDirection:'row'}}>
            <Text style={styles.informacoestxt}>Celular: </Text>
            <Text style={styles.informacoestxtbold}>(11)786855575</Text>
          </View>
          <View style={{flexDirection:'row'}}>
            <Text style={styles.informacoestxt}>Telefone: </Text>
            <Text style={styles.informacoestxtbold}>(11)786855575</Text>
          </View>
          <View style={{flexDirection:'row'}}>
            <Text style={styles.informacoestxt}>Email: </Text>
            <Text style={styles.informacoestxtbold}>ongBrasil@gmail.com</Text>
          </View>
          <View style={{flexDirection:'row'}}>
            <Text style={styles.informacoestxt}>Site: </Text>
            <Text style={styles.informacoestxtbold}>www.ongBrasil.com.br</Text>
          </View>
        </View>
        <View>
          <Text style={styles.txtSubtitulo}>Meios De Doação</Text>
          <View style={{flexDirection:"row"}}>
            <View style={styles.containerMeiosdeDoacao}>
              <View style={{flexDirection:'row'}}>
                <Text style={styles.informacoestxt}>Conta: </Text>
                <Text style={styles.informacoestxtbold}>3434.767.67567.09</Text>
              </View>
              <View style={{flexDirection:'row'}}>
                <Text style={styles.informacoestxt}>Tipo: </Text>
                <Text style={styles.informacoestxtbold}>Corrente</Text>
              </View>
              <View style={{flexDirection:'row'}}>
                <Text style={styles.informacoestxt}>Pix: </Text>
                <Text style={styles.informacoestxtbold}>(11)95286-6414</Text>
              </View>
              <View style={{flexDirection:'row'}}>
                <Text style={styles.informacoestxt}>Agencia: </Text>
                <Text style={styles.informacoestxtbold}>0001</Text>
              </View>
              <View style={{flexDirection:'row'}}>
                <Text style={styles.informacoestxt}>Banco: </Text>
                <Text style={styles.informacoestxtbold}>Bradesco</Text>
              </View>
            </View>
            <View style={styles.fotoBanco}>
              <Image
                source={require('../../assets/img/banco.png')}
                style={{resizeMode:"cover"}}
              />
            </View>
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
  },
  informacoestxt:{
    fontSize:16,
    fontFamily:theme.fonts.regular,
    lineHeight:22,
    color:theme.colors.black,
    marginTop:3,
    alignSelf:'center'
  },
  informacoestxtbold:{
    fontSize:16,
    fontFamily:theme.fonts.semiBold,
    lineHeight:22,
    color:theme.colors.black,
    marginTop:3, alignSelf:'center'
  },
  containerMeiosdeDoacao:{
    width:"60%",
    alignSelf:"flex-start",
  }, 
  fotoBanco:{
    alignSelf:'flex-end',
    height:96,
    width:115,
    marginLeft: 20,
    borderRadius:5
  }
})