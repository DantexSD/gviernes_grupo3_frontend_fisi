import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import CalificacionDocente from "./screens/CalificacionDocente";
import RankingDocentes from "./screens/RankingDocentes";
import RegistrarCalificacion from "./screens/RegistrarCalificacion";
import LoginScreen from "./screens/LoginScreen";
import SignupScreen from "./screens/SignupScreen";


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
        initialRouteName="Login"
        
      >
        {/* Creas tus pantallas */}
        <Stack.Screen name="Calificacion del docente" headerShown={true} component={CalificacionDocente} />
        <Stack.Screen name="Registrar Calificacion" component={RegistrarCalificacion} options={{headerShown: false}} />
        <Stack.Screen name="Ranking" component={RankingDocentes} headerShown={true}  />
        <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false}}  />
        <Stack.Screen name="Signup" component={SignupScreen} options={{headerShown: false}} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}