import { StyleSheet } from "react-native";
import { COLORS } from "../../constants";

export default StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    height: 80,
    width: 50,
  },
  icon: {
    width: 30,
    height: 30,
  },
  bottonLine: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: 5,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    backgroundColor: COLORS.darkGreen,
  },
});
