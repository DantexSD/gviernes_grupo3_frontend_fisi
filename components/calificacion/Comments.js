import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Divider, Icon } from 'react-native-elements';
import React from 'react';

export default function Comments({comentario}) {
  return (
    
        <View style={styles.container}>
            <Divider width={1} orientation='horizontal' />
            <View style={styles.containerUser}>
                <Text style={styles.text}>{comentario.fecha}</Text>
                <Text style={styles.text}>{comentario.usuario}</Text>
                <Text style={styles.text}>{(comentario.resultado == 1) ? <Icon size={50} name="emoji-happy" color="#4AD828" type="entypo" /> : 
                (comentario.resultado == 0) ? <Icon size={50} name="emoji-neutral" color="#EAE718" type="entypo" /> :
                <Icon size={50} name="emoji-sad" color="#FF0000" type="entypo" /> }</Text>
            </View>
            <Divider width={2} orientation='vertical' />
            <View style={styles.containerCourse}>
                <Text>{comentario.curso}</Text>
            </View>
            <Divider width={2} orientation='vertical' />
            <View style={styles.contanierComments}>
                <Text>{comentario.etiqueta}</Text>
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
        // margin: 5,
        marginBottom: 20
        // borderWidth: 1
    },
    containerUser: {
        paddingRight: 15,
        // width: 90
        flex: 0.25
    },
    containerCourse: {
        paddingLeft: 10,
        // width: 100,
        flex: 0.3,
        justifyContent: "space-evenly",
    },
    contanierComments: {
        flex: 0.45,
        paddingLeft: 10,
        // width: 240
    },
    text: {
        marginBottom: 5,
        textAlign: "center"
    }

});