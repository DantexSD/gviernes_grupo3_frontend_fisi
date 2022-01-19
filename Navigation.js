import React from 'react'
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"


export default function Navigation() {

    const Stack = createStackNavigator()

    //Header Show
    const screenOptions = {
        headerShown: false
    }

    return (
        <NavigationContainer>
            {/* initialRouteName -> tu pantalla de inicio */}
            <Stack.Navigator initialRouteName="" screenOptions={screenOptions} >
                {/* Creas tus pantallas */}
                <Stack.Screen name="" component={} />
                <Stack.Screen name="" component={} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}