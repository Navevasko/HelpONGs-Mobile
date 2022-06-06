import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: theme.colors.white,
    alignSelf: "center",
    position: "absolute",
    top: 30,
    zIndex: 1,
    borderRadius: 5,
    padding: 20,
  },
  cardContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
    padding: 5,
    paddingEnd: 20,
    paddingStart: 20,
    backgroundColor: theme.colors.grey,
    borderRadius: 5,
  },
  image: {
    width: "20%",
    height: 45,
    borderRadius: 100,
    resizeMode: "cover",
    backgroundColor: theme.colors.primary,
  },
  name: {
    width: "80%",
    fontSize: 17,
    fontFamily: theme.fonts.alternateSemiBold,
    marginStart: 10,
    textAlign: "center",
  },
});
