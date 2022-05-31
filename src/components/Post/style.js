import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  postData: {
    width: "105%",
    minHeight: 100,
    alignSelf: "center",
  },
  desc: {
    fontSize: 13,
    fontFamily: theme.fonts.regular,
    marginBottom: 10,
  },
  buttonContainer: {
    width: "100%",
    height: 50,
    marginBottom: 10,
    marginTop: -10,
    justifyContent: "space-between",
  },
  button: {
    width: "50%",
    height: 35,
    backgroundColor: theme.colors.primary,
    borderRadius: 5,
    marginStart: 5,
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 14,
    fontFamily: theme.fonts.semiBold,
    textAlign: "center",
  },
});
