import { View, Text, Image } from "react-native";
import React from "react";
import { styles } from "./style";
import { theme } from "../../global/styles/theme";
import Icon from "react-native-vector-icons/Feather";

export default function Post() {
  return (
    <View style={styles.containerShadow}>
      <View style={styles.container}>
        <View style={styles.containerONGData}>
          <Image
            source={require("../../assets/img/ONG.png")}
            style={styles.ONGPFP}
          />

          <View style={styles.ContainerONGDataText}>
            <Text style={styles.ONGDataName}>GreenPeace</Text>
            <Text style={styles.ONGDataDate}>25 de Fevereiro de 2022</Text>
          </View>
        </View>

        <View style={styles.postData}>
          <Text style={styles.desc}>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet. Amet minim mollit non deserunt
            ullamco est sit aliqua dolor do amet sint.
          </Text>

          <View
            style={{
              width: "100%",
              height: 270,
              flexWrap: "wrap",
              flexDirection: "row",
              paddingTop: 10,
            }}
          >
            <Image
              source={require("../../assets/img/Evento.png")}
              style={styles.image}
            />
            <View>
              <Image
                source={require("../../assets/img/Evento.png")}
                style={styles.altImageTop}
              />
              <Image
                source={require("../../assets/img/Evento.png")}
                style={styles.altImagesBottom}
              />
            </View>
          </View>

          <View
            style={{
              flexDirection: "row",
            }}
          >
            <View style={styles.optionsContainer}>
              <Icon name="thumbs-up" size={20} color={theme.colors.primary} />
              <Text style={styles.optionsText}> 16 </Text>
            </View>
            <View style={styles.optionsContainer}>
              <Icon
                name="message-square"
                size={20}
                color={theme.colors.primary}
              />
              <Text style={styles.optionsText}> 10 </Text>
            </View>
            <View style={styles.optionsContainer}>
              <Icon name="share-2" size={20} color={theme.colors.primary} />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
