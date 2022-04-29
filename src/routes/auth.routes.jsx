import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ConfigUser from "../screens/ConfigUser";

const StackNavigation = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>

    <Stack.Screen name="ConfigUser" component={ConfigUser} />
      
    </Stack.Navigator>
  );
};

export default StackNavigation;