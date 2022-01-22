import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import RegistrarCalificacion from "./screens/RegistrarCalificacion";

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
        initialRouteName="Registrar Calificacion"
        
      >
        {/* Creas tus pantallas */}
        <Stack.Screen name="Registrar Calificacion" component={RegistrarCalificacion} options={{headerShown: false}} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}
