import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import CalificacionDocente from "./screens/CalificacionDocente";


export default function Navigation() {

  const Stack = createStackNavigator();

  //Header Show
//   const screenOptions = {
//     headerShown: true,
//   };

  return (
    <NavigationContainer>
      {/* initialRouteName -> tu pantalla de inicio */}
      <Stack.Navigator
        initialRouteName="Calificacion del docente"
        
      >
        {/* Creas tus pantallas */}
        <Stack.Screen name="Calificacion del docente" headerShown={true} component={CalificacionDocente} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}
