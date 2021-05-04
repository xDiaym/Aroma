import { StyleSheet } from "react-native"
import colors from "./colors";

const defaultStyle = StyleSheet.create({
  text: {
    fontFamily: "Rubikr",
    fontWeight: "500",
    color: colors.textPrimary,
    fontSize: 14
  },
  showBorders: {
    borderColor: "#0ff",
    borderWidth: 1
  }
});

export default defaultStyle;
