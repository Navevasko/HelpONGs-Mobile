import { View, Text, Image, TouchableHighlight } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import React from "react";
import { styles } from "./style";
import { theme } from "../../global/styles/theme";

export default function Vaga() {
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

          <View style={styles.filesContainer}>
            <Image
              source={require("../../assets/img/Evento.png")}
              style={styles.file}
            />
            <View>
              <Image
                source={require("../../assets/img/Evento.png")}
                style={[styles.altFile, { borderTopRightRadius: 5 }]}
              />
              <Image
                source={require("../../assets/img/Evento.png")}
                style={[
                  styles.altFile,
                  { marginTop: 5, borderBottomRightRadius: 5 },
                ]}
              />
            </View>
          </View>

          <View style={styles.row}>
            <View style={styles.dataContainer}>
              <View style={[styles.row, { marginBottom: 10 }]}>
                <Text style={styles.textDestaque}> Objetivo: </Text>
                <Text style={styles.text}> Salvar Peixes </Text>
              </View>
              <View style={[styles.row, { marginBottom: 10 }]}>
                <Text style={styles.textDestaque}> Data/Hora: </Text>
                <Text style={styles.text}> 26 de Janeiro ás 12:00 </Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.textDestaque}> Status: </Text>
                <TouchableHighlight
                  style={[
                    styles.button,
                    { backgroundColor: theme.colors.secondary },
                  ]}
                >
                  <Text style={styles.buttonText}> Encerrado </Text>
                </TouchableHighlight>
              </View>
            </View>

            <View style={styles.buttonContainer}>
              <TouchableHighlight style={[styles.button, { marginBottom: 20 }]}>
                <Text style={styles.buttonText}> Candidatar-se </Text>
              </TouchableHighlight>
              <TouchableHighlight style={styles.button}>
                <Text style={styles.buttonText}> Participar </Text>
              </TouchableHighlight>
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
