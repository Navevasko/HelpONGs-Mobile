import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  ONGInformation: {
    width: "100%",
    height: 100,
    alignItems: "center",
    justifyContent: "flex-start",
    position: 'relative',
    bottom: 30,
    right: 13,
    paddingStart: 30,
  },
  imageONG: {
    width: 90,
    height: 90,
    borderRadius: 75,
    marginBottom: 50,
  },
  textONG: {
    fontFamily: theme.fonts.alternateBold,
    fontSize: 27,
    marginTop: -55,
    marginStart: 10,
  },
});