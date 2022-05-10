import { StyleSheet } from "react-native"
import { theme } from "../../global/styles/theme"

export const styles = StyleSheet.create({
    option: {
        width: "85%",
        alignSelf: "center",
        justifyContent: 'space-evenly',
        marginTop: 40
      },
      optionStyle: {
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingStart: 10,
          paddingEnd: 10,
      },
      textOption: {
        fontFamily: theme.fonts.semiBold,
        color: theme.colors.primary,
        fontSize: 25,
        marginBottom: 2,
      },
      optionArrow: {
        color: theme.colors.black,
        textAlign: 'center',
      },
      line: {
        width: "100%",
        borderBottomWidth: 2,
        borderColor: theme.colors.grey,
      },
})