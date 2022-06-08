import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  close: {
    width: "100%",
    height: "500%",
    position: "absolute",
    zIndex: 999,
    top: 10,
    right: 30,
  },
  container: {
    width: 150,
    backgroundColor: theme.colors.input,
    position: "absolute",
    zIndex: 999,
    top: 10,
    right: 10,
    borderRadius: 5,
    alignItems: "flex-start",
    padding: 10,
    paddingStart: 15,
  },
  text: {
    fontSize: 20,
    fontFamily: theme.fonts.medium,
  },
});
