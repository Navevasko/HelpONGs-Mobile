import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  containerShadow: {
    width: "90%",
    alignSelf: "center",
    borderRadius: 5,
    backgroundColor: "transparent",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 5,
    marginBottom: 20,
  },
  container: {
    width: "100%",
    minHeight: 200,
    alignSelf: "center",
    backgroundColor: "#fff",
    borderRadius: 5,
    overflow: "hidden",
    padding: 10,
    paddingStart: 20,
    paddingEnd: 20,
  },
});
