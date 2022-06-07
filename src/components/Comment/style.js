import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    minHeight: 50,
    paddingTop: 10,
    flexDirection: "row",
    alignSelf: "center",
    marginTop: 10,
  },
  image: {
    width: "12%",
    height: 37,
    borderRadius: 100,
    resizeMode: "cover",
  },
  textContainer: {
    minWidth: "85%",
    backgroundColor: theme.colors.primary,
    borderRadius: 10,
    padding: 10,
  },
  name: {
    fontSize: 15,
    fontFamily: theme.fonts.alternateSemiBold,
  },
  text: {
    fontSize: 12,
    fontFamily: theme.fonts.regular,
  },
  time: {
    fontSize: 12,
    fontFamily: theme.fonts.bold,
    marginTop: 3,
  },
  likeContainer: {
    flex: 1,
    marginStart: 20,
  },
});
