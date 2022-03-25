import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import CadastroONG from "../screens/CadastroONG";
import CadastroUsuario from "../screens/CadastroUsuario";
import { LoginUsuario } from "../screens/LoginUsuario";
import LoginONG from "../screens/LoginONG";

const StackNavigation = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="LoginUsuario" component={LoginUsuario} />
      <Stack.Screen name="CadastroONG" component={CadastroONG} />
      <Stack.Screen name="CadastroUsuario" component={CadastroUsuario} />
      <Stack.Screen name="LoginONG" component={LoginONG} />
    </Stack.Navigator>
  );
};

export default StackNavigation;