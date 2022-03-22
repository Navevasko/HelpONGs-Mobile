import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { LoginUsuario } from "./src/screens/LoginUsuario";
import AppLoading from "expo-app-loading";
import {
  Montserrat_100Thin,
  Montserrat_100Thin_Italic,
  Montserrat_300Light,
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";
import {
  MontserratAlternates_200ExtraLight,
  MontserratAlternates_600SemiBold,
} from "@expo-google-fonts/montserrat-alternates";
import { useFonts } from "expo-font";

export default function App() {
  const [fontsLoaded] = useFonts({
    MontserratAlternates_200ExtraLight,
    MontserratAlternates_600SemiBold,
    Montserrat_100Thin,
    Montserrat_100Thin_Italic,
    Montserrat_300Light,
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View>
      <LoginUsuario/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
