import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import CalificacionDocente from "./screens/CalificacionDocente";
import RankingDocentes from "./screens/RankingDocentes";
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
        initialRouteName="Ranking"
        
      >
        {/* Creas tus pantallas */}
        <Stack.Screen name="Calificacion del docente" headerShown={true} component={CalificacionDocente} />
        <Stack.Screen name="Registrar Calificacion" component={RegistrarCalificacion} options={{headerShown: false}} />
        <Stack.Screen name="Ranking" component={RankingDocentes} headerShown={true}  />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}
