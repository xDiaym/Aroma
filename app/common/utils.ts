import { ColorValue, processColor } from "react-native";
import { interpolate } from "react-native-reanimated";


type InterpolateColorsConfig = {
  inputRange: number[],
  outputRange: ColorValue[]
}

export const interpolateColors = (x: number,
  { inputRange, outputRange }: InterpolateColorsConfig) => {
  const colors = outputRange.map(processColor) as number[];
  return interpolate(x, inputRange, colors);
}
