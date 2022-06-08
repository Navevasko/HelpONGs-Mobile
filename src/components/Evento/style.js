import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  postData: {
    width: "105%",
    alignSelf: "center",
  },
  title: {
    fontSize: 20,
    fontFamily: theme.fonts.bold,
    marginBottom: 10,
  },
  desc: {
    fontSize: 13,
    fontFamily: theme.fonts.regular,
    marginBottom: 10,
  },
  textDestaque: {
    fontSize: 12,
    fontFamily: theme.fonts.bold,
  },
  text: {
    fontSize: 12,
    fontFamily: theme.fonts.regular,
  },
  buttonContainer: {
    width: "100%",
    height: 50,
    justifyContent: "space-evenly",
    marginTop: -10,
    marginBottom: 5,
  },
});
