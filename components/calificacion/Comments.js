import { StyleSheet, Text, View } from 'react-native';
import { Divider } from 'react-native-elements';
import React from 'react';

export default function Comments() {
  return (
    <View style={styles.container}>
      <Divider width={1} orientation='horizontal' />
      {/* <Comment /> */}
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        // margin: 20,
        // backgroundColor: "#c4c4c4"
    },

});
