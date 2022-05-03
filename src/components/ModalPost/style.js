import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  modal: {
    width: "90%",
    height: 600,
    borderRadius: 15,
    alignSelf: "center",
    backgroundColor: theme.colors.white,
  },
  containerInput: {
    width: "100%",
    height: "100%",
  },
});
