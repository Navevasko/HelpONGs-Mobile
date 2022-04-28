import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import EsqueciSenha from "../screens/EsqueciSenha";
import RedefinirSenha from "../screens/RedefinirSenha";
import SucessoRedefinirSenha from "../screens/SucessoRedefinicaoDeSenha";

const StackNavigation = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="SucessoRedefinirSenha"
        component={SucessoRedefinirSenha}
      />
      <Stack.Screen name="RedefinirSenha" component={RedefinirSenha} />
      <Stack.Screen name="EsqueciSenha" component={EsqueciSenha} />
      
      
    </Stack.Navigator>
  );
};

export default StackNavigation;
