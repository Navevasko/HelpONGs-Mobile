import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
  containerProfilePictures: {
    width: "100%",
    height: 250,
  },
  banner: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
  },
  profilePicture: {
    width: 100,
    height: 100,
    position: "absolute",
    top: 150,
    right: 160,
    borderRadius: 100,
    borderWidth: 3,
    borderColor: theme.colors.white,
  },
  containerEdit: {
    borderRadius: 20,
    width: 30,
    height: 30,
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.colors.input,
    position: "absolute",
    top: 220,
    right: 165,
  },
  edit: {
    color: theme.colors.black,
  },
  name: {
    textAlign: "center",
    fontFamily: theme.fonts.name,
    fontSize: 22,
  },
  option: {
    width: "85%",
    alignSelf: "center",
    flexDirection: "row",
    marginTop: 40
  },
  optionStyle: {
      width: '100%'
  },
  textOption: {
    textAlign: "left",
    fontFamily: theme.fonts.semiBold,
    color: theme.colors.primary,
    fontSize: 25,
    marginBottom: 2,
  },
  line: {
    width: "100%",
    borderBottomWidth: 2,
    borderColor: theme.colors.grey,
  },
  optionArrow: {
    color: theme.colors.black,
    marginStart: -30
  },
});
