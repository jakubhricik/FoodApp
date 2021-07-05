import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  SafeAreaView,
  TextInput,
  FlatList,
} from "react-native";

import {
  dummyData,
  images,
  icons,
  FONTS,
  SIZES,
  COLORS,
} from "../../constants";

import { CategoryCard } from "../../components";

import { generalStyles, headerStyles } from "./styles";

const Home = ({ navigation }) => {
  function renderHeader() {
    return (
      <View style={headerStyles.headerContainer}>
        {/* Text */}
        <View style={{ flex: 1 }}>
          <Text style={headerStyles.headerWelcomeTitle}>Hello Jakub,</Text>
          <Text style={headerStyles.headerSubTitle}>
            What you want to cook today ?
          </Text>
        </View>
        {/* Image */}
        <TouchableOpacity onPress={() => console.log("Profile")}>
          <Image source={images.profile} style={headerStyles.profileImage} />
        </TouchableOpacity>
      </View>
    );
  }

  function renderSearchBar() {
    return (
      <View style={headerStyles.searchBarContainer}>
        <Image source={icons.search} style={headerStyles.searchIcon} />
        <TextInput
          style={headerStyles.searchTextInput}
          placeholder="Search Recipes"
          placeholderTextColor={COLORS.gray}
        />
      </View>
    );
  }

  function renderSeeRecipeCard() {
    return (
      <View style={headerStyles.seeRecipesContainer}>
        {/* Image */}
        <View style={headerStyles.seeRecipesImageContainer}>
          <Image source={images.recipe} style={headerStyles.seeRecipesImage} />
        </View>

        {/* Text */}
        <View style={headerStyles.seeRecipesTextContainer}>
          <Text style={headerStyles.seeRecipesText}>
            You have 12 recipes that you haven't try yet
          </Text>
          <TouchableOpacity
            style={headerStyles.seeRecipesLinkContainer}
            onPress={() => console.log("See Recipes...")}
          >
            <Text style={headerStyles.seeRecipesLink}>See Recipes</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
  return (
    <SafeAreaView style={generalStyles.container}>
      <FlatList
        data={dummyData.categories}
        keyExtractor={(item) => `${item.id}`}
        keyboardDismissMode="on-drag"
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View>
            {/* Header */}
            {renderHeader()}

            {/* Search Bar */}
            {renderSearchBar()}

            {/* See Recipe Card */}
            {renderSeeRecipeCard()}

            {/* Trending Section */}

            {/* Category Header */}
          </View>
        }
        renderItem={({ item }) => {
          return (
            <CategoryCard
              categoryItem={item}
              categoryStyle={{ marginHorizontal: SIZES.padding }}
              onPress={() => navigation.navigate("Recipe", { recipe: item })}
            />
          );
        }}
        ListFooterComponent={<View style={generalStyles.footerComponent} />}
      />
    </SafeAreaView>
  );
};

export default Home;
