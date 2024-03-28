import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { TabsRouter } from "./tabs.routes";
import { SplachScreen } from "../screens/SplachScreen";
import { PlayerScreen } from "../screens/Player";
import { createStackNavigator } from "@react-navigation/stack";

export function Routes() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="SplachScreen" component={SplachScreen} />
        <Stack.Screen name="Player" component={PlayerScreen} />
        <Stack.Screen name="Tabs" component={TabsRouter} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
