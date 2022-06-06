import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
  search: {
    width: "80%",
    height: 35,
    backgroundColor: theme.colors.input,
    alignSelf: "center",
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    zIndex: 2,
  },
  searchInput: {
    width: "85%",
    height: "100%",
    borderRadius: 10,
    paddingStart: 10,
    paddingEnd: 10,
    fontSize: 17,
    fontFamily: theme.fonts.regular,
  },
  containerEventoPreview: {
    width: "100%",
    maxHeight: 250,
    marginTop: 10,
    marginBottom: 10,
    padding: 10,
    paddingStart: 20,
    paddingEnd: 20,
  },
});
