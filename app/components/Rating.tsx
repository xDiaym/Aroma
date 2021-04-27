import React from "react";
import {StyleSheet, Text, View} from "react-native";
import Progress from "./Progress";
import Rate from "./Rate";

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

interface LinesProps {
  data: LineProps[];
}

const Lines = ({ data }: LinesProps) => {
  return (
    <View style={linesStyles.root}>
      <View style={linesStyles.names}>
        {data.map(({ name }, index) => <Text style={linesStyles.text} key={index}>{name}</Text>)}
      </View>
      {/* FIXME:  d*/}
      <View style={{paddingLeft:32}}>
        {data.map(({ rate }, index) => (
          <View style={{ height: 24, justifyContent: "center" }}>
            <Progress progress={rate / 10} key={index}/>
          </View>
        ))}
      </View>
    </View>
  );
}

const linesStyles = StyleSheet.create({
  root: {
    flexDirection: "row"
  },
  names: {
    flexDirection: "column",
  },
  text: {
    fontSize: 14,
    color: '#270D47'
  }
});

export default ({ aromas, total, directing, plot, entertainment }: RatingProps) => {
  return (
    <View style={{flexDirection: "row"}}>
      <Rate rate={total} />
      <Lines data={[
          {name: 'Ароматы', rate: aromas},
          {name: 'Режессура', rate: directing},
          {name: 'Сюжет', rate: plot},
          {name: 'Зрелищность', rate: entertainment},
        ]}
      />
    </View>
  );
}

const ratingStyles = StyleSheet.create({
});
