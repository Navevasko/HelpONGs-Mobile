import { Montserrat_700Bold } from "@expo-google-fonts/montserrat";
import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    flexDirection: "column",
    alignContent: "center",
  },
  image: {
    height: "100%",
    width: "100%",
    resizeMode: "contain",
  },
  containerImage: {
    height: 270,
    width: "100%",
  },
  containerLogo: {
    height: 45,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
  },
  title: {
    fontSize: 48,
    fontFamily: theme.fonts.semiBold,
    color: theme.colors.primary,
  },
  terms: {
    width: "80%",
    fontSize: 10,
    fontFamily: theme.fonts.light,
    alignSelf: "center",
    textAlign: "center",
    marginTop: 5,
  },
  signUp: {
    width: "70%",
    fontSize: 24,
    alignSelf: "center",
    marginTop: 20,
  },
});
