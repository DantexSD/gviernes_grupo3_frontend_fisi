import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Icon } from "react-native-elements"

export default function Summary() {

    const dataSummary = [
        {
            name: "Gamboa Cruzado Javier Arturo",
            recommend: 1,
            dificult: "6.9"
        }
    ]

    return (
        <View style={styles.container}>
            <Text style={{fontSize: 20, textAlign: "center"}}>{dataSummary[0].name}</Text>
            <View style={styles.summary}>
                <View style={styles.summaryLeft}>
                    <Text style={styles.textContent}>Lo recomiendan</Text>
                    <Text style={styles.textContentResult}>
                        {(dataSummary[0].recommend == 1) ? <Icon size={50} name="emoji-happy" color="#000" type="entypo" /> : 
                        (dataSummary[0].recommend == 0) ? <Icon size={50} name="emoji-neutral" color="#000" type="entypo" /> : 
                        <Icon size={50} name="emoji-sad" color="#000" type="entypo" />}
                    </Text>
                </View>
                <View style={styles.summaryRight}>
                    <Text style={styles.textContent}>Dificultad</Text>
                    <Text style={styles.textContentResult}>5.4</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        margin: 20,
        // backgroundColor: "#c4c4c4"
    },

    summary: {
        marginTop: 25,
        paddingTop: 50,
        paddingBottom: 50,
        // paddingHorizontal: 90,
        flexDirection: "row",
        backgroundColor: "#c4c4c4",
        justifyContent: "space-around",
        borderRadius: 15
    },

    summaryLeft: {
        // padding: ""
        // backgroundColor: "#f3f",
        alignItems: "center"
    },

    summaryRight: {
        // backgroundColor: "#f3f6",
        alignItems: "center"
    },

    textContent: {
        fontSize: 18
    },

    textContentResult: {
        fontSize: 30,
        fontWeight: "bold",
        marginTop: 10,
        // justifyContent: "center"
        // alignSelf: "center"
        // width: 50,
        // height: 50,
        // backgroundColor: "#f3f6",
    },

    icon: {
        // width: 20,
        // height: 10
    }
});
