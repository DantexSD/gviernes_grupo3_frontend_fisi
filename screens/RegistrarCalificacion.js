import { Text, StyleSheet, View, TextInput, Pressable,  } from 'react-native';
import React, { useState } from 'react';
import Rating from '../components/registrarCalificacion/Rating';
import { Button, Divider } from 'react-native-elements';
import Etiquetas from '../components/registrarCalificacion/Etiquetas';
import { useNavigation } from '@react-navigation/native'

export default function RegistrarCalificacion() {

    const navigation = useNavigation();

    // const etiqueta = [
    //     {
    //         etiqueta: "Participación activa"
    //     },
    //     {
    //         etiqueta: "Muchos trabajos"
    //     },
    //     {
    //         etiqueta: "Exámenes difíciles"
    //     },
    //     {
    //         etiqueta: "Apoya"
    //     },
    //     {
    //         etiqueta: "Muchas tareas"
    //     },
    //     {
    //         etiqueta: "Promedios bajos"
    //     }
    // ]

    const [rating, setRating] = useState(0);
    const [hoverRating, setHoverRating] = useState(0);

    const [ratingCurso, setRatingCurso] = useState(0);
    const [hoverRatingCurso, setHoverRatingCurso] = useState(0);

    const [ratingMaterial, setRatingMaterial] = useState(0);
    const [hoverRatingMaterial, setHoverRatingMaterial] = useState(0);

    // ------------ Dificultad ------------
    const onMouseEnter = (index) => {
        setHoverRating(index);
    };

    const onMouseLeave = () => {
        setHoverRating(0);
    }

    const onSaveRating = (index) => {
        setRating(index);
        console.log(index)
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
        console.log(index)
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
        console.log(index)
    };

    return (
        <View style={{margin: 20}}>
            <Text style={{fontSize: 20, textAlign: "center"}}>Gamboa Cruzado Javier Arturo</Text>
            
            <View style={{backgroundColor: "#eee", marginTop: 5 , marginBottom: 5, borderRadius: 5}}>
                <View style={styles.formContainer}>
                    <Text style={styles.label}>Curso/Asignatura: </Text>
                    <View style={styles.input}>
                        <TextInput placeholder='Curso...' />
                    </View>         
                </View>
                <View style={styles.formContainer}>
                    <Text style={styles.label}>Dificultad:</Text>
                    <View style={styles.inputContainer}>
                        {[1, 2, 3, 4, 5].map((index) =>(
                            <Rating
                                index={index}
                                rating={rating}
                                hoverRating={hoverRating}
                                onMouseEnter={onMouseEnter}
                                onMouseLeave={onMouseLeave}
                                onSaveRating={onSaveRating}
                            />
                        ))}  
                    </View>
                </View>
                <View style={styles.formContainer}>
                    <Text style={styles.label}>Domina el curso:</Text>
                    <View style={styles.inputContainer}>
                        {[1,2,3,4,5].map((index) =>(
                            <Rating
                                index={index}
                                rating={ratingCurso}
                                hoverRating={hoverRatingCurso}
                                onMouseEnter={onMouseEnterCurso}
                                onMouseLeave={onMouseLeaveCurso}
                                onSaveRating={onSaveRatingCurso}
                            />
                        ))}  
                    </View>
                </View>
                <View style={styles.formContainer}>
                    <Text style={styles.label}>Material Didáctico:</Text>
                    <View style={styles.inputContainer}>
                        {[1, 2, 3, 4, 5].map((index) =>(
                            <Rating
                                index={index}
                                rating={ratingMaterial}
                                hoverRating={hoverRatingMaterial}
                                onMouseEnter={onMouseEnterMaterial}
                                onMouseLeave={onMouseLeaveMaterial}
                                onSaveRating={onSaveRatingMaterial}
                            />
                        ))}  
                    </View>
                </View>
            </View>
            <Divider width={2} orientation='horizontal' />
            {/* Etiquetas */}
            <Etiquetas />
            <Divider width={2} orientation='horizontal' />
            {/* comentario */}
            <Text style={{marginTop: 10, fontWeight: "bold", fontSize: 18}}>Comentario:</Text>
            <View style={{borderWidth: 1, marginBottom: 15}}>
                <TextInput placeholder='Ingrese su comentario' editable maxLength={40} multiline numberOfLines={5} />
            </View>   
            <Divider width={2} orientation='horizontal' />
            {/* Button */}
            <Text style={{marginTop: 10}}>Nota: Comentarios constructivos. Cualquier comentario inadecuado será eliminado</Text>
            <View style={{flexDirection: "row", alignItems: "center"}}>
                <Text style={{fontSize: 15, fontWeight: "bold"}}>¿Realizar calificación?</Text>
                <View style={{flexDirection: "row", justifyContent: "space-around", flex: 1, alignItems: "center"}}>
                    <Pressable onPress={() => navigation.navigate("Calificacion del docente")} titleSize={20} style={styles.buttonSi} >
                        <Text style={styles.buttonText}>Si</Text>
                    </Pressable>
                    <Pressable onPress={() => navigation.navigate("Calificacion del docente")} titleSize={20} style={styles.buttonNo} >
                        <Text style={styles.buttonText}>No</Text>
                    </Pressable>
                </View>
            </View>
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
        flex: 0.3
    },   
    buttonNo: {
        backgroundColor: "#FE1C1C",
        justifyContent: "center",
        minHeight: 42,
        borderRadius: 4,
        marginTop: 20,
        flex: 0.3
    },
    buttonText: {
        fontWeight: "600",
        color: "#fff",
        fontSize: 20,
        textAlign: "center"
    },
});