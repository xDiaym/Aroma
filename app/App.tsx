import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { ImageSourcePropType, StyleSheet, View } from 'react-native';
import Timer from "./components/Timer";
import Animated, {
  block,
  Clock, clockRunning, cond, debug,
  Easing,
  set, startClock, stopClock,
  timing,
  useCode,
  Value
} from "react-native-reanimated";
import FilmDescription from "./screens/FilmDescription";
import { MeditationDescription } from "./screens/MeditationDescription";
import Rating from "./components/Rating";
import Card from "./components/Card";
import Cards from "./screens/Cards";
import { Button } from "./components/Button";

// @ts-ignore
export function runTiming(clock, value, dest) {
  const state = {
    finished: new Value(0),
    position: new Value(0),
    time: new Value(0),
    frameTime: new Value(0),
  };

  const config = {
    duration: 10000,
    toValue: new Value(0),
    easing: Easing.inOut(Easing.linear),
  };

  return block([
    cond(clockRunning(clock), 0, [
      set(state.finished, 0),
      set(state.time, 0),
      set(state.position, value),
      set(state.frameTime, 0),
      set(config.toValue, dest),
      startClock(clock),
    ]),
    timing(clock, state, config),
    cond(state.finished, debug("stop clock", stopClock(clock))),
    state.position,
  ]);
}

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style={'auto'} />
      <Rating total={10} aromas={8} directing={9} entertainment={7} plot={8} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f3f5',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
