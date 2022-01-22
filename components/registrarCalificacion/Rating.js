import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useMemo } from 'react';
import Rate from './Rate';

export default function Rating(props) {

    const { index, rating, hoverRating, onMouseEnter, onMouseLeave, onSaveRating} = props;

    const fill = useMemo(() => {
        if(hoverRating >= index) {
            return '#bef5e8';
        } else if (!hoverRating && rating >= index) {
            return '#bef5e8';
        }
        return '#ccc';
    }, [rating, hoverRating, index]);
  return (
    // <View>
        <TouchableOpacity 
            onMouseEnter={() => onMouseEnter(index)}
            onMouseLeave={() => onMouseLeave()}
            onPress={() => onSaveRating(index)}
        >
            <Rate fill={fill} index={index} />
        </TouchableOpacity>
    // {/* </View> */}
  );
}

const styles = StyleSheet.create({});