import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    height: 45,
    backgroundColor: theme.colors.primary,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    flexDirection: "row",
    paddingStart: 15,
    paddingEnd: 15,
    marginEnd: 10,
  },
  text: {
    fontFamily: theme.fonts.medium,
    fontSize: 20,
    marginEnd: 10,
  },
});