import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 250,
    backgroundColor: theme.colors.input,
    position: 'absolute',
    borderRadius: 5,
  },
});
