import {StyleSheet, View, Text} from "react-native";
import React from "react";

interface BadgeProps {
  ageRestrict: 0 | 3 | 7 | 12 | 16 | 18;
}

export default ({ ageRestrict }: BadgeProps) => {
  return (
    <View style={styles.border}>
      <Text style={styles.text}>{ageRestrict}+</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  border: {
    width: 34,
    height: 22,
    borderRadius: 2,
    borderColor: '#CDC7D6',
    borderWidth: 1,
    alignItems: "center",
  },
  text: {
    color: '#CDC7D6'
  }
});
