import {
  View,
  Text,
  Image,
  ImageBackground,
  StatusBar,
  ScrollView,
} from "react-native";
import React, { useEffect } from "react";
import { styles } from "./style";
import { theme } from "../../global/styles/theme";
import ScreenTitle from "../../components/ScreenTitle";
import Icon from "react-native-vector-icons/Feather";
import CardContainer from "../../components/CardContainer";
import InputBorder from "../../components/InputBorder";
import BtnSubmit from "../../components/BtnSubmit";
import { api } from "../../../api";
import ScrollBorder from "../../components/ScrollBorder";
import ChipCategoria from "../../components/ChipCategoria";
import InputContainer from "../../components/InputContainer";

export default function ConfigONG() {
  return (
    <>
      <StatusBar backgroundColor={"transparent"} barStyle={"dark-content"} />
      <ScreenTitle title={"Configurações"} />
      <ScrollView style={styles.container}>
        <CardContainer height={335}>
          <Image
            source={require("../../assets/img/Banner.png")}
            style={styles.banner}
          />
          <Image
            source={require("../../assets/img/ONG.png")}
            style={styles.profilePicutre}
            resizeMode="cover"
          />

          <View style={styles.edit}>
            <Icon name="edit" size={20} />
          </View>

          <View style={styles.name}>
            <Text style={styles.nameText}>GreenPeace</Text>
            <Text style={styles.emailText}>Greenpeace@Ong.com</Text>
          </View>
        </CardContainer>

        <CardContainer title={"Editar Informações da conta"}>
          <InputContainer>
            <InputBorder title="Nome" />

            <InputBorder title="Email" />

            <InputBorder
              title="Telefone"
              width={"100%"}
              keyboardType={"phone-pad"}
            />
          </InputContainer>
        </CardContainer>

        <CardContainer title={"Editar Detalhes da conta"}>
          <InputContainer>
            <InputBorder
              title="Descrição"
              width={"100%"}
              keyboardType={"number-pad"}
            />

            <InputBorder title="História" width={"100%"} height={200} />

            <InputBorder title="Membros" keyboardType={"number-pad"} />

            <InputBorder title="Fundação" keyboardType={"number-pad"} />
          </InputContainer>
        </CardContainer>

        <CardContainer title={"Editar Categorias"}>
          <InputContainer flexDirection={"column"}>
            <InputBorder title="Categoria" width={"100%"} />

            <ScrollBorder>
              <ChipCategoria text={"Cachorro"} />
              <ChipCategoria text={"Cachorro"} />
              <ChipCategoria text={"Cachorro"} />
            </ScrollBorder>
          </InputContainer>
        </CardContainer>

        <CardContainer title={"Editar Endereço"}>
          <InputContainer>
            <InputBorder title="CEP" keyboardType={"number-pad"} />

            <InputBorder title="Estado" />

            <InputBorder title="Cidade" />

            <InputBorder title="Bairro" />

            <InputBorder title="Rua" />

            <InputBorder title="Número" />

            <InputBorder title="Complemento" width={"100%"} />
          </InputContainer>
        </CardContainer>

        <CardContainer title={"Gerenciar Patrocinadores"}>
          <InputContainer>
            <ScrollBorder horizontal={false}>
              <View
                style={{
                  width: "100%",
                  alignItems: "center",
                  justifyContent: "space-between",
                  borderRadius: 50,
                  flexDirection: "row",
                  padding: 15,
                  marginEnd: 10,
                }}
              >
                <Image
                  source={require("../../assets/img/ONG.png")}
                  style={{ width: 80, height: 80, marginEnd: 20 }}
                />
                <Text
                  style={{
                    marginEnd: 20,
                    fontSize: 22,
                    fontFamily: theme.fonts.semiBold,
                  }}
                >
                  {" "}
                  COCA COLA{" "}
                </Text>
                <Icon name="x-circle" size={35} />
              </View>
            </ScrollBorder>
          </InputContainer>
        </CardContainer>

        <CardContainer title={"Editar Meios de doações"}>
          <InputContainer>
            <InputBorder title="Site" />

            <InputBorder title="Pix" />

            <InputBorder title="Agência" />

            <InputBorder title="Conta" />

            <InputBorder title="Tipo" />

            <InputBorder title="Banco" />
          </InputContainer>
        </CardContainer>

        <CardContainer title={"Editar Meios de doações"}>
          <InputContainer>
            <ScrollBorder horizontal={false}>
              <View
                style={{
                  width: "100%",
                  alignItems: "center",
                  justifyContent: "space-between",
                  borderRadius: 50,
                  flexDirection: "row",
                  padding: 15,
                  marginEnd: 10,
                  backgroundColor: theme.colors.grey,
                  borderRadius: 10,
                  marginStart: 10,
                }}
              >
                <Image
                  source={require("../../assets/img/PFP.png")}
                  style={{ width: 80, height: 80 }}
                />
                <View
                  style={{
                    width: 250,
                    height: 100,
                    justifyContent: "center",
                  }}
                >
                  <Text
                    style={{
                      fontSize: 18,
                      marginBottom: -15,
                      fontFamily: theme.fonts.semiBold,
                      textAlign: "center",
                    }}
                  >
                    Cameron Williamson
                  </Text>
                  <BtnSubmit
                    text={"Desbloquear"}
                    width={"80%"}
                    height={30}
                    color={theme.colors.secondary}
                  />
                </View>
              </View>
            </ScrollBorder>
          </InputContainer>
        </CardContainer>

        <CardContainer title={"Exclusão de conta"}>
          <InputContainer>
            <BtnSubmit
              text="Excluir Conta"
              color={theme.colors.secondary}
              width="100%"
              height={60}
              icon={"alert-triangle"}
            />
          </InputContainer>
        </CardContainer>

        <BtnSubmit
          text="Salvar"
          color={theme.colors.primaryFaded}
          width="90%"
          height={60}
          onPress={() => {
            onSubmit();
          }}
        />
      </ScrollView>
    </>
  );
}
