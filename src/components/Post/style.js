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
  containerComment: {
    width: "100%",
    justifyContent: "space-between",
    backgroundColor: theme.colors.input,
    borderWidth: 2,
    borderColor: theme.colors.grey,
    paddingStart: 10,
    paddingEnd: 10,
    fontSize: 15,
    fontFamily: theme.fonts.regular,
    marginTop: 10,
    height: 50,
    borderRadius: 15,
  },
  PFP: {
    width: "12%",
    height: 37,
    borderRadius: 100,
    resizeMode: "cover",
  },
  input: {
    width: "70%",
    paddingStart: 10,
    fontSize: 15,
    fontFamily: theme.fonts.regular,
    marginTop: 10,
    height: 50,
    borderRadius: 10,
  },
});
