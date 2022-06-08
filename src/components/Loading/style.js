import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    width: "40%",
    height: "20%",
    backgroundColor: theme.colors.white,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  text: {
    fontSize: 20,
    fontFamily: theme.fonts.medium,
  },
});
