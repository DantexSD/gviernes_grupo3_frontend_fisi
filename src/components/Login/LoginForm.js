import React from 'react'
import { View, Text, TextInput, StyleSheet, Pressable, TouchableOpacity, Alert, ActivityIndicator } from 'react-native'
import { Formik } from 'formik'
import { useNavigation } from '@react-navigation/native';
import axios from "../../../axios"

export default function LoginForm() {

    const navigation = useNavigation();

    const onLogin = async (email, password, setSubmitting) => {
        try {
            const users = await axios.post("/users/login", {
                correo: email,
                contrasena: password
            });

            const result = users.data;

            if(result.length > 0) {
                navigation.navigate("Ranking", {
                    usuario: result[0].usuario
                })
                setSubmitting(false)
            } else {
                Alert.alert('Failed...', "Datos inválidos. Intente nuevamente")
            }
            

        } catch (error) {
            Alert.alert('Failed...', "Datos inválidos. Intente nuevamente")
            setSubmitting(false)
        }
    }

    return (
        <View style={styles.wrapper}>
            <Formik
                initialValues={{email: '', password: ''}}
                onSubmit={(values, {setSubmitting, resetForm}) => {
                    onLogin(values.email, values.password, setSubmitting)
                    // resetForm({ values: ""})
                    values.email="",
                    values.password=""
                }}
                validateOnMount={true}

            >
                {({handleChange, handleBlur, handleSubmit, values, isValid, isSubmitting}) => (
                <>
                    <View style={[styles.inputField, 
                        {borderColor: values.email.length > 1 ? '#ccc' : 'red'}
                        ]}>
                        <TextInput 
                            placeholderTextColor='#444'
                            placeholder='correo@unmsm.edu.pe'
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
                    <View>
                        {!isSubmitting && 
                        <Pressable titleSize={20} style={styles.button} onPress={handleSubmit} disabled={!isValid}>
                            <Text style={styles.buttonText}>Iniciar Sesión</Text>
                        </Pressable>}
                        {isSubmitting &&
                        <Pressable disabled={true} style={styles.button} >
                            <ActivityIndicator size="large" color={"#fff"} />
                        </Pressable>}
                    </View>
                    <View style={{alignItems: "center", marginTop: 20}}>
                        <Text style={{color: "#000", fontWeight: "bold"}}>¿Olvidaste tu contraseña?</Text>
                    </View>
                    <View style={styles.signUpContain}>
                        <Text>¿Todavía no tienes una cuenta?</Text>
                        <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
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

    // button: isValid => ({
    //     backgroundColor: isValid ? "#4a4945" : "#9ACAF7",
    //     alignItems: "center",
    //     justifyContent: "center",
    //     minHeight: 42,
    //     borderRadius: 4,
    //     marginTop: 20
    // }),

    button: {
        backgroundColor: "#4a4945",
        alignItems: "center",
        justifyContent: "center",
        minHeight: 42,
        borderRadius: 4,
        marginTop: 20
    },

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