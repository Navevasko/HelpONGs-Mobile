import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor:"#FAFAFA",
    paddingBottom: 20,
  },
  containerPerfil:{
    height:330,
    width:"100%",
    backgroundColor:"#FAFAFA"
  },
  banner: {
    width: "100%",
    height: 200,
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
  },
  profilePicutre: {
    width: 120,
    height: 120,
    borderRadius: 100,
    borderWidth: 3,
    borderColor: theme.colors.white,
    position: "relative",
    bottom: 55,
    alignSelf: "center",
  },
  edit: {
    width: 30,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    bottom: 97,
    left: 40,
    alignSelf: "center",
    backgroundColor: theme.colors.primary,
    borderRadius: 20,
  },
  name: {
    position: "relative",
    bottom: 95,
    alignItems: "center",
    justifyContent: "center",
  },
  nameText: {
    fontSize: 30,
    fontFamily: theme.fonts.alternateSemiBold,
    color: theme.colors.black,
  },
  emailText: {
    fontSize: 15,
    fontFamily: theme.fonts.alternateMedium,
    color: theme.colors.grey,
  },
  inputContainer: {
    padding: 10,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
});
