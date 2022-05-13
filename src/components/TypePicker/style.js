import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  pickerContainer: {
    width: '90%',
    borderRadius: 15,
    borderWidth: 0,
    overflow: "hidden",
    alignSelf: 'center',
    borderColor: theme.colors.grey,
    height: 50,
    padding: 0,
  },
});