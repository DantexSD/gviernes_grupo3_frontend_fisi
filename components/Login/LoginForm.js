import React, { useState } from 'react'
import { View, Text, TextInput, Button, StyleSheet, Pressable, TouchableOpacity, Alert } from 'react-native'
import { Formik } from 'formik'

// npm install email-validator

export default function LoginForm() {


    // Function Login
    // const onLogin = async (email, password) => {
    //     try {
    //         // await firebase.auth().signInWithEmailAndPassword(email, password)
    //         await signInWithEmailAndPassword(auth, email, password)
    //         console.log("firebase login Success", email, password)
    //         console.log(auth.uid)
    //     } catch(error) {
    //         Alert.alert(
    //             'Estimado...', error.message + '\n\n ... What would you like to do next',
    //             [
    //                 {
    //                     text: 'OK',
    //                     onPress: () => console.log('OK'),
    //                     style: 'cancel',
    //                 },
    //                 {
    //                     text: 'Sign Up',
    //                     onPress: () => navigation.push('SignupScreen'),
    //                 }
    //             ]
    //         )
    //     }
    // }

    return (
        <View style={styles.wrapper}>
            <Formik
                initialValues={{email: '', password: ''}}
                onSubmit={(values) => {
                    // onLogin(values.email, values.password)
                    console.log("confe")
                }}
                validateOnMount={true}

            >
                {({handleChange, handleBlur, handleSubmit, values, isValid}) => (
                <>
                    <View style={[styles.inputField, 
                        {borderColor: values.email.length < 1 ? '#ccc' : 'red'}
                        ]}>
                        <TextInput 
                            placeholderTextColor='#444'
                            placeholder='Correo'
                            autoCapitalize='none'
                            keyboardType='email-address'
                            textContentType='emailAddress'
                            autoFocus={true}
                            onChangeText={handleChange('email')}
                            onBlur={handleBlur('email')}
                            value={values.email}
                        />
                    </View>
                    <View style={[styles.inputField,
                        {borderColor: 1 > values.password.length || values.password.length >= 6 ? '#ccc' : 'red'}
                    ]}>
                        <TextInput 
                            placeholderTextColor='#444'
                            placeholder='Contraseña'
                            autoCapitalize='none'
                            autoCorrect={false}
                            secureTextEntry={true}
                            textContentType='password'
                            onChangeText={handleChange('password')}
                            onBlur={handleBlur('password')}
                            value={values.password}
                        />
                    </View>
                    {/* <Button title='Log in' /> */}
                    <Pressable titleSize={20} style={styles.button(isValid)} onPress={handleSubmit} disabled={!isValid}>
                        <Text style={styles.buttonText}>Iniciar Sesión</Text>
                    </Pressable>
                    <View style={{alignItems: "center", marginTop: 20}}>
                        <Text style={{color: "#000", fontWeight: "bold"}}>¿Olvidaste tu contraseña?</Text>
                    </View>
                    <View style={styles.signUpContain}>
                        <Text>¿Todavía no tienes una cuenta?</Text>
                        <TouchableOpacity>
                            <Text style={styles.signUpText}> Registrate</Text>
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

    signUpContain: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "center",
        marginTop: 50
    },

    signUpText: {
        // color: "#6BB0F5"
        color: "#000",
        fontWeight: "bold"
    }
})