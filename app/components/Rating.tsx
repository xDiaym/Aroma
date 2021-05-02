import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import Progress from "./Progress";
import Rate from "./Rate";

const { width } = Dimensions.get("window");
const MAX_TEXTLINE_WIDTH = width / 3.5;

interface RatingProps {
  total: number;
  directing: number;
  plot: number;
  entertainment: number;
  aromas: number;
}

interface LineProps {
  name: string;
  rate: number;
}

const Line = ({ name, rate }: LineProps) => {
  return (
    <View style={lineStyles.root}>
      <Text style={lineStyles.text}>{name}</Text>
      <View style={lineStyles.progress}>
        <Progress progress={rate / 10} />
      </View>
    </View>
  );
}

const lineStyles = StyleSheet.create({
  root: {
    flexDirection: "row"
  },
  text: {
    color: '#270D47',
    flexDirection: "column",
    fontFamily: "Rubik",
    fontWeight: "400",
    fontSize: 14,
    width: MAX_TEXTLINE_WIDTH
  },
  progress: {
    top: 10,
    fontSize: 14,
  }
});

export default ({ total, aromas, directing, plot, entertainment }: RatingProps) => {
  return (
    <View style={{ flexDirection: "row" }}>
      <Rate rate={total} />
      <View style={ratingStyles.progresses}>
        <Line name={"Aromas"} rate={aromas} />
        <Line name={"Directing"} rate={directing} />
        <Line name={"Plot"} rate={plot} />
        <Line name={"Entertainment"} rate={entertainment} />
      </View>
    </View>
  );
}

const ratingStyles = StyleSheet.create({
  progresses: {
    flexDirection: "column"
  }
});
