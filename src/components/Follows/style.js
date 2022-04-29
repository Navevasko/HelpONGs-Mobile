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
        marginTop: 20,
        marginBottom: 60,
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
        width: '90%',
        alignSelf: 'center',
        marginTop: 10,
        justifyContent: 'space-evenly',
        flexWrap: 'wrap',
        flexDirection: 'row',
        paddingTop: 20,
        paddingBottom: 30
    },
    ONGContainer: {
        height: 150,
        alignItems: 'center',
    },
    followerImage: {
        width: 85,
        maxHeight: 110,
        resizeMode: 'stretch'
    },
    ONGname: {
        fontFamily: theme.fonts.regular,
        fontSize: 13,
        width: '100%',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    }
});
