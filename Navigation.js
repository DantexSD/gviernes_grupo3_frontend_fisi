import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import CalificacionDocente from "./screens/CalificacionDocente";
import RankingDocentes from "./screens/RankingDocentes";

export default function Navigation() {
  const Stack = createStackNavigator();

  //Header Show
  const screenOptions = {
    headerShown: false,
  };

  return (
    <NavigationContainer>
      {/* initialRouteName -> tu pantalla de inicio */}
      <Stack.Navigator
        initialRouteName="RankingDocentes"
        screenOptions={screenOptions}
      >
        {/* Creas tus pantallas */}
        <Stack.Screen
          name="CalificacionDocente"
          component={CalificacionDocente}
        />
        <Stack.Screen name="RankingDocentes" component={RankingDocentes} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
