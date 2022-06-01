import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  filesContainer: {
    width: "100%",
    maxHeight: 270,
    flexWrap: "wrap",
  },
  mainFile: {
    width: "100%",
    height: 250,
    borderRadius: 10,
  },
  altMainFile: {
    width: 170,
    height: 250,
    borderRadius: 10,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
  },
  twoFiles: {
    width: 170.5,
    height: 250,
    marginStart: 5,
    borderRadius: 10,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
  },
  threeFiles: {
    width: 170.5,
    height: 122.5,
    marginStart: 5,
  },
});
