import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import RankingDocentes from "./screens/RankingDocentes";

export default function Navigation() {
  const Stack = createStackNavigator();

  //Header Show
  //   const screenOptions = {
  //     headerShown: true,
  //   };

  return (
    <NavigationContainer>
      {/* initialRouteName -> tu pantalla de inicio */}
      <Stack.Navigator initialRouteName="RankingDocentes">
        {/* Creas tus pantallas */}

        <Stack.Screen
          name="Ranking"
          component={RankingDocentes}
          headerShown={true}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
