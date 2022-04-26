import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import CadastroONG from "../screens/CadastroONG";
import CadastroUsuario from "../screens/CadastroUsuario";
import { SelecioneLoginUsuario } from "../screens/SelecioneLoginUsuario";
import { SelecioneLoginOng } from "../screens/SelecioneLoginOng";
import EsqueciSenha from "../screens/EsqueciSenha";
import LoginONG from "../screens/LoginONG";
import LoginUser from "../screens/LoginUser";
import RedefinirSenha from "../screens/RedefinirSenha";
import SucessoRedefinirSenha from "../screens/SucessoRedefinicaoDeSenha";
import PerfilONG from "../screens/perfilOng";
import Doar from "../screens/TelaDoacao";

const StackNavigation = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
     <Stack.Screen name="Doar" component={Doar} />
    <Stack.Screen name="PerfilONG" component={PerfilONG} />
    <Stack.Screen name="LoginUser" component={LoginUser} />
    
    <Stack.Screen
        name="SelecioneLoginUsuario"
        component={SelecioneLoginUsuario}
      />
     
      <Stack.Screen name="SelecioneLoginOng" component={SelecioneLoginOng} />
      <Stack.Screen name="LoginONG" component={LoginONG} />
     

      <Stack.Screen
        name="SucessoRedefinirSenha"
        component={SucessoRedefinirSenha}
      />

      <Stack.Screen name="EsqueciSenha" component={EsqueciSenha} />

      <Stack.Screen name="RedefinirSenha" component={RedefinirSenha} />

      

      <Stack.Screen name="CadastroONG" component={CadastroONG} />
      <Stack.Screen name="CadastroUsuario" component={CadastroUsuario} />
    </Stack.Navigator>
  );
};

export default StackNavigation;
