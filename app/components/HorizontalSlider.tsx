import React, { useContext } from "react";
import Animated, {
  color,
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue
} from "react-native-reanimated";
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from 'react-native-gesture-handler';
import Svg, { Defs, LinearGradient, Stop, Line, Color } from "react-native-svg";
import colors from "../common/colors";
import { Dimensions, StyleSheet } from "react-native";
import { clamp } from "react-native-redash";
import { interpolateColors } from "../common/utils";

const { width } = Dimensions.get("window");
const SLIDER_PADDING = 32;
const SLIDER_WIDTH = width - SLIDER_PADDING * 2;

const CURSOR_RADIUS = 10;
const LINE_HEIGHT = 4;
const SLIDER_HEIGHT = Math.max(2 * CURSOR_RADIUS, LINE_HEIGHT);


export interface SliderProps {
  colors: Color[];
  onColorChange?: (color: number) => void;
}


export default ({ colors, onColorChange }: SliderProps) => {
  // TODO: use unversal color type
  const onTranslateChange = (x: number) => {
    const color = interpolateColors(x, {
      inputRange: colors.map((_, i, arr) => SLIDER_WIDTH * i / arr.length),
      outputRange: colors as string[]
    });
    if (onColorChange) onColorChange(color);
  }

  const translateX = useSharedValue(0);
  const onGestureEvent = useAnimatedGestureHandler<
    PanGestureHandlerGestureEvent,
    { offsetX: number; }
  >({
    onStart: (_, ctx) => {
      ctx.offsetX = translateX.value;
    },
    onActive: ({ translationX }, { offsetX }) => {
      translateX.value = clamp(offsetX + translationX, 0, SLIDER_WIDTH);
    },
    onEnd: () => runOnJS(onTranslateChange)(translateX.value)
  });

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [
      { translateX: translateX.value },
    ]
  }));

  return (
    <Svg
      strokeLinecap="round"
      height={SLIDER_HEIGHT}
      width={SLIDER_WIDTH}
      style={{ paddingHorizontal: SLIDER_PADDING }}
    >
      <Defs>
        <LinearGradient id="grad" x1="0" y1="0" x2="100%" y2="0">
          {colors.map((color, index, arr) =>
          (<Stop
            key={index}
            offset={index / arr.length}
            stopColor={color}
          />)
          )}
        </LinearGradient>
      </Defs>
      <Line
        stroke="url(#grad)"
        strokeWidth={LINE_HEIGHT}
        x1={"0%"}
        y1={SLIDER_HEIGHT / 2}
        x2={SLIDER_WIDTH}
        y2={SLIDER_HEIGHT / 2}
      />
      <PanGestureHandler onGestureEvent={onGestureEvent}>
        <Animated.View
          style={[styles.cursor, animatedStyles]}
        />
      </PanGestureHandler>
    </Svg>
  );
}

const styles = StyleSheet.create({
  cursor: {
    backgroundColor: colors.purple,
    width: CURSOR_RADIUS * 2,
    height: CURSOR_RADIUS * 2,
    borderRadius: CURSOR_RADIUS,
  }
});
