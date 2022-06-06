import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ConfigUser from "../screens/ConfigUser";
import ConfigONG from "../screens/ConfigONG";

const StackNavigation = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ConfigONG" component={ConfigONG} /> 
      <Stack.Screen name="ConfigUser" component={ConfigUser} /> 
    </Stack.Navigator>
  );
};

export default StackNavigation;
