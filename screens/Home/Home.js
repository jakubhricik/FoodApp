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

import { CategoryCard, TrendingCard } from "../../components";

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

  function renderTrendingSection() {
    return (
      <View style={headerStyles.trendingContainer}>
        <Text style={headerStyles.trendingTitle}>Trending Recipe</Text>
        <FlatList
          data={dummyData.trendingRecipes}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => `${item.id}`}
          renderItem={({ item, index }) => {
            return (
              <TrendingCard
                containerStyle={{ marginLeft: index == 0 ? SIZES.padding : 0 }}
                recipeItem={item}
                onPress={() => navigation.navigate("Recipe", { recipe: item })}
              />
            );
          }}
        />
      </View>
    );
  }

  function renderCategoryHeader() {
    return (
      <View style={headerStyles.categoryHeaderContainer}>
        {/* Section Title */}
        <Text style={headerStyles.categoryHeaderTitle}>Category</Text>
        {/* View all Button */}
        <TouchableOpacity>
          <Text style={headerStyles.categoryHeaderViewAllButton}>View All</Text>
        </TouchableOpacity>
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
            {renderTrendingSection()}

            {/* Category Header */}
            {renderCategoryHeader()}
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
