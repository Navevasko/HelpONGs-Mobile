import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        width: "90%",
        backgroundColor: theme.colors.white,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,  
        elevation: 10,
        alignSelf: "center",
        padding: 10,
        borderRadius: 5,
        marginTop: 20
    },
    title: {
        fontSize: 20,
        fontFamily: theme.fonts.regular
    },
    desc: {
        fontSize: 12,
        fontFamily: theme.fonts.regular
    },
    containerFollow: {
        width: '75%',
        alignSelf: 'center',
        height: 200,
        marginTop: 10,
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        flexDirection: 'row',
    },
    ONGContainer: {
        width: 80,
        height: 100,
    },
    followerImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'stretch'
    },
    ONGname: {
        fontFamily: theme.fonts.regular,
        fontSize: 12,
        textAlign: 'center',
    }
});
