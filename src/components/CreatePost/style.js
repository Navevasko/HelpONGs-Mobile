import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    width: "90%",
    height: 55,
    backgroundColor: "#ffff",
    borderRadius: 10,
    alignSelf: "center",
    justifyContent: "space-around",
    marginTop: -10,
    marginBottom: 20,
    padding: 5,
  },
  image: {
    width: 70,
    height: 45,
    borderRadius: 20,
    resizeMode: "contain",
  },
  text: {
    fontFamily: theme.fonts.medium,
    fontSize: 17,
  },
  createButton: {
    width: 30,
    height: 30,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    marginStart: 20,
    backgroundColor: theme.colors.primary,
  },
});
