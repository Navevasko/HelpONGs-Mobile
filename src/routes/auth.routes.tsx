import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const StackNavigation = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
    </Stack.Navigator>
  );
};

export default StackNavigation;
