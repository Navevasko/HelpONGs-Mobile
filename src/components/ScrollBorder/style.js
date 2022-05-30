import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    maxHeight: 200,
    padding: 10,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: theme.colors.primary,
    marginBottom:10
  },
});
