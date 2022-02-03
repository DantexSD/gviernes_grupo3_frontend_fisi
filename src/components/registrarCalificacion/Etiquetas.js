import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import React, { useState } from 'react';

export default function Etiquetas(props) {

    const { onSaveEtiqueta, handleRemove } = props;

    const [count, setCount] = useState(1)
    const [selected, setSelected] = useState(false)
    const [selected2, setSelected2] = useState(false)
    const [selected3, setSelected3] = useState(false)
    const [selected4, setSelected4] = useState(false)
    const [selected5, setSelected5] = useState(false)
    const [selected6, setSelected6] = useState(false)
    const [selected7, setSelected7] = useState(false)
    const [selected8, setSelected8] = useState(false)

    const select = (s, ss) => {

        if(count > 3) {
            ss(false)
            if(s) {
                ss(false)
                setCount(count - 1)
            }
        } else {
            if(!s) {
                setCount(count + 1)
                ss(true)
                console.log(count)
        
            } else {
                ss(false)
                setCount(count - 1)
                console.log(count)
            }
        }
    
    }

  return (
    <View style={{marginBottom: 15}}>
        <Text style={styles.textHeader}>Etiquetas (seleccione 3)</Text>
        <View style={{flexDirection: "row"}}>
            <Etiqueta Text="Participacion activa" select={select} selected={selected} onSaveEtiqueta={onSaveEtiqueta} handleRemove={handleRemove}  setSelected={setSelected}/>
            <Etiqueta Text="Muchos trabajos" select={select} selected={selected2} onSaveEtiqueta={onSaveEtiqueta} handleRemove={handleRemove} setSelected={setSelected2} />
        </View>
        <View style={{flexDirection: "row"}}>
            <Etiqueta Text="Examenes dificiles" select={select} selected={selected3} onSaveEtiqueta={onSaveEtiqueta} handleRemove={handleRemove} setSelected={setSelected3} />
            <Etiqueta Text="Apoya" select={select} selected={selected4} onSaveEtiqueta={onSaveEtiqueta} handleRemove={handleRemove} setSelected={setSelected4} />
        </View>
        <View style={{flexDirection: "row"}}>
            <Etiqueta Text="Califica duro" select={select} selected={selected5} onSaveEtiqueta={onSaveEtiqueta} handleRemove={handleRemove} setSelected={setSelected5} />
            <Etiqueta Text="Promedios bajos" select={select} selected={selected6} onSaveEtiqueta={onSaveEtiqueta} handleRemove={handleRemove} setSelected={setSelected6} />
        </View>
        <View style={{flexDirection: "row"}}>
            <Etiqueta Text="Pocos exámenes" select={select} selected={selected7} onSaveEtiqueta={onSaveEtiqueta} handleRemove={handleRemove} setSelected={setSelected7} />
            <Etiqueta Text="Clases excelentes" select={select} selected={selected8} onSaveEtiqueta={onSaveEtiqueta} handleRemove={handleRemove} setSelected={setSelected8} />
        </View>
    </View>
  );
}

const Etiqueta = (props) => (
    <View style={styles.etiquetaContainer}>
        <TouchableOpacity onPress={() => {
            props.select(props.selected, props.setSelected), 
            props.selected === false ? props.onSaveEtiqueta(props.Text) : props.handleRemove(props.Text)
        }} style={{
            padding: 10, 
            backgroundColor: props.selected === false ? "#c4c4c4" : "#000", 
            borderRadius: 10
        }}>
            <Text style={{
                color: props.selected === false ? "#000" : "#fff"
            }}>{props.Text}</Text>
            <TextInput 
                style={{height: 0}} 
                disableFullscreenUI={true}
                value={props.Text}
            />
        </TouchableOpacity>
    </View>
)

const styles = StyleSheet.create({
    textHeader: {
        marginTop: 15,
        marginBottom: 15, 
        fontWeight: "bold", 
        fontSize: 18
    },
    etiquetaContainer: {
        padding: 5, 
        flexDirection: "column", 
        flex: 1
    },
});