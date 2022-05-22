import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  eventoPreview: {
    width: 140,
    height: "95%",
    backgroundColor: theme.colors.white,
    borderRadius: 10,
    marginEnd: 20,
  },
  eventoPreviewProfilePicture: {
    width: "35%",
    height: "22%",
    borderRadius: 10,
    position: "relative",
    left: 5,
    top: 5,
  },
  eventoPreviewImage: {
    width: "100%",
    height: "102%",
    borderRadius: 10,
    position: "relative",
    top: -51,
    zIndex: -1,
  },
  eventoPreviewText: {
    position: "relative",
    top: -90,
    zIndex: -1,
    color: theme.colors.white,
    fontSize: 20,
    fontFamily: theme.fonts.bold,
  },
});
