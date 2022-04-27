import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
      width: "95%",
      height: 100,
      backgroundColor: "red",
      alignSelf: "center",
      padding: 10
  },
  title: {
      fontSize: 18,
      fontFamily: theme.fonts.regular
  }
});
