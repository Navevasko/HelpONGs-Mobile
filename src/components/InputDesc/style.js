import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  descInput: {
    width: "90%",
    height: 200,
    alignSelf: "center",
    marginTop: 35,
    borderWidth: 3,
    borderRadius: 20,
    borderColor: theme.colors.grey,
    padding: 10,
    fontSize: 20,
  },
});