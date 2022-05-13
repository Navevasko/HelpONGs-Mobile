import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    width: "90%",
    alignSelf: "center",
    justifyContent: 'center'
  },
  text: {
    fontFamily: theme.fonts.regular,
    fontSize: 17,
    marginBottom: 3,
  },
  input: {
    width: "100%",
    marginBottom: 15,
    alignSelf: "center",
    borderWidth: 2,
    borderRadius: 7,
    borderColor: theme.colors.grey,
    padding: 10,
    fontSize: 18,
  },
});