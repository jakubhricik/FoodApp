import { StyleSheet } from "react-native";
import { COLORS, FONTS } from "../../constants";

export default StyleSheet.create({
  buttonText: {
    textAlign: "center",
    color: COLORS.white,
    ...FONTS.h3,
  },
  buttonColoredText: {
    textAlign: "center",
    color: COLORS.lightGreen,
    ...FONTS.h3,
  },
  button: {
    backgroundColor: COLORS.white,
  },
});
