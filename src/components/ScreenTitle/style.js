import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  title: {
    height: 60,
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 10,
  },
  titleText: {
    fontSize: 25,
    fontFamily: theme.fonts.light,
  },
  publish: {
    width: 100,
    height: 35,
    borderRadius: 5,
    backgroundColor: theme.colors.primaryFaded,
    alignItems: "center",
    justifyContent: "center",
  },
  publishText: {
    fontSize: 18,
    fontFamily: theme.fonts.alternateMedium,
  },
});