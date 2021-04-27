import React from "react";
import { Text } from "react-native";
import {StyleSheet, View} from "react-native";
import SemiCircleRate from "./SemiCircleRate";

interface RateProps {
  rate: number;
}

export default ({ rate }: RateProps) => {
  return (
    <View>
      <SemiCircleRate progress={rate / 10} />
      <Text style={styles.text}>{rate.toFixed(1)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    position: "relative",
    fontSize: 26,
    fontWeight: "500",
    color: '#000',
    textAlign: "center",
    top: '-52%'
  }
});
