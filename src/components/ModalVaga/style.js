import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  containerInfoInputs: {
    width: "95%",
    flexDirection: "row",
    flexWrap: "wrap",
    alignSelf: "center",
    justifyContent: "space-evenly",
    marginTop: 10,
  },
  inputCom: {
    width: "50%",
    height: 70,
    marginBottom: 20,
    justifyContent: "center",
    padding: 5,
  },
  input: {
    width: 150,
    height: 45,
    backgroundColor: theme.colors.white,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: theme.colors.grey,
    marginTop: 0,
    textAlign: "center",
    fontSize: 17,
  },
  image: {
    width: "100%",
    height: 400,
    alignSelf: "center",
  },
});
