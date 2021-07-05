import React from "react";
import { View, Text, TouchableOpacity, Image, Platform } from "react-native";
import { icons } from "../../constants";

import { BlurView } from "expo-blur";

import styles from "./TrendingCard.styles.js";

const TrendingCard = ({ containerStyle, recipeItem, onPress }) => {
  return (
    <TouchableOpacity
      style={[styles.container, { ...containerStyle }]}
      onPress={onPress}
    >
      {/* Background Image */}
      <Image
        source={recipeItem.image}
        resizeMode="cover"
        style={styles.backgroundImage}
      />

      {/* Category */}
      <View style={styles.categoryContainer}>
        <Text style={styles.category}>{recipeItem.category}</Text>
      </View>

      {/* Card Info */}
      <RecipeCardInfo recipeItem={recipeItem} />
    </TouchableOpacity>
  );
};

const RecipeCardInfo = ({ recipeItem }) => {
  return (
    <BlurView style={styles.recipeInfoContainer} tint="dark" intensity="90">
      <RecipeCardDetail recipeItem={recipeItem} />
    </BlurView>
  );
};

const RecipeCardDetail = ({ recipeItem }) => {
  return (
    <View style={styles.cardDetailContainer}>
      {/* Name & Bookmark */}
      <View style={styles.nameBookmarkContainer}>
        <Text style={styles.name}>{recipeItem.name}</Text>
        <Image
          source={recipeItem.isBookmark ? icons.bookmarkFilled : icons.bookmark}
          style={styles.bookmarkIcon}
        />
      </View>

      {/* Duration & Serving */}
      <Text style={styles.subText}>
        {recipeItem.duration} | {recipeItem.serving} Serving
      </Text>
    </View>
  );
};

export default TrendingCard;
