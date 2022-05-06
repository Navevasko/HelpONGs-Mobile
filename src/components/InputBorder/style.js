import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  descInput: {
    width: "90%",
    marginBottom: 15,
    alignSelf: "center",
    borderWidth: 3,
    borderRadius: 20,
    borderColor: theme.colors.grey,
    padding: 15,
    paddingRight: 0,
    fontSize: 20,
  },
});