import {Image, ImageSourcePropType, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import React from "react";


export interface AromaCircleProps {
  image: ImageSourcePropType;
  name: string;
}

export function AromaCircle({ image, name }: AromaCircleProps) {
  return (
    <TouchableOpacity style={styles.root}>
      <View style={styles.circle}>
        <Image source={image} />
      </View>
      <Text style={styles.text}>{name}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  root: {
    width: 75,
  },
  circle: {
    width: 75,
    height: 75,
    backgroundColor: '#fff',
    borderRadius: 37,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "rgb(0,27,96)",
    shadowOpacity: 1,
    shadowRadius: 14.00,
    elevation: 4,
  },
  text: {
    color: '#270D47',
    fontWeight: "500",
    fontSize: 14,
    textAlign: "center"
  }
});
