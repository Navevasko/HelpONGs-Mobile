import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
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
    minHeight: 350,
    alignSelf: "center",
    backgroundColor: "#fff",
    borderRadius: 5,
    overflow: "hidden",
    padding: 10,
    paddingStart: 20,
    paddingEnd: 20,
  },
  containerONGData: {
    width: "100%",
    height: 90,
    flexDirection: "row",
    alignItems: "center",
  },
  ONGPFP: {
    width: 70,
    height: 70,
    borderRadius: 50,
  },
  ContainerONGDataText: {
    width: "100%",
    height: "100%",
    paddingTop: 20,
    paddingStart: 10,
  },
  ONGDataName: {
    fontSize: 20,
    fontFamily: theme.fonts.alternateSemiBold,
  },
  ONGDataDate: {
    fontSize: 10,
    marginTop: -5,
    marginStart: 5,
    fontFamily: theme.fonts.alternateRegular,
    color: theme.colors.placeholder,
  },
  postData: {
    width: "105%",
    minHeight: 200,
    alignSelf: "center",
  },
  desc: {
    fontSize: 13,
    fontFamily: theme.fonts.regular,
    marginBottom: 10,
  },
  filesContainer: {
    width: "100%",
    height: 270,
    flexWrap: "wrap",
  },
  file: {
    width: 160,
    height: 250,
    borderRadius: 10,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
  },
  textDestaque: {
    fontSize: 12,
    fontFamily: theme.fonts.bold,
  },
  text: {
    fontSize: 12,
    fontFamily: theme.fonts.regular,
  },
  optionsContainer: {
    minWidth: 40,
    maxWidth: 100,
    flexDirection: "row",
    alignItems: "center",
    marginEnd: 10,
  },
  optionsText: {
    fontFamily: theme.fonts.regular,
    marginStart: 5,
    fontSize: 13,
  },

  altFile: {
    width: 180.5,
    height: 122.5,
    marginStart: 5,
  },
  dataContainer: {
    width: "65%",
    height: "100%",
    marginBottom: 20,
  },
  buttonContainer: {
    height: "100%",
    position: "absolute",
    right: 15,
    bottom: 5,
    justifyContent: "flex-end",
    marginBottom: 20,
  },
  button: {
    height: 30,
    backgroundColor: theme.colors.primary,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    marginStart: 5,
  },
  buttonText: {
    fontSize: 14,
    fontFamily: theme.fonts.semiBold,
  },
});