import { View, Text, StatusBar, ScrollView } from "react-native";
import React from "react";
import { styles } from "./style";
import Menu from "../../components/Menu";

export default function PerfilUsuario() {
  return (
    <View>
      <StatusBar backgroundColor={"transparent"} barStyle={"dark-content"} />
      <Menu/>
      <ScrollView>

      </ScrollView>
    </View>
  );
}
