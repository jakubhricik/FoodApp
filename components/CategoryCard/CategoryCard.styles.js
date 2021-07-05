import React from "react";
import { StyleSheet } from "react-native";

import { COLORS, FONTS, SIZES } from "../../constants";

export default StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    marginTop: 10,
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.gray2,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: SIZES.radius,
  },
  detailsContainer: {
    width: "65%",
    paddingHorizontal: 20,
  },
  detailsName: {
    flex: 1,
    ...FONTS.h2,
  },
  detailsServings: {
    color: COLORS.gray,
    ...FONTS.body4,
  },
});
