import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  ONGInformation: {
    width: "100%",
    height: 100,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingStart: 30,
  },
  imageONG: {
    width: 75,
    height: 75,
    borderRadius: 75,
  },
  textONG: {
    fontFamily: theme.fonts.name,
    fontSize: 23,
    marginTop: -35,
    marginStart: 10,
  },
});