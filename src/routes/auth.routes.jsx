import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import CadastroUsuario from "../screens/CadastroUsuario";
import CadastroONG from "../screens/CadastroONG";
import LoginUser from "../screens/LoginUser";
import LoginONG from "../screens/LoginONG";

const StackNavigation = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="CadastroONG" component={CadastroONG} />
      <Stack.Screen name="CadastroUsuario" component={CadastroUsuario} />
      <Stack.Screen name="LoginONG" component={LoginONG} />
      <Stack.Screen name="LoginUser" component={LoginUser} />
      
    </Stack.Navigator>
  );
};

export default StackNavigation;
