import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ConfigUser from "../screens/ConfigUser";
import InformacoesConta from "../screens/InformacoesConta";
import Endereco from "../screens/Endereco";
import ConfigConta from "../screens/ConfigConta";

const StackNavigation = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ConfigConta" component={ConfigConta} />
      <Stack.Screen name="Endereco" component={Endereco} />
      <Stack.Screen name="InformacoesConta" component={InformacoesConta} />
      <Stack.Screen name="ConfigUser" component={ConfigUser} />
    </Stack.Navigator>
  );
};

export default StackNavigation;