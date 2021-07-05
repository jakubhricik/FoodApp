import React from "react";
import { StyleSheet } from "react-native";

import { SIZES, COLORS, FONTS } from "../../constants";

export default StyleSheet.create({
  container: {
    height: 350,
    width: 250,
    marginTop: SIZES.radius,
    marginRight: 20,
    borderRadius: SIZES.radius,
  },
  backgroundImage: {
    height: 350,
    width: 250,
    borderRadius: SIZES.radius,
  },
  categoryContainer: {
    position: "absolute",
    top: 15,
    left: 20,
    backgroundColor: COLORS.transparentGray,
    paddingVertical: 5,
    paddingHorizontal: SIZES.radius,
    borderRadius: SIZES.radius,
  },
  category: {
    color: COLORS.white,
    ...FONTS.h4,
  },
  recipeInfoContainer: {
    position: "absolute",
    bottom: 10,
    left: 10,
    right: 10,
    height: 100,
    paddingVertical: SIZES.radius,
    paddingHorizontal: SIZES.base,
    borderRadius: SIZES.radius,
    overflow: "hidden",
  },
  cardDetailContainer: {
    flex: 1,
  },
  nameBookmarkContainer: {
    flex: 1,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  name: {
    color: COLORS.white,
    width: "70%",
    ...FONTS.h3,
    fontSize: 18,
  },
  bookmarkIcon: {
    width: 20,
    height: 20,
    tintColor: COLORS.darkGreen,
    marginRight: SIZES.base,
  },
  subText: {
    color: COLORS.lightGray,
    ...FONTS.body4,
  },
});
