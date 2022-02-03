import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import CalificacionDocente from "./src/screens/CalificacionDocente";
import RankingDocentes from "./src/screens/RankingDocentes";
import RegistrarCalificacion from "./src/screens/RegistrarCalificacion";
import LoginScreen from "./src/screens/LoginScreen";
import SignupScreen from "./src/screens/SignupScreen";


export default function Navigation() {

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
      >
        {/* Creas tus pantallas */}
        <Stack.Screen name="Calificacion del docente" headerShown={true} component={CalificacionDocente} />
        <Stack.Screen name="Registrar Calificacion" component={RegistrarCalificacion} options={{headerShown: false}} />
        <Stack.Screen name="Ranking" component={RankingDocentes} options={{headerShown: false}}  />
        <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false}}  />
        <Stack.Screen name="Signup" component={SignupScreen} options={{headerShown: false}} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}