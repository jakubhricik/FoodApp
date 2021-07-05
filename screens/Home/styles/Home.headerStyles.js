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
    flex: 1,
    marginLeft: SIZES.radius,
    ...FONTS.body3,
  },

  //see recipe card styles
  seeRecipesContainer: {
    flexDirection: "row",
    marginTop: SIZES.padding,
    marginHorizontal: SIZES.padding,
    borderRadius: 10,
    backgroundColor: COLORS.lightGreen,
  },
  seeRecipesImageContainer: {
    width: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  seeRecipesImage: {
    width: 80,
    height: 80,
  },
  seeRecipesTextContainer: {
    flex: 1,
    paddingVertical: SIZES.radius,
  },
  seeRecipesText: {
    width: "70%",
    ...FONTS.body4,
  },
  seeRecipesLinkContainer: {
    marginTop: 10,
  },
  seeRecipesLink: {
    color: COLORS.darkGreen,
    textDecorationLine: "underline",
    ...FONTS.h4,
  },

  // trending section
  trendingContainer: {
    marginTop: SIZES.padding,
  },
  trendingTitle: {
    marginHorizontal: SIZES.padding,
    ...FONTS.h2,
  },

  // category header
  categoryHeaderContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
    marginHorizontal: SIZES.padding,
  },
  categoryHeaderTitle: {
    flex: 1,
    ...FONTS.h2,
  },
  categoryHeaderViewAllButton: {
    color: COLORS.gray,
    ...FONTS.body4,
  },
});
