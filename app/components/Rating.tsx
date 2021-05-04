import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import Progress from "./Progress";
import Rate from "./Rate";
import "../common/styles";
import defaultStyle from "../common/styles";

// TODO: use defualt constants
const { width } = Dimensions.get("window");
const PADDING = 16;
const CIRCLE_SIZE = 75;
const LINE_WIDTH = (width - PADDING * 2) - CIRCLE_SIZE;
const PROGRESS_LINE_WIDTH = LINE_WIDTH * 0.5;
const TEXT_LINE_WIDTH = LINE_WIDTH * 0.4;

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
        <Progress progress={rate / 10} width={PROGRESS_LINE_WIDTH} />
      </View>
    </View>
  );
}

const lineStyles = StyleSheet.create({
  root: {
    flexDirection: "row",
    ...defaultStyle.showBorders
  },
  text: {
    color: '#270D47',
    flexDirection: "column",
    fontFamily: "Rubik",
    fontWeight: "400",
    fontSize: 14,
    width: TEXT_LINE_WIDTH,
  },
  progress: {
    justifyContent: "center",
  }
});

export default ({ total, aromas, directing, plot, entertainment }: RatingProps) => {
  console.log(width)
  return (
    <View style={ratingStyles.root}>
      <View style={defaultStyle.showBorders}>
        <Rate rate={total} />
      </View>
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
  root: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  progresses: {
    paddingLeft: 21,
    flexDirection: "column",
  }
});
