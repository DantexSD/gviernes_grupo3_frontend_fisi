import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import LoginForm from '../components/Login/LoginForm';

const PROFE_LOGO = "https://i.ibb.co/whd5HRC/profe.png"

export default function LoginScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Image source={{uri: PROFE_LOGO, height: 200, width: 150 }} />
                <Text style={{fontWeight: "bold", fontSize: 25}}>Conoce a tu</Text>
                <Text style={{fontWeight: "bold", fontSize: 25}}>docente</Text>
                <Text style={{fontWeight: "bold", fontSize: 25}}>FISI</Text>

            </View>
            <LoginForm />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        paddingTop: 50,
        paddingHorizontal: 12,
    },

    logoContainer: {
        alignItems: "center",
        // backgroundColor: "#c4c"
        // marginTop: 60
    }
})