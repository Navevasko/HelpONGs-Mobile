import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Doar from "../screens/TelaDoacao";
import CadastroUsuario from "../screens/CadastroUsuario";
import CadastroONG from "../screens/CadastroONG";
import LoginUser from "../screens/LoginUser";
import LoginONG from "../screens/LoginONG";
import PerfilONG from "../screens/perfilOng";
import { SelecioneLoginUsuario } from "../screens/SelecioneLoginUsuario";
import { SelecioneLoginOng } from "../screens/SelecioneLoginOng";
import EsqueciSenha from "../screens/EsqueciSenha";
import ConfigONG from "../screens/ConfigONG";
import ConfigUser from "../screens/ConfigUser";
import ControleVaga from "../screens/Controle";

const StackNavigation = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SelecioneLoginOng" component={SelecioneLoginOng} />
      <Stack.Screen name="SelecioneLoginUsuario" component={SelecioneLoginUsuario} />
      <Stack.Screen name="PerfilONG" component={PerfilONG}/>
      <Stack.Screen name="ConfigONG" component={ConfigONG}/>
      <Stack.Screen name="ConfigUser" component={ConfigUser}/>
      <Stack.Screen name="LoginUser" component={LoginUser} />
      <Stack.Screen name="CadastroONG" component={CadastroONG} />
      <Stack.Screen name="CadastroUsuario" component={CadastroUsuario} />
      <Stack.Screen name="LoginONG" component={LoginONG} />
      <Stack.Screen name="Doar" component={Doar} />
      <Stack.Screen name="EsqueciSenha" component={EsqueciSenha} />
      <Stack.Screen name="ControleVaga" component={ControleVaga} />
      
    </Stack.Navigator>
  );
};

export default StackNavigation;
