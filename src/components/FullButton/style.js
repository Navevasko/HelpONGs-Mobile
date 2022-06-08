import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  button: {
    width: "100%",
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    paddingStart: 15,
  },
  icon: {
    position: 'absolute',
    left: 15,
  },
  text: {
    fontFamily: theme.fonts.medium,
    textAlign: 'center',
    fontSize: 23,
  },
});
