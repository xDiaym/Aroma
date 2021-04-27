import * as React from "react";
import Svg, {Circle, Path} from "react-native-svg";

const size = 75;
const strokeWidth = 3;
const { PI, cos, sin } = Math;
const circleRadius = 4
const r = (size - strokeWidth - 2 * circleRadius) / 2;
const cx = size / 2;
const cy = size / 2;
const startAngle = -PI / 6;
const endAngle = PI + PI / 6;
// TODO: add offset for circle
const x1 = cx - r * cos(startAngle);
const y1 = cy - r * sin(startAngle);
const x2 = cx - r * cos(endAngle);
const y2 = cy - r * sin(endAngle);
const d = `M ${x1} ${y1} A ${r} ${r} 0 1 1 ${x2} ${y2}`;

interface CircularProgressProps {
  progress: number;
}


export default ({progress}: CircularProgressProps) => {
  const angle = progress * (endAngle - startAngle);
  return (
    <Svg width={size} height={size} strokeLinecap={"round"}>
      <Path
        stroke="black"
        fill="none"
        {...{ d, strokeWidth }}
      />
      <Path
        stroke="#8B61DF"
        fill="none"
        strokeDasharray={`${(angle) * r}, ${(2*PI - angle) * r}`}
        {...{ d, strokeWidth }}
      />
      <Circle
        x={cx - r * cos(startAngle + angle)}
        y={cy - r * sin(startAngle + angle)}
        fill={"#8B61DF"}
        r={circleRadius}
      />
    </Svg>
  );
};
