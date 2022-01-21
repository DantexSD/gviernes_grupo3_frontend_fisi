import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';

export default function Etiquetas() {
  return (
    <View>
        <Text style={styles.textHeader}>Etiquetas (seleccione 3)</Text>
        <View style={{flexDirection: "row"}}>
            <View style={styles.etiquetaContainer}>
                <TouchableOpacity style={styles.etiquetaContanierInfo}>
                    <Text>Participación activa</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.etiquetaContainer}>
                <TouchableOpacity style={styles.etiquetaContanierInfo}>
                    <Text>Muchos trabajos</Text>
                </TouchableOpacity>
            </View>
        </View>
        <View style={{flexDirection: "row"}}>
            <View style={styles.etiquetaContainer}>
                <TouchableOpacity style={styles.etiquetaContanierInfo}>
                    <Text>Exámenes difíciles</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.etiquetaContainer}>
                <TouchableOpacity style={styles.etiquetaContanierInfo}>
                    <Text>Apoya</Text>
                </TouchableOpacity>
            </View>
        </View>
        <View style={{flexDirection: "row"}}>
            <View style={styles.etiquetaContainer}>
                <TouchableOpacity style={styles.etiquetaContanierInfo}>
                    <Text>Muchas tareas</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.etiquetaContainer}>
                <TouchableOpacity style={styles.etiquetaContanierInfo}>
                    <Text>Promedios bajos</Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    textHeader: {
        marginTop: 10, 
        fontWeight: "bold", 
        fontSize: 18
    },
    etiquetaContainer: {
        padding: 5, 
        flexDirection: "column", 
        flex: 1
    },
    etiquetaContanierInfo: {
        padding: 10, 
        backgroundColor: "#c4c4c4", 
        borderRadius: 10
    }
});
