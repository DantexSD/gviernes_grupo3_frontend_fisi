import { StyleSheet, Text, View, ScrollView, Pressable, FlatList } from 'react-native';
import { Divider } from "react-native-elements"
import React, { useState } from 'react';
import Summary from '../components/calificacion/Summary';
import Comments from '../components/calificacion/Comments';
import { useNavigation } from '@react-navigation/native'

export default function CalificacionDocente() {

    const navigation = useNavigation();

    const DATA = [
        {
            id: 1,
            resultado: 1,
            fecha: "2/01/2021",
            usuario: "luis",
            curso: "Teoria General de Sistemas",
            etiqueta: "Es bueno",
            comentario: "El profesor explica demasiado bien, su clase es muy divertida.",
            numero_like: 10
        },
        {
            id: 2,
            resultado: -1,
            fecha: "2/01/2022",
            usuario: "carlos",
            curso: "Proceso de negocios",
            etiqueta: "Es bueno",
            comentario: "Es muy malo",
            numero_like: 10
        },
        {
            id: 3,
            resultado: 0,
            fecha: "2/01/2021",
            usuario: "juan",
            curso: "Proceso de negocios",
            etiqueta: "Es bueno",
            comentario: "Muchas preguntas",
            numero_like: 10
        },
        {
            id: 4,
            resultado: -1,
            fecha: "2/01/2021",
            usuario: "sebastian",
            curso: "Minería de datos",
            etiqueta: "Es bueno",
            comentario: "Califica muy duro",
            numero_like: 10
        },
        {
            id: 5,
            resultado: 1,
            fecha: "2/01/2021",
            usuario: "daniel",
            curso: "Minería de datos",
            etiqueta: "Es bueno",
            comentario: "Buena enseñanza",
            numero_like: 10
        },
        {
            id: 6,
            resultado: 0,
            fecha: "2/01/2021",
            usuario: "junior",
            curso: "Minería de datos",
            etiqueta: "Es bueno",
            comentario: "Muchos trabajos",
            numero_like: 10
        },
    ]

    const [comentarioData, setComentarioData] = useState(DATA);

  return (
    <View style={styles.container}>
      <Summary />
      <View style={styles.containerComment}>
        <Text style={styles.numberComments}>2 calificaciones de estudiantes</Text>
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
            <Pressable titleSize={20} style={styles.button} >
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
        // margin: 20,
        padding: 10,
        marginBottom: 20,
        borderRadius: 5,
        backgroundColor: "#c4c4c4",
    }, 
    button: {
        // marginHorizontal: 30,
        backgroundColor: "#1DC04B",
        alignItems: "center",
        justifyContent: "center",
        minHeight: 42,
        borderRadius: 4,
        marginTop: 20,
        // position: "relative"
    },
    buttonText: {
        fontWeight: "600",
        color: "#fff",
        fontSize: 20
    },
});


