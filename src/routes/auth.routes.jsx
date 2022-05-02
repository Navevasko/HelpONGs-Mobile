import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import CadastroUsuario from "../screens/CadastroUsuario";
import CadastroONG from "../screens/CadastroONG";
import LoginUser from "../screens/LoginUser";
import LoginONG from "../screens/LoginONG";
import PerfilONG from "../screens/PerfilOng";
import { SelecioneLoginUsuario } from "../screens/SelecioneLoginUsuario";
import { SelecioneLoginOng } from "../screens/SelecioneLoginOng";

const StackNavigation = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SelecioneLoginOng" component={SelecioneLoginOng} />
      <Stack.Screen name="SelecioneLoginUsuario" component={SelecioneLoginUsuario} />
      <Stack.Screen name="LoginUser" component={LoginUser} />
      <Stack.Screen name="PerfilONG" component={PerfilONG}/>
      <Stack.Screen name="CadastroONG" component={CadastroONG} />
      <Stack.Screen name="CadastroUsuario" component={CadastroUsuario} />
      <Stack.Screen name="LoginONG" component={LoginONG} />
      
      
    </Stack.Navigator>
  );
};

export default StackNavigation;
