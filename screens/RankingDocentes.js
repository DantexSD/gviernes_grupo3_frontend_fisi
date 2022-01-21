import React from "react";
import { StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";
import { useNavigation } from '@react-navigation/native'

export default function RankingDocentes() {

  const navigation = useNavigation();

  const dataDocentes = [
    {
      name: "Gamboa Cruzado Javier Arturo",
      recommend: 1,
      dificult: "3.3",
    },
    {
      name: "Gamboa Cruzado Javier Arturo",
      recommend: 1,
      dificult: "3.6",
    },
    {
      name: "Gamboa Cruzado Javier Arturo",
      recommend: 1,
      dificult: "4.2",
    },
    {
      name: "Gamboa Cruzado Javier Arturo",
      recommend: 1,
      dificult: "4.8",
    },
    {
      name: "Gamboa Cruzado Javier Arturo",
      recommend: 0,
      dificult: "5.9",
    },
    {
      name: "Gamboa Cruzado Javier Arturo",
      recommend: 0,
      dificult: "6.3",
    },
    {
      name: "Gamboa Cruzado Javier Arturo",
      recommend: 0,
      dificult: "6.9",
    },
    {
      name: "Gamboa Cruzado Javier Arturo",
      recommend: -1,
      dificult: "7.2",
    },
    {
      name: "Gamboa Cruzado Javier Arturo",
      recommend: -1,
      dificult: "8.1",
    },
    {
      name: "Gamboa Cruzado Javier Arturo",
      recommend: -1,
      dificult: "8.7",
    },
  ];

  return (
    <View style={styles.rankingContainer}>
      <Text style={styles.rankingTittle}>
        Facultad de Sistemas e informática
      </Text>
      <View style={styles.searchContainer}>
        <View style={styles.searchContent}>
          <TextInput
            style={styles.inputText}
            placeholder="Buscar profesor..."
          />
          <Icon
            style={styles.iconSearch}
            name="search"
            color="#000"
            type="fontawesome"
          />
        </View>
      </View>

      <View style={styles.rankingHeader}>
        <Text style={styles.qualificationTeacher}>Calificación</Text>
        <Text style={styles.nameHeader}>Nombre Docente</Text>
        <Text style={styles.dificultTeacher}>Dificultad</Text>
      </View>
      <ScrollView>
        {dataDocentes.map((docente, index) => (
          <View key={index} style={styles.contentDocente}>
            <Text style={styles.qualificationTeacher}>
              {docente.recommend == 1 ? (
                <Icon
                  size={40}
                  name="emoji-happy"
                  color="#4AD828"
                  type="entypo"
                />
              ) : docente.recommend == 0 ? (
                <Icon
                  size={40}
                  name="emoji-neutral"
                  color="#EAE718"
                  type="entypo"
                />
              ) : (
                <Icon
                  size={40}
                  name="emoji-sad"
                  color="#FF0000"
                  type="entypo"
                />
              )}
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate("Calificacion del docente")} style={{flex: 1}}>
              <Text style={styles.nameTeacher}>{docente.name}</Text>
            </TouchableOpacity>
            
            <Text style={styles.dificultTeacher}>{docente.dificult}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  rankingContainer: {
    flex: 1,
    backgroundColor: "#fff",
  },
  rankingTittle: {
    fontSize: 20,
    margin: 20,
  },
  searchContainer: {
    margin: 20,
  },
  searchContent: {
    width: "70%",
    position: "relative",
  },
  inputText: {
    borderWidth: 1,
    padding: 10,
    paddingRight: 30,
    fontSize: 15,
  },
  iconSearch: {
    position: "absolute",
    top: 0,
    left: 0,
  },
  rankingHeader: {
    textAlign: "center",
    margin: 20,
    marginTop: 10,
    marginBottom: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#c4c4c4",
  },
  contentDocente: {
    margin: 20,
    marginTop: 10,
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 5,
    paddingTop: 0,
    paddingBottom: 0,
    marginBottom: 20,
    borderRadius: 5,
  },
  qualificationTeacher: {
    width: "25%",
    textAlign: "center",
  },
  nameHeader: {
    textAlign: "center",
    color: "#000"
  },
  nameTeacher: {
    // width: "55%",
    textAlign: "center",
    color: "#3990cc"
    // flex: 1,
    // alignItems: "center",
    // justifyContent: "center"
  },
  dificultTeacher: {
    width: "20%",
    textAlign: "center",
  },
});
