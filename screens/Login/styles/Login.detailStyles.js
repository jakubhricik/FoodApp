import { StyleSheet } from "react-native";
import { COLORS, SIZES, FONTS } from "../../../constants";

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: SIZES.padding,
  },
  description: {
    marginTop: SIZES.radius,
    color: COLORS.gray,
    width: "70%",
    ...FONTS.body3,
  },
  buttonsContainer: {
    flex: 1,
    justifyContent: "center",
  },
});
