import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import CadastroUsuario from "../screens/CadastroUsuario";
import CadastroONG from "../screens/CadastroONG";
const StackNavigation = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="CadastroUsuario" component={CadastroUsuario} />
      <Stack.Screen name="CadastroONG" component={CadastroONG} />
    </Stack.Navigator>
  );
};

export default StackNavigation;