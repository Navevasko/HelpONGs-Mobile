import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import CadastroONG from "../screens/CadastroONG";
import CadastroUsuario from "../screens/CadastroUsuario";
import { SelecioneLoginUsuario } from "../screens/SelecioneLoginUsuario";
import { SelecioneLoginOng } from "../screens/SelecioneLoginOng";
import LoginONG from "../screens/LoginONG";
import LoginUser from "../screens/LoginUser";

const StackNavigation = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="SelecioneLoginOng" component={SelecioneLoginOng} />
      <Stack.Screen name="LoginONG" component={LoginONG} />
      <Stack.Screen name="LoginUser" component={LoginUser } />
      <Stack.Screen name="LoginUsuario" component={SelecioneLoginUsuario} />
      <Stack.Screen name="CadastroONG" component={CadastroONG} />
      <Stack.Screen name="CadastroUsuario" component={CadastroUsuario} />
    </Stack.Navigator>
  );
};

export default StackNavigation;