import { StyleSheet } from "react-native"
import { theme } from "../../global/styles/theme"

export const styles = StyleSheet.create({
    container: {
        width: '90%',
        minHeight: 100,
        alignSelf: 'center',
        backgroundColor: theme.colors.grey,
        paddingTop: 5,
    },
    profileContainer: {
        width: '95%',
        height: 75,
        backgroundColor: theme.colors.white,
        padding: 20,
        marginBottom: 15,
        alignSelf: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 8
    },
    image: {
        width: 60,
        height: 60,
        borderRadius: 60,
    },
    info: {
        width: '80%',
        alignItems:'center',
    },
    name: {
        fontSize: 20,
        fontFamily: theme.fonts.medium
    },
    button: {
        width: '50%',
        height: 25,
        backgroundColor: theme.colors.secondary,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        marginTop: 5,
    }
})