import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  button: {
    alignSelf: "center",
    alignItems: "center",
    borderRadius: 8,
    marginTop: 20,
    flexDirection: "row",
  },
  buttonText: {
    fontFamily: theme.fonts.semiBold,
  },
});