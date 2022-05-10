import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
  imageBackground: {
    height: "auto",
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  containerInfo: {
    width: "100%",
  },
  containerInput: {
    width: "90%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  titleInput: {
    width: "100%",
    fontSize: 20,
    fontFamily: theme.fonts.regular,
  },
  input: {
    width: "100%",
    height: 45,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: theme.colors.input,
    backgroundColor: theme.colors.white,
    paddingStart: 10,
    fontSize: 20,
  },
});
