import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import PerfilONG from "../screens/perfilOng";
import Doar from "../screens/TelaDoacao";

const StackNavigation = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>

    <Stack.Screen name="PerfilONG" component={PerfilONG} />
    <Stack.Screen name="Doar" component={Doar} />
    
    </Stack.Navigator>
  );
};

export default StackNavigation;
