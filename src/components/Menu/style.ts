import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        width: "100%",
        height: 45,
        borderBottomWidth: 1,
        alignItems: "center",
        justifyContent: "space-between",
        padding: 10
    },
    options: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "50%",
    },
    icons: {
        width: 30,
        height: 30,
        color: theme.colors.secondary
    },
    profilePicture: {
        width: 40,
        height: 40
    }
})