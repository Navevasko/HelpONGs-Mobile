import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  modal: {
    width: "90%",
    minHeight: 600,
    padding: 10,
    paddingBottom: 20,
    borderRadius: 15,
    alignSelf: "center",
    backgroundColor: theme.colors.white,
  },
  close: {
    height: 50,
    position: "relative",
    top: 20,
    left: 10,
  },
  containerInput: {
    width: "100%",
    maxHeight: 400,
  },
  containerInfoInputs: {
    width: "100%",
    height: 200,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  inputCom: {
    width: '50%',
    height: 70,
    marginBottom: 20,
    justifyContent: 'center',
    padding: 5,
  },
  input: {
    width: '90%',
    height: 45,
    backgroundColor: theme.colors.white,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: theme.colors.grey,
    marginTop: 0
  },
});
