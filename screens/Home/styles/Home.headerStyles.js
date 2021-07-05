import React from "react";
import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../../constants";

export default StyleSheet.create({
  // header styles
  headerContainer: {
    flexDirection: "row",
    marginHorizontal: SIZES.padding,
    alignItems: "center",
    height: 80,
  },
  headerWelcomeTitle: {
    color: COLORS.darkGreen,
    ...FONTS.h2,
  },
  headerSubTitle: {
    color: COLORS.gray,
    marginTop: 3,
    ...FONTS.body3,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },

  // search bar styles
  searchBarContainer: {
    flexDirection: "row",
    height: 50,
    alignItems: "center",
    marginHorizontal: SIZES.padding,
    paddingHorizontal: SIZES.radius,
    borderRadius: 10,
    backgroundColor: COLORS.lightGray,
  },
  searchIcon: {
    height: 20,
    width: 20,
    color: COLORS.gray,
  },
  searchTextInput: {
    marginLeft: SIZES.radius,
    ...FONTS.body3,
  },
});
