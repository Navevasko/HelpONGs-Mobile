import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  modal: {
    width: "90%",
    padding: 10,
    paddingBottom: 20,
    borderRadius: 15,
    alignSelf: "center",
    backgroundColor: theme.colors.white,
  },
  close: {
    height: 50,
    position: 'relative',
    top: 20,
    left: 10,
  },
  containerInput: {
    width: "100%",
  },
});
