import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { TextInput } from 'react-native-gesture-handler';

export default function Rate(props) {

  const {fill = 'none', index, handleChange, handleBlur, value, setRating } = props;
  
return (
  <View fill={fill} style={{borderRadius: 10}}>
    <View style={{backgroundColor: fill, paddingTop: 10, paddingBottom: 10, paddingHorizontal: 10}}>
          <Text style={{textAlign: "center"}}>{index}</Text>
          <TextInput
            style={{height: "0%"}} 
            disableFullscreenUI={true}
            onChangeText={handleChange}
            onBlur={handleBlur}
            value={value.toString()}
          />
    </View>
  </View>
);
}

const styles = StyleSheet.create({});