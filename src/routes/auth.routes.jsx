import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { SelecioneLoginUsuario } from "../screens/SelecioneLoginUsuario";
import { SelecioneLoginOng } from "../screens/SelecioneLoginOng";

const StackNavigation = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SelecioneLoginUsuario" component={SelecioneLoginUsuario} />
      <Stack.Screen name="SelecioneLoginOng" component={SelecioneLoginOng} />
    </Stack.Navigator>
  );
};

export default StackNavigation;
