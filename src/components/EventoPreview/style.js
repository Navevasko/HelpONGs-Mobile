import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  eventoPreview: {
    width: 140,
    height: "100%",
    backgroundColor: theme.colors.white,
    borderRadius: 10,
    marginEnd: 20,
  },
  eventoPreviewProfilePicture: {
    width: "25%",
    height: "22%",
    borderRadius: 100,
    resizeMode: "cover",
    position: "relative",
    left: 5,
    top: 5,
  },
  eventoPreviewImage: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
    position: "relative",
    top: -37,
    resizeMode: "cover",
    zIndex: -1,
  },
  eventoPreviewText: {
    position: "absolute",
    bottom: 0,
    zIndex: -1,
    color: theme.colors.white,
    fontSize: 20,
    fontFamily: theme.fonts.bold,
  },
});
