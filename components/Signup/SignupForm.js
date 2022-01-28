import React, { useState } from 'react'
import { View, Text, TextInput, Pressable, TouchableOpacity, StyleSheet, Alert } from 'react-native'
import { Formik } from 'formik'


export default function SignupForm() {

    //Function Register
    // const onSignup = async (email, password, username) => {
    //     try {
    //         const user = await createUserWithEmailAndPassword(auth, email, password);
    //         console.log("firebase register Success", email, password)

    //         // insert to database
    //         await setDoc(doc(db, "users", user.user.uid), {
    //             owner_uid: user.user.uid,
    //             username: username,
    //             email: user.user.email,
    //             profile_picture: await getRandomProfilePicture(),
    //         })

    //     } catch(error) {
    //         Alert.alert('Failed ...', error.message)
    //     }
    // }

    // const getRandomProfilePicture = async () => {
    //     const response = await fetch('https://randomuser.me/api')
    //     const data = await response.json()
    //     return data.results[0].picture.large
    // }

    return (
        <View style={styles.wrapper}>
            <Formik
                initialValues={{email: '', username: '', password: ''}}
                onSubmit={(values) => {
                    // onSignup(values.email, values.password, values.username)
                    console.log("data")
                }}
                validateOnMount={true}
            >
                {({handleChange, handleBlur, handleSubmit, values, isValid}) => (
                    <>
                        <View style={[styles.inputField,
                            {borderColor: values.email.length < 1 ? '#ccc' : 'red'}
                        ]}>
                            <TextInput 
                                placeholderTextColor="#444"
                                placeholder="Correo"
                                autoCapitalize="none"
                                keyboardType="email-address"
                                autoFocus={true}
                                onChangeText={handleChange('email')}
                                onBlur={handleBlur('email')}
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
                            {borderColor: 1 > values.password.length || values.password.length > 6 ? "#ccc" : "red"}
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
                            <TouchableOpacity>
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