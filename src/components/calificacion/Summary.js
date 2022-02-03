import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Divider, Icon } from "react-native-elements"

export default function Summary({docente, resultado, dificultad}) {

    return (
        <View style={styles.container}>
            <Text style={{fontSize: 20, textAlign: "center"}}>{docente}</Text>
            <View style={styles.summary}>
                <View style={styles.summaryLeft}>
                    <Text style={styles.textContent}>Lo recomiendan</Text>
                    <Text style={styles.textContentResult}>
                        {(resultado > 0.2 && resultado <= 1) ? <Icon size={60} name="emoji-happy" color="#4AD828" type="entypo" /> : 
                        (resultado >= -0.2 && resultado <= 0.2) ? <Icon size={60} name="emoji-neutral" color="#EAE718" type="entypo" /> : 
                        (resultado >= -1 && resultado < 0.2) ? <Icon size={60} name="emoji-sad" color="#FF0000" type="entypo" /> :
                        <Icon size={60} name="questioncircle" color="#000" type="antdesign" />}
                    </Text>
                </View>
                <Divider color='#fff' width={1} orientation='vertical'></Divider>
                <View style={styles.summaryRight}>
                    <Text style={styles.textContent}>Dificultad</Text>
                    <Text style={styles.textContentResult}>{(dificultad ==  10.0) ? "-" : dificultad }</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginRight: 20,
        marginLeft: 20
    },

    summary: {
        marginTop: 25,
        paddingTop: 50,
        paddingBottom: 50,
        flexDirection: "row",
        backgroundColor: "#c4c4c4",
        justifyContent: "space-around",
        borderRadius: 15
    },

    summaryLeft: {
        alignItems: "center"
    },

    summaryRight: {
        alignItems: "center"
    },

    textContent: {
        fontSize: 18
    },

    textContentResult: {
        fontSize: 30,
        fontWeight: "bold",
        marginTop: 10,

    },

    icon: {
        // width: 20,
        // height: 10
    }
});