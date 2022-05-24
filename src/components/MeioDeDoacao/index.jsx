import { StyleSheet, Text, View, Modal, ImageBackground, ScrollView, TouchableOpacity } from 'react-native'
import React, {useState, useEffect} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import OptionsConfig from '../OptionsConfig';
import Icon from "react-native-vector-icons/Feather";
import { theme } from '../../global/styles/theme';
import InputBorder from '../InputBorder';
import InputContainer from '../InputContainer';
import BtnSubmit from '../BtnSubmit';

export default function MeioDeDoacao() {

    const [modalVisible, setModalVisible] = useState(false);

  return (
    <SafeAreaView>
    <TouchableOpacity style={styles.containerPress} onPress={() => setModalVisible(true)}>
        <OptionsConfig txt={"Meios de Doação"} visibleModal={setModalVisible}/>
    </TouchableOpacity>
    <Modal transparent visible={modalVisible}>
        <ImageBackground source={require('../../assets/img/ImgBackground.png')} style={styles.containerPrincipal}>
        <View style={styles.top}>
            <Icon
             name={"chevron-left"} 
             size={30} 
             color={"black"}
             onPress={() =>{setModalVisible(false)}}
             /> 
            <Text style={styles.txtTitulo}>Meios de Doação</Text>
        </View>
        <ScrollView stylle={{paddingTop:10}}>
          <InputContainer>
            <InputBorder 
            title="Site" 
            color={"#FAFAFA"}
            borderColor={theme.colors.placeholder}
            txtColor={theme.colors.black}
            width={"100%"}
            />

            <InputBorder 
            title="Pix" 
            color={"#FAFAFA"}
            borderColor={theme.colors.placeholder}
            txtColor={theme.colors.black}
            width={"100%"}
            />

            <InputBorder
             title="Agência" 
             color={"#FAFAFA"}
             borderColor={theme.colors.placeholder}
             txtColor={theme.colors.black}
             />

            <InputBorder 
            title="Conta"
            color={"#FAFAFA"}
            borderColor={theme.colors.placeholder}
            txtColor={theme.colors.black} />

            <InputBorder
             title="Tipo"
             color={"#FAFAFA"}
             borderColor={theme.colors.placeholder}
             txtColor={theme.colors.black} />

            <InputBorder
             title="Banco"
             color={"#FAFAFA"}
             borderColor={theme.colors.placeholder}
             txtColor={theme.colors.black} />
          </InputContainer>
          <View style={{flexDirection:'row', justifyContent:'space-around', marginBottom:20}}>
                <BtnSubmit
                    text="Salvar"
                    color={theme.colors.primaryFaded}
                    width="45%"
                    height={45}
                    onPress={() => {
                        onSubmit();
                    }}
                    />
            </View>
        </ScrollView>
        </ImageBackground>
        
    </Modal>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    containerPress:{
        height:45,
        width:"100%",
        // backgroundColor:"aqua"
    },
    containerPrincipal:{
        flex:1,
        backgroundColor:"#FAFAFA"
    },
    top:{
        flexDirection:"row",
        paddingHorizontal:10,
        alignItems:'center',
        marginTop:15
    },
    txtTitulo:{
        // width:"50%",
        textAlign:'center',
        fontFamily:theme.fonts.semiBold,
        fontSize:20,
        paddingBottom:5,
        borderBottomWidth:1,
        borderBottomColor: theme.colors.placeholder,
        color:theme.colors.primary,
        marginLeft:"17%"
    }
})