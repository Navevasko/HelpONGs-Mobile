import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    width: "90%",
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  icon: {
    color: theme.colors.secondary,
    marginLeft: 290,
    marginTop: -10,
  },
  title: {
    fontSize: 20,
    fontFamily: theme.fonts.alternateBold,
  },
  textContainer: {
    flexWrap: "wrap",
    marginTop: 10,
  },
  textTitle: {
    fontSize: 13,
    fontFamily: theme.fonts.bold,
  },
  text: {
    fontSize: 13,
    fontFamily: theme.fonts.medium,
  },
});
