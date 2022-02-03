import React from 'react'
import { View, Text, TextInput, Pressable, TouchableOpacity, StyleSheet, Alert } from 'react-native'
import { Formik } from 'formik'
import { useNavigation } from '@react-navigation/native';
import axios from "../../../axios"

export default function SignupForm() {

    const navigation = useNavigation();

    const regex = '^([a-z0-9_\.-]+)@unmsm\.edu\.pe$';

    const onRegister = async (email, username, password) => {
        try {
            await axios.post('/users/signup', {
                usuario: username,
                correo: email,
                contrasena: password,
                admin: 0
            })

            navigation.navigate("Login")
            Alert.alert("Exito", "Usuario Registrado")

        } catch (e) {
            Alert.alert('Failed...', 'Completa los campos correctamente')
        }
    }

    return (
        <View style={styles.wrapper}>
            <Formik
                initialValues={{email: '', username: '', password: ''}}
                onSubmit={(values, {resetForm}) => {
                    if(values.email == "" || values.username == "" || values.password == "") {
                        Alert.alert("Error", "Ingrese los campos correctamente")
                    } else if(values.password.length < 6 || (values.email).search(regex) == -1) {
                        Alert.alert("Datos Inválidos", "Recuerde: La contraseña debe ser mayor a 6 caracteres y el correo debe ser tucorreo@unmsm.edu.pe")
                    } else {
                        onRegister(values.email, values.username, values.password)
                        resetForm({ values: ""})
                    }
                }}
                validateOnMount={true}
            >
                {({handleChange, handleBlur, handleSubmit, values, isValid}) => (
                    <>
                        <View style={[styles.inputField,
                            {borderColor: values.email.length > 1 ? '#ccc' : 'red'}
                        ]}>
                            <TextInput 
                                placeholderTextColor="#444"
                                placeholder="correo@unmsm.edu.pe"
                                autoCapitalize="none"
                                keyboardType="email-address"
                                autoFocus={true}
                                onChangeText={handleChange('email')}
                                onBlur={handleBlur('email')}
                                // returnKeyType='done'
                                value={values.email}
                            />
                        </View>
                        <View style={[styles.inputField,
                            {borderColor: 1 > values.username.length || values.username.length > 2 ? "#ccc" : "red"}
                        ]}>
                            <TextInput 
                                placeholderTextColor="#444"
                                placeholder="Usuario"
                                autoCapitalize="none"
                                textContentType="username"
                                onChangeText={handleChange("username")}
                                onBlur={handleBlur("username")}
                                value={values.username}
                            />
                        </View>
                        <View style={[styles.inputField,
                            {borderColor: 1 > values.password.length || values.password.length >= 6 ? "#ccc" : "red"}
                        ]}>
                            <TextInput 
                                placeholderTextColor="#444"
                                placeholder="Contraseña"
                                autoCapitalize="none"
                                secureTextEntry={true}
                                textContentType="password"
                                onChangeText={handleChange("password")}
                                onBlur={handleBlur("password")}
                                value={values.password}
                            />
                        </View>
                        <Pressable titleSize={20} style={styles.button(isValid)} onPress={handleSubmit}>
                            <Text style={styles.buttonText}>Registrar</Text>
                        </Pressable>
                        <View style={styles.loginContainer}>
                            <Text>¿Ya tienes una cuenta? </Text>
                            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                                <Text style={{color: "#000", fontWeight: "bold"}}>Inicia Sesión</Text>
                            </TouchableOpacity>
                        </View>
                    </>
                )}
            </Formik>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        marginTop: 40
    },

    inputField: {
        borderRadius: 4,
        padding: 12,
        backgroundColor: "#FAFAFA",
        marginBottom: 10,
        borderWidth: 1
    },

    loginContainer: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "center",
        marginTop: 50
    },

    button: isValid => ({
        backgroundColor: isValid ? "#4a4945" : "#9ACAF7",
        alignItems: "center",
        justifyContent: "center",
        minHeight: 42,
        borderRadius: 4,
        marginTop: 20
    }),

    buttonText: {
        fontWeight: "600",
        color: "#fff",
        fontSize: 20
    },

    signUpText: {
        color: "#000",
        fontWeight: "bold"
    }
})