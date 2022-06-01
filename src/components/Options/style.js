import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  optionsContainer: {
    minWidth: 40,
    maxWidth: 100,
    flexDirection: "row",
    alignItems: "center",
    marginEnd: 10,
    marginTop: 15,
  },
  optionsText: {
    fontFamily: theme.fonts.regular,
    marginStart: 5,
    fontSize: 13,
  },
  icon: {
    color: theme.colors.primary,
  },
});
