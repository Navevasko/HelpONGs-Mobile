import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Feed from "../screens/Feed";

const StackNavigation = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Feed" component={Feed} />
    </Stack.Navigator>
  );
};

export default StackNavigation;
