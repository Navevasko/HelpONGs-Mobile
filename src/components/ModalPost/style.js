import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  modal: {
    width: "90%",
    height: "80%",
    borderRadius: 15,
    alignSelf: "center",
    backgroundColor: theme.colors.white,
  },
  ONGInformation: {
    width: "100%",
    height: 100,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingStart: 30,
  },
  imageONG: {
    width: 75,
    height: 75,
    borderRadius: 75,
  },
  textONG: {
    fontFamily: theme.fonts.name,
    fontSize: 23,
    marginTop: -35,
    marginStart: 10,
  },
  containerInput: {
    width: "100%",
    height: "100%",
  },
  pickerContainer: {
    marginTop: 20,
    width: "90%",
    height: 60,
    alignSelf: "center",
    borderWidth: 3,
    borderRadius: 20,
    borderColor: theme.colors.grey,
  },
  descInput: {
      width: '90%',
      height: 200,
      alignSelf: 'center',
      marginTop: 35,
      borderWidth: 3,
      borderRadius: 20,
      borderColor: theme.colors.grey,
  }
});
