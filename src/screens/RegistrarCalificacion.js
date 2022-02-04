import { Text, StyleSheet, View, TextInput, Pressable, Alert, ScrollView, ActivityIndicator } from 'react-native';
import React, { useState } from 'react';
import Rating from '../components/registrarCalificacion/Rating';
import { Divider } from 'react-native-elements';
import Etiquetas from '../components/registrarCalificacion/Etiquetas';
import { useNavigation } from '@react-navigation/native'
import { Formik } from 'formik';
import axios from "../../axios"

export default function RegistrarCalificacion({ route }) {

    // State Navigation
    const navigation = useNavigation();

    // State Rate 1-5 Dificultad
    const [rating, setRating] = useState(0);
    const [hoverRating, setHoverRating] = useState(0);

    // State Rate 1-5 Curso
    const [ratingCurso, setRatingCurso] = useState(0);
    const [hoverRatingCurso, setHoverRatingCurso] = useState(0);

    // State Rate 1-5 Material
    const [ratingMaterial, setRatingMaterial] = useState(0);
    const [hoverRatingMaterial, setHoverRatingMaterial] = useState(0);

    // State Etiquetas
    const [etiqueta1, setEtiqueta1] = useState([]);

    // Data de Obtenida de Ranking Docente
    const { id_docente, docente, resultado, dificultad, usuario } = route.params;

    // Fecha actual
    const time = new Date();

    // Guardar estado en etiquetas
    const onSaveEtiqueta = (text) => {
        setEtiqueta1([...etiqueta1, text])
    }

    // Eliminar array de etiquetas
    const handleRemove = (text) => {
        const newTicket = etiqueta1.filter((index) => index !== text)
        setEtiqueta1(newTicket)
    }

    // ------------ Dificultad ------------
    const onMouseEnter = (index) => {
        setHoverRating(index);
    };

    const onMouseLeave = () => {
        setHoverRating(0);
    }

    const onSaveRating = (index) => {
        setRating(index);
    };

    // ------------ Curso ------------
    const onMouseEnterCurso = (index) => {
        setHoverRatingCurso(index);
    };

    const onMouseLeaveCurso = () => {
        setHoverRatingCurso(0);
    }

    const onSaveRatingCurso = (index) => {
        setRatingCurso(index);
    };

    // ------------ Material ------------
    const onMouseEnterMaterial = (index) => {
        setHoverRatingMaterial(index);
    };
    
    const onMouseLeaveMaterial = () => {
        setHoverRatingMaterial(0);
    }
    
    const onSaveRatingMaterial = (index) => {
        setRatingMaterial(index);
    };

    // Post to BACKEND
    const onRegisterCalification = async (curso, comentario, dificultad2, dominio, material, etiqueta1, etiqueta2, etiqueta3, setSubmitting) => {
        try {
            await axios.post('/calificaciones/create', {
                id_docente: id_docente,
                usuario: usuario,
                id_etiqueta: `${usuario}${etiqueta1.substring(0,2)}${etiqueta2.substring(0,2)}${etiqueta3.substring(0,2)}${(Math.random() + 1).toString(36).substring(7)}`,
                fecha_calificacion: `${time.toLocaleDateString()}`,
                curso: curso,
                dificultad: dificultad2,
                dominio_curso: dominio,
                material_didactico: material,
                comentario: comentario,
                numero_like: 0,
                etiqueta1: etiqueta1,
                etiqueta2: etiqueta2,
                etiqueta3: etiqueta3
            })

            navigation.navigate("Calificacion del docente", {
                id_docente: id_docente,
                docente: docente,
                resultado: resultado,
                dificultad: dificultad,
                usuario: usuario
            })

            setSubmitting(false)

        } catch (e) {
            Alert.alert('Error...', 'Completa los campos correctamente')
            setSubmitting(false)
        }
    }

    return (
        <View style={{margin: 20, flex: 1}}>
            {/* <KeyboardAvoidingView behavior='padding' style={{flex: 1}}> */}
            <ScrollView style={{}} showsVerticalScrollIndicator={false}>
                <Text style={{fontSize: 20, textAlign: "center"}}>{docente}</Text>
            
                <Formik
                    initialValues={{curso: '', comentario: '', dificultad: rating, dominio: ratingCurso, material: ratingMaterial, etiqueta1: etiqueta1[0], etiqueta2: etiqueta1[1], etiqueta3: etiqueta1[2]}}
                    onSubmit={(values, {setSubmitting}) => {
                        if(values.curso == "" || values.comentario == "") {
                            Alert.alert("Datos inválidos", "Complete correctamente los campos")
                        } else {
                            onRegisterCalification(values.curso, values.comentario, values.dificultad, values.dominio, values.material, values.etiqueta1, values.etiqueta2, values.etiqueta3, setSubmitting)
                        }
                    }}
                    validateOnMount={true}
                    enableReinitialize
                >
                    {({handleChange, handleBlur, handleSubmit, values, isValid, isSubmitting}) => (
                    <>
                        <View style={{backgroundColor: "#eee", marginTop: 5 , marginBottom: 5, borderRadius: 5}}>
                            <View style={styles.formContainer}>
                                <Text style={styles.label}>Curso/Asignatura: </Text>    
                                <View style={styles.input}>
                                    <TextInput 
                                        placeholder='Curso...' 
                                        autoFocus={true}
                                        onChangeText={handleChange("curso")}
                                        onBlur={handleBlur("curso")}
                                        value={values.curso}
                                    />
                                </View>         
                            </View>
                            <View style={styles.formContainer}>
                                <Text style={styles.label}>Dificultad:</Text>
                                <View style={styles.inputContainer}>
                                    {[1, 2, 3, 4, 5].map((item, index) =>(
                                        <Rating
                                            key={index}
                                            index={item}
                                            rating={rating}
                                            hoverRating={hoverRating}
                                            onMouseEnter={onMouseEnter}
                                            onMouseLeave={onMouseLeave}
                                            onSaveRating={onSaveRating}
                                            handleChange={handleChange("dificultad")}
                                            handleBlur={handleBlur("dificultad")}
                                            setRating={setRating}
                                            value={rating}
                                        />
                                    ))}  
                                </View>
                            </View>
                            <View style={styles.formContainer}>
                                <Text style={styles.label}>Domina el curso:</Text>
                                <View style={styles.inputContainer}>
                                    {[1,2,3,4,5].map((item, index) =>(
                                        <Rating
                                            key={index}
                                            index={item}
                                            rating={ratingCurso}
                                            hoverRating={hoverRatingCurso}
                                            onMouseEnter={onMouseEnterCurso}
                                            onMouseLeave={onMouseLeaveCurso}
                                            onSaveRating={onSaveRatingCurso}
                                            handleChange={handleChange("dominio")}
                                            handleBlur={handleBlur("dominio")}
                                            value={ratingCurso}
                                        />
                                    ))}  
                                </View>
                            </View>
                            <View style={styles.formContainer}>
                                <Text style={styles.label}>Material Didáctico:</Text>
                                <View style={styles.inputContainer}>
                                    {[1, 2, 3, 4, 5].map((item, index) =>(
                                        <Rating
                                            key={index}
                                            index={item}
                                            rating={ratingMaterial}
                                            hoverRating={hoverRatingMaterial}
                                            onMouseEnter={onMouseEnterMaterial}
                                            onMouseLeave={onMouseLeaveMaterial}
                                            onSaveRating={onSaveRatingMaterial}
                                            handleChange={handleChange("material")}
                                            handleBlur={handleBlur("material")}
                                            value={ratingMaterial}
                                        />
                                    ))}  
                                </View>
                            </View>
                        </View>
                        <Divider width={2} orientation='horizontal' />
                        {/* Etiquetas */}
                        <Etiquetas 
                            etiqueta1={etiqueta1}
                            onSaveEtiqueta={onSaveEtiqueta}
                            handleRemove={handleRemove}
                            value1={values.etiqueta1}
                        />
                        <Divider width={2} orientation='horizontal' />
                        {/* comentario */}
                        <Text style={{marginTop: 15, marginBottom: 15, fontWeight: "bold", fontSize: 18}}>Comentario:</Text>
                        <View style={{borderWidth: 1, marginBottom: 15}}>
                            <TextInput 
                                placeholder='Ingrese su comentario' 
                                editable 
                                maxLength={500} 
                                multiline 
                                numberOfLines={6}
                                onChangeText={handleChange('comentario')}
                                onBlur={handleBlur('comentario')}
                                value={values.comentario}
                            />
                        </View>   
                        <Divider width={2} orientation='horizontal' />
                        {/* Button */}
                        <Text style={{marginTop: 10}}>Nota: Comentarios constructivos. Cualquier comentario inadecuado será eliminado</Text>
                        <View style={{ marginTop: 15, marginBottom: 15}}>
                            <Text style={{fontSize: 15, fontWeight: "bold", textAlign: "center"}}>¿Realizar calificación?</Text>
                            <View style={{flexDirection: "row", justifyContent: "space-around", flex: 1}}>
                                
                                {!isSubmitting && 
                                <Pressable onPress={handleSubmit} titleSize={20} style={styles.buttonSi} >
                                    <Text style={styles.buttonText}>Si</Text>
                                </Pressable>}

                                {isSubmitting &&
                                <Pressable style={styles.buttonSi} disabled={true} >
                                    <ActivityIndicator size="large" color={"#444"} />
                                </Pressable>}
                                <Pressable onPress={() => navigation.navigate("Calificacion del docente", {
                                        id_docente: id_docente,
                                        docente: docente,
                                        resultado: resultado,
                                        dificultad: dificultad,
                                        usuario: usuario
                                })} titleSize={20} style={styles.buttonNo} >
                                    <Text style={styles.buttonText}>No</Text>
                                </Pressable>
                            </View>
                        </View>
                    </>
                    )} 
                </Formik>
            </ScrollView>
            {/* </KeyboardAvoidingView> */}
        </View>
    );
  
}

const styles = StyleSheet.create({
    formContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 10,
        marginBottom: 10 
    },
    label: {
        flex: 0.7,
        fontSize: 15,
        fontWeight: "bold"
    },
    inputContainer: {
        flexDirection: "row",
        flex: 1

    },
    input: {
        flex: 1,
        height: 40,
        borderWidth: 1,
        justifyContent: "center",
        padding: 10
    },
    buttonSi: {
        backgroundColor: "#1DC04B",
        justifyContent: "center",
        minHeight: 42,
        borderRadius: 4,
        marginTop: 20,
        flex: 0.4
    },   
    buttonNo: {
        backgroundColor: "#FE1C1C",
        justifyContent: "center",
        minHeight: 42,
        borderRadius: 4,
        marginTop: 20,
        flex: 0.4
    },
    buttonText: {
        fontWeight: "600",
        color: "#fff",
        fontSize: 20,
        textAlign: "center"
    },
});