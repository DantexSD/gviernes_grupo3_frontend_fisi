import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity, Image } from "react-native";
import { Icon } from "react-native-elements";
import { useNavigation } from '@react-navigation/native'
import axios from "../../axios"

export default function RankingDocentes({ route }) {

  const navigation = useNavigation();

  const [rankingDocentes, setRankingDocentes] = useState([]);
  const [filterDocentes, setFilterDocentes] = useState([]);
  const { usuario } = route.params;

  useEffect(() => {
    axios.get("/ranking").then((res) => {
        setRankingDocentes(res.data)
        setFilterDocentes(res.data)
    });
  }, [])

  const filter = (text) => {
    if(text) {
      const newData = filterDocentes.filter((item) => {
        const itemData = item.docente ? item.docente.toUpperCase() : ''.toUpperCase()
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1
      })
      setRankingDocentes(newData)
    } else {
      setRankingDocentes(filterDocentes)
    }
  }

  return (
    <View style={styles.rankingContainer}>
      <View style={{backgroundColor: "#c4c4c4",height: 60, justifyContent: "center", marginBottom: 20}}>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Icon style={{alignItems: "flex-end", paddingRight: 30}} size={30} name="log-out" color="#000" type="entypo" />
        </TouchableOpacity>
      </View>
      <View style={{flexDirection: "row", marginLeft: 20, alignItems: "center"}}>
        <Image source={{uri: "https://procsoft.files.wordpress.com/2019/10/cropped-logo-fisi-3.png?w=240", height: 50, width: 50, paddingRight: 10}} />
        <View>
          <Text style={styles.rankingTittle}>
            Facultad de Ingeniería 
          </Text>
          <Text style={styles.rankingTittle}>
            de Sistemas e Informática
          </Text>
        </View>

      </View>
      <View style={styles.searchContainer}>
        <View style={styles.searchContent}>
          <TextInput
            style={styles.inputText}
            placeholder="Buscar profesor..."
            onChangeText={(event) => filter(event)}
          />
          <Icon
            style={styles.iconSearch}
            name="search"
            color="#000"
            type="fontawesome"
            size={30}
          />
        </View>
      </View>
      <View style={styles.rankingHeader}>
        <Text style={styles.qualificationTeacher}>Calificación</Text>
        <Text style={styles.nameHeader}>Nombre Docente</Text>
        <Text style={styles.dificultTeacher}>Dificultad</Text>
      </View>
      <ScrollView>
        {rankingDocentes.map((docente, index) => (
          <View key={index} style={styles.contentDocente}>
            <Text style={styles.qualificationTeacher}>
              {(docente.resultado > 0.2 && docente.resultado <= 1) ? (
                <Icon
                  size={40}
                  name="emoji-happy"
                  color="#4AD828"
                  type="entypo"
                />
              ) : (docente.resultado >= -0.2 && docente.resultado <= 0.2) ? (
                <Icon
                  size={40}
                  name="emoji-neutral"
                  color="#EAE718"
                  type="entypo"
                />
              ) : (docente.resultado >= -1 && docente.resultado < -0.2) ? (
                <Icon
                  size={40}
                  name="emoji-sad"
                  color="#FF0000"
                  type="entypo"
                />
              ) : <Icon 
                    size={40}
                    name="questioncircle"
                    color="#000"
                    type="antdesign"
                  />
              }
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate("Calificacion del docente", {
              id_docente: docente.id_docente,
              docente: docente.docente,
              resultado: docente.resultado,
              dificultad: docente.dificultad,
              usuario: usuario
            })} style={{flex: 1}}>
              <Text style={styles.nameTeacher}>{docente.docente}</Text>
            </TouchableOpacity> 
            <Text style={styles.dificultTeacher}>{(docente.dificultad == 10.0) ? "-" : docente.dificultad}</Text>
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
    marginLeft: 15
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
    elevation: 4
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
    textAlign: "center",
    color: "#3990cc"
  },
  dificultTeacher: {
    width: "20%",
    textAlign: "center",
  },
});