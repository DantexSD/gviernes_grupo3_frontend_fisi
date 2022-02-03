import { StyleSheet, Text, View } from 'react-native';
import { Divider, Icon } from 'react-native-elements';
import React from 'react';

export default function Comments({comentario}) {
    return (
      
          <View style={styles.container}>
              <Divider width={1} orientation='horizontal' />
              <View style={styles.containerUser}>
                  <Text style={styles.text}>{comentario.fecha_calificacion}</Text>
                  <Text style={styles.text}>{comentario.usuario}</Text>
                  <Text style={styles.text}>{(comentario.resultado_as == 1) ? <Icon size={50} name="emoji-happy" color="#4AD828" type="entypo" /> : 
                  (comentario.resultado_as == 0) ? <Icon size={50} name="emoji-neutral" color="#EAE718" type="entypo" /> :
                  <Icon size={50} name="emoji-sad" color="#FF0000" type="entypo" /> }</Text>
              </View>
              <Divider width={2} orientation='vertical' />
              <View style={styles.containerCourse}>
                  <Text>{comentario.curso}</Text>
              </View>
              <Divider width={2} orientation='vertical' />
              <View style={styles.contanierComments}>
                  <Text style={styles.containerEtiqueta}>{(comentario.etiqueta1 == null) ? "" : comentario.etiqueta1}</Text>
                  <Text style={styles.containerEtiqueta}>{comentario.etiqueta2}</Text>
                  <Text style={styles.containerEtiqueta}>{comentario.etiqueta3}</Text>
                  {/* <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}> */}
                      <Text>{comentario.comentario}</Text>
                  {/* </ScrollView> */}
                  <Text>{comentario.like}</Text>
              </View>
          </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 20
    },
    containerUser: {
        paddingRight: 15,
        flex: 0.25
    },
    containerCourse: {
        paddingLeft: 10,
        flex: 0.3,
        justifyContent: "space-evenly",
    },
    containerEtiqueta: {
        backgroundColor: "#c4c4c4",
        textAlign: "center",
        margin: 5,
        padding: 4,
        borderRadius: 5
    },
    contanierComments: {
        flex: 0.45,
        paddingLeft: 10,
    },
    text: {
        marginBottom: 5,
        textAlign: "center"
    }

});