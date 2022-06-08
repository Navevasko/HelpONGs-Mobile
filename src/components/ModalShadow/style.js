import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  shadow: {
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(41,41,41,0.5)",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    zIndex: 999,
  },
});