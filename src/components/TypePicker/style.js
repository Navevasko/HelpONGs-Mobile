import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  pickerContainer: {
    marginTop: 20,
    width: "90%",
    height: 60,
    alignSelf: "center",
    borderWidth: 3,
    borderRadius: 20,
    borderColor: theme.colors.grey,
  },
});