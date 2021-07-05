import { StyleSheet } from "react-native";
import { COLORS, SIZES, FONTS } from "../../../constants";

export default StyleSheet.create({
  container: {
    height: SIZES.height > 700 ? "65%" : "60%",
  },
  image: {
    flex: 1,
    justifyContent: "flex-end",
  },
  gradient: {
    height: 200,
    justifyContent: "flex-end",
    paddingHorizontal: SIZES.padding,
  },
  title: {
    color: COLORS.white,
    width: "80%",
    lineHeight: 45,
    ...FONTS.largeTitle,
  },
});
