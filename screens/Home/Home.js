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

import { generalStyles } from "./styles";

const Home = ({ navigation }) => {
  return (
    <SafeAreaView style={generalStyles.container}>
      <FlatList
        data={dummyData.categories}
        keyExtractor={(item) => `${item.id}`}
        keyboardDismissMode="on-drag"
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={<View></View>}
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
