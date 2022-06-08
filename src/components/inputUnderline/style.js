import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 50,
    flexDirection: "row",
    justifyContent: 'center',
    marginStart: 10,
  },
  input: {
    height: 25,
    flexGrow: 1,
    minWidth: '87%',
    marginStart: -15,
    marginTop: 7,
    borderBottomWidth: 2,
    borderRadius: 1,
    alignSelf: 'center',
    fontSize: 22.5,
    fontFamily: theme.fonts.medium
  },
  containerIcon: {
    width: '10%',
    position: 'relative',
    start: -10,
    flexGrow: 1,
    justifyContent: "center",
  },
  icon: {
    alignSelf: "center",
  },
});