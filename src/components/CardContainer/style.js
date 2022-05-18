import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    width: "97%",
    backgroundColor: theme.colors.white,
    alignSelf: "center",
    borderRadius: 5,
    marginBottom: 10,
  },
  title: {
    fontFamily: theme.fonts.medium,
    fontSize: 22,
    marginTop: 10,
    marginStart: 5,
  },
});
