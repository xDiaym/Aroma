import React from "react";
import Animated, { diffClamp, interpolateColors, sub, Value } from "react-native-reanimated";
import { onGestureEvent, withOffset } from "react-native-redash/src/v1";
import {
  PanGestureHandler,
  State,
} from 'react-native-gesture-handler';
import Svg, { Defs, LinearGradient, Stop, Line } from "react-native-svg";
import colors from "../common/colors";
import { Dimensions } from "react-native";

const { width } = Dimensions.get("window");
const SLIDER_PADDING = 32;
const SLIDER_WIDTH = width - SLIDER_PADDING * 2;
const COLORS = [
  '#FF0000B2',
  '#FFF500B2',
  '#00FF29B2',
  '#00E0FFB2',
  '#0500FFB2',
  '#BD00FFB2',
  '#FF0000B2'
];

const cursorRadius = 10;
const lineHeight = 4;


export default () => {
  const state = new Value(State.UNDETERMINED);
  const translationX = new Value(0);
  const gestureHandler = onGestureEvent({ state, translationX });
  const x = diffClamp(withOffset(translationX, state), 0, SLIDER_WIDTH);
  const translateX = sub(x, cursorRadius);
  const color = interpolateColors(x, {
    inputRange: COLORS.map((_, i, arr) => SLIDER_WIDTH * i / arr.length),
    outputColorRange: COLORS
  });
  return (
    <Svg
      strokeLinecap={"round"}
      height={lineHeight > cursorRadius ? lineHeight : cursorRadius}
      width={SLIDER_WIDTH}
      style={{ paddingHorizontal: SLIDER_PADDING }}
    >
      <Defs>
        <LinearGradient id="grad" x1="0" y1="0" x2="100%" y2="0">
          {COLORS.map((color, index, arr) =>
          (<Stop
            offset={index / arr.length}
            stopColor={color}
          />)
          )}
        </LinearGradient>
      </Defs>
      <Line
        stroke="url(#grad)"
        strokeWidth={lineHeight}
        x1={'0%'}
        y1={cursorRadius}
        x2={SLIDER_WIDTH}
        y2={cursorRadius}
      />
      <PanGestureHandler {...gestureHandler}>
        <Animated.View
          style={{
            backgroundColor: color,
            width: cursorRadius * 2,
            height: cursorRadius * 2,
            borderRadius: cursorRadius,
            transform: [{ translateX }],
          }}
        />
      </PanGestureHandler>
    </Svg>
  );
}

