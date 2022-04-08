import { View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { styles } from "./style";
import Icon from "react-native-vector-icons/Feather";
const pfp = require("../../assets/img/ProfilePicture.png");
import { theme } from "../../global/styles/theme";
import { useNavigationState } from "@react-navigation/native";

export default function Menu() {
  return (
    <View style={styles.container}>
      <Icon name="menu" style={styles.icons} size={30} />
      <View style={styles.options}>
        <TouchableOpacity onPress={() => {}}>
          <Icon name="message-circle" style={styles.icons} size={30} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <Icon name="bell" style={styles.icons} size={30} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <Icon name="settings" style={styles.icons} size={30} />
        </TouchableOpacity>
        <Image source={pfp} style={styles.profilePicture} />
      </View>
    </View>
  );
}
