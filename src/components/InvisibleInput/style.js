import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  invisibleInput: {
      width: '100%',
      minHeight: 20,
      fontSize: 18,
      fontFamily: theme.fonts.medium,
      paddingStart: 18,
      marginTop: 20,
      marginBottom: 15,
  }
});
