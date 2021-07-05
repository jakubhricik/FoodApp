import React from "react";
import { View, TouchableOpacity, Text, Image } from "react-native";

import styles from "./CategoryCard.styles.js";

const CategoryCard = ({ categoryStyle, categoryItem, onPress }) => {
  return (
    <TouchableOpacity
      style={[styles.container, { ...categoryStyle }]}
      onPress={onPress}
    >
      {/* Image */}
      <Image
        source={categoryItem.image}
        resizeMode="cover"
        style={styles.image}
      />

      {/* Details */}
      <View style={styles.detailsContainer}>
        {/* Name */}
        <Text style={styles.detailsName}>{categoryItem.name}</Text>
        {/* Servings */}
        <Text style={styles.detailsServings}>
          {categoryItem.duration} | {categoryItem.serving} Serving
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default CategoryCard;
