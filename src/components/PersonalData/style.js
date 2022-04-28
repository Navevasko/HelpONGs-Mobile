import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
      width: "90%",
      backgroundColor: theme.colors.white,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.8,
      shadowRadius: 2,  
      elevation: 10,
      alignSelf: "center",
      padding: 10,
      borderRadius: 5,
      marginTop: 20
  },
  title: {
      fontSize: 20,
      fontFamily: theme.fonts.regular
  },
  information: {
    width: '100%',
    height: 25,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 7
  },
  text: {
    fontFamily: theme.fonts.regular,
    fontSize: 17
  }
});
