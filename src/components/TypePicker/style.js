import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  border: {
    backgroundColor: theme.colors.white,
    borderWidth: 2,
    borderColor: theme.colors.grey,
    borderRadius: 10,
  },
  pickerContainer: {
    borderRadius: 5,
    backgroundColor: theme.colors.primary,
    marginBottom: 30,
    justifyContent: "center",
  },
  picker: { height: 35, width: "100%" },
});