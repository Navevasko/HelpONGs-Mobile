import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  containerInfoInputs: {
    width: "95%",
    height: 200,
    flexDirection: "row",
    flexWrap: "wrap",
    alignSelf: "center",
    justifyContent: "space-between",
    alignItems: 'center',
    marginTop: 20
  },
  inputCom: {
    width: "50%",
    height: 70,
    marginBottom: 30,
    justifyContent: "center",
    padding: 5,
  },
  texta: {
    width: '100%',
    fontSize: 17,
    fontFamily: theme.fonts.regular,
  },
  input: {
    width: 150,
    height: 45,
    backgroundColor: theme.colors.white,
    borderRadius: 10,
    borderWidth: 3,
    borderColor: theme.colors.grey,
    marginTop: 0,
    textAlign: "center",
    fontSize: 17,
  },
  ContainerCheckBox: {
    width: "100%",
    height: "100%",
    flexDirection: "row",
    alignItems: "flex-start",
  },
  checkBox: {
    width: "20%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginEnd: 40,
  },
  image: {
    width: '100%',
    height: 400,
    alignSelf: 'center'
  }
});