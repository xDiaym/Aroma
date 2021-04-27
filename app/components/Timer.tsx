import Svg, {Circle, Path} from "react-native-svg";
import React from "react";
import Animated, {sub, interpolate, multiply} from "react-native-reanimated";

const AnimatedPath = Animated.createAnimatedComponent(Path);
const AnimatedCircle = Animated.createAnimatedComponent(Circle)

const size = 250;
const strokeWidth = 5;
const { PI, cos, sin } = Math;
const r = (size - strokeWidth) / 2;
const cx = size / 2;
const cy = size / 2;
const startAngle = 0;
const endAngle = PI;
// TODO: add offset for circle
const x1 = cx - r * cos(startAngle);
const y1 = cy - r * sin(startAngle);
const x2 = cx - r * cos(endAngle);
const y2 = cy - r * sin(endAngle);
const d = `M ${x1} ${y1} A ${r} ${r} 0 1 1 ${x2} ${y2}`;

interface TimerProps {
  progress: Animated.Value<number>;
}

export default ({progress}: TimerProps) => {
  const strokeDashoffset = interpolate(progress, {
    inputRange: [0, 1],
    outputRange: [r * PI, 0]
  });
  const circleX = sub(cx, multiply(r, Animated.cos(multiply(PI, progress))));
  const circleY = sub(cy, multiply(r, Animated.sin(multiply(PI, progress))));
  return (
    <Svg width={size} height={size} strokeLinecap={'round'}>
      <Path
        stroke="#CDC7D6"
        fill="none"
        {...{ d, strokeWidth }}
      />
      <AnimatedPath
        stroke="#8257DA"
        fill="none"
        strokeDasharray={`${PI * r}`}
        {...{ d, strokeDashoffset, strokeWidth }}
      />
      <AnimatedCircle
        cx={circleX}
        cy={circleY}
        r={10}
        fill={'#8257DA'}
      />
    </Svg>
  );
}
