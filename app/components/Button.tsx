import React from "react";
import {StyleSheet, Text, TouchableOpacity} from "react-native";
import {LinearGradient} from 'expo-linear-gradient';

export interface ButtonProps {
  title: string;
  onPress: () => null;
}

export function Button({title, onPress}: ButtonProps) {
  return (
    <TouchableOpacity
      style={styles.root}
      onPress={onPress}
    >
      {/* FIXME */}
      <LinearGradient
        colors={['#AD89F7', '#8257DA']}
        start={[0.2, 0.9]}
        end={[0.9, 0.2]}
        style={styles.background}
      >
        <Text style={styles.text}>{title}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  root: {
    width: '100%',
    height: 55,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#AD89F7",
    shadowOffset: {
      width: 2,
      height: 2
    },
    elevation: 2
  },
  background: {
    width: '100%',
    height: '100%',
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    justifyContent: "center",
    color: '#fff',
    fontSize: 17,
    fontWeight: "500",
  }
});
