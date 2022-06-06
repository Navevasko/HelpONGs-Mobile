import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  pickerContainer: {
    width: "50%",
    borderRadius: 5,
    backgroundColor: theme.colors.primary,
    alignSelf: "center",
    marginBottom: 30,
    marginLeft: 12,
    justifyContent: "center",
  },
  picker: { height: 35, width: "100%" },
});
