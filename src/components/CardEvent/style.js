import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    justifyContent: "space-between",
    padding: 10,
    borderBottomWidth: 2,
    borderBottomColor: theme.colors.primary,
    marginBottom: 10,
  },
  text: {
    fontSize: 15,
    fontFamily: theme.fonts.semiBold,
  },
  icon: {
    color: theme.colors.secondary,
  },
});
