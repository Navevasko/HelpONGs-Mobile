import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  placeholder: {
    fontSize: 20,
    fontFamily: theme.fonts.regular,
    color: theme.colors.placeholder,
  },
  input: {
    width: "100%",
    height: 45,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: theme.colors.primary,
    paddingStart: 6,
    paddingEnd: 6,
    fontSize: 20,
  },
});
