import {
  View,
  Text,
  ImageBackground,
  StatusBar,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import React, {useState, useEffect} from "react";
import User from '../../../api/Controllers/userController'
import ModalPost from "../../components/ModalPost";

export default function PerfilUsuario(Id) {
  
  return (
    <View style={{justifyContent: 'center'}}>
      <StatusBar barStyle={'dark-content'} backgroundColor={'transparent'} />
      <ModalPost/>
    </View>
  );
}
