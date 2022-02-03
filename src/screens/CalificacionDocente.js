import { StyleSheet, Text, View, ScrollView, Pressable } from 'react-native';
import { Divider } from "react-native-elements";
import React, { useState, useEffect } from 'react';
import Summary from '../components/calificacion/Summary';
import Comments from '../components/calificacion/Comments';
import { useNavigation } from '@react-navigation/native';
import axios from "../../axios";

export default function CalificacionDocente({ route }) {

    const navigation = useNavigation();

    const [comentarioData, setComentarioData] = useState([]);

    const { id_docente, docente, resultado, dificultad, usuario } = route.params;

    useEffect(() => {
        let isCurrent = true
        axios.get(`/calificaciones/${id_docente}`).then((res) => {
            if(!isCurrent) return
            setComentarioData(res.data)
        })
        return () => (isCurrent = false)
    }, [comentarioData])

    return (
        <View style={styles.container}>
          <Summary docente={docente} resultado={resultado} dificultad={dificultad} />
          <View style={styles.containerComment}>
            <Text style={styles.numberComments}>{comentarioData.length > 0 ? comentarioData.length + " calificaciones de estudiantes" : "No hay comentarios ¿Quieres añadir uno?" }</Text>
            <View style={styles.header}>
                <Text style={{flex: 0.25, paddingRight: 10 }}>Calficación</Text>
                <Text style={{flex: 0.3}}>Curso</Text>
                <Text style={{flex: 0.45}}>Comentarios</Text>
            </View>   
            <View style={{height: "50%"}}>
                <ScrollView scrollEnabled={true} showsVerticalScrollIndicator={true} >  
                    {comentarioData.map((comentario, index) => (   
                        <Comments  comentario ={comentario} key={index} /> 
                    ))}        
                </ScrollView>
            </View> 
            
            <Divider orientation='horizontal' width={1} />
            <View>
                <Pressable onPress={() => navigation.navigate("Registrar Calificacion", {
                    id_docente: id_docente,
                    docente: docente,
                    resultado: resultado,
                    dificultad: dificultad,
                    usuario: usuario
                })} titleSize={20} style={styles.button} >
                    <Text style={styles.buttonText}>Calificar docente</Text>
                </Pressable>
            </View>
          </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        flex: 1
    },
    containerComment: {
        margin: 20
    },
    numberComments: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 10
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 10,
        marginBottom: 20,
        borderRadius: 5,
        backgroundColor: "#c4c4c4",
    }, 
    button: {
        backgroundColor: "#1DC04B",
        alignItems: "center",
        justifyContent: "center",
        minHeight: 42,
        borderRadius: 4,
        marginTop: 20,
    },
    buttonText: {
        fontWeight: "600",
        color: "#fff",
        fontSize: 20
    },
});