import { StyleSheet, Text, View, ScrollView, Pressable } from "react-native";
import React from "react";
import Summary from "../components/calificacion/Summary";
import Comments from "../components/calificacion/Comments";
import RankingDocente from "./RankingDocentes";

export default function CalificacionDocente() {
  const data = [{}];

  return (
    <View style={styles.container}>
      <Summary />
      <View style={styles.containerComment}>
        <Text style={styles.numberComments}>
          2 calificaciones de estudiantes
        </Text>
        <View style={styles.header}>
          <Text>Calficación</Text>
          <Text>Curso</Text>
          <Text>Comentarios</Text>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Comments />
        </ScrollView>
        <Pressable titleSize={20} style={styles.button}>
          <Text style={styles.buttonText}>Calificar docente</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
  },
  containerComment: {
    margin: 20,
  },
  numberComments: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
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
    backgroundColor: "#0096F6",
    alignItems: "center",
    justifyContent: "center",
    minHeight: 42,
    borderRadius: 4,
    marginTop: 20,
  },
  buttonText: {
    fontWeight: "600",
    color: "#fff",
    fontSize: 20,
  },
});
