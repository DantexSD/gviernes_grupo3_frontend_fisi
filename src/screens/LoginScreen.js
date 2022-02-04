import React from 'react'
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import LoginForm from '../components/Login/LoginForm';

const PROFE_LOGO = "https://i.ibb.co/whd5HRC/profe.png"

export default function LoginScreen() {
    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.logoContainer}>
                    <Image source={{uri: PROFE_LOGO, height: 200, width: 150 }} />
                    <Text style={{fontWeight: "bold", fontSize: 25}}>Conoce a tu</Text>
                    <Text style={{fontWeight: "bold", fontSize: 25}}>docente</Text>
                    <Text style={{fontWeight: "bold", fontSize: 25}}>FISI</Text>

                </View>
                <LoginForm />
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        paddingTop: 20,
        paddingHorizontal: 12,
    },
    logoContainer: {
        alignItems: "center",
    }
})