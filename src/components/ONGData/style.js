import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
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
    marginStart: 1,
    fontFamily: theme.fonts.alternateRegular,
    color: theme.colors.placeholder,
  },
  icon: {
    position: "relative",
    right: 90,
    bottom: 20,
  },
});
