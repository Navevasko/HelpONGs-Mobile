import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  info: {
    width: "100%",
    marginBottom: 10,
  },
  text: {
    fontSize: 20,
    fontFamily: theme.fonts.bold,
  },
  containerShadow: {
    width: "90%",
    alignSelf: "center",
    borderRadius: 5,
    backgroundColor: "transparent",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    marginBottom: 20,
    borderRadius: 20000,
  },
  containerPicker: {
    paddingTop: 20,
    alignItems: "flex-start",
    width: "90%",
    paddingStart: 30,
  },
  containerList: {
    width: "100%",
    alignSelf: "center",
    backgroundColor: "#fff",
    borderRadius: 5,
    overflow: "hidden",
    padding: 10,
  },
  containerMenu: {
    width: "90%",
    minHeight: 100,
    alignSelf: "center",
    backgroundColor: "#fff",
    borderRadius: 5,
    padding: 10,
    paddingStart: 20,
    paddingEnd: 20,
  },
});