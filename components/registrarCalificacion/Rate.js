import { StyleSheet, Text, View } from 'react-native';
import { Icon } from "react-native-elements";
import React from 'react';

export default function Rate(props) {

    const {fill = 'none', index} = props;
    
  return (
    <View fill={fill} style={{borderRadius: 10}}>
        {console.log(fill)}
        {/* <Text>{fill}</Text> */}
      {/* <Icon  color={fill} size={35}  name="emoji-neutral" type="entypo" /> */}
      <View style={{backgroundColor: fill, paddingTop: 10, paddingBottom: 10, paddingHorizontal: 15}}>
            <Text>{index}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
