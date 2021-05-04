import Svg, { Line } from "react-native-svg";
import React from "react";

interface ProgressProps {
  progress: number;
  width?: number;
}

export default ({ progress, width = 150 }: ProgressProps) => {
  return (
    <Svg width={width} height={4} strokeLinecap={'round'}>
      <Line
        x1={0}
        y1={0}
        x2={width}
        y2={0}
        stroke={"#000"}
        strokeWidth={4}
      />
      <Line
        x1={0}
        y1={0}
        x2={progress * width}
        y2={0}
        stroke={"#8B61DF"}
        strokeWidth={4}
      />
    </Svg>
  );
}
