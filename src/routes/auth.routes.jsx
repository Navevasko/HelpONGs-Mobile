import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Controle from "../screens/Controle";

const StackNavigation = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ControleVaga" component={Controle} />
    </Stack.Navigator>
  );
};

export default StackNavigation;
