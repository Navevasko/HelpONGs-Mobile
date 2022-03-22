import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CadastroONG from "../screens/CadastroONG";
import CadastroUsuario from "../screens/CadastroUsuario";
import { LoginUsuario } from "../screens/LoginUsuario";
import LoginONG from "../screens/LoginONG";

const stackNavigation = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen name="CadastroONG" component={CadastroONG} />
      <Stack.Screen name="CadastroUsuario" component={CadastroUsuario} />
      <Stack.Screen name="LoginUsuario" component={LoginUsuario} />
      <Stack.Screen name="LoginONG" component={LoginONG} />
    </Stack.Navigator>
  );
};
