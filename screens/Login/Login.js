import React from "react";
import { View, Text, ImageBackground, StatusBar } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { images, COLORS, SIZES, FONTS } from "../../constants";
import { generalStyles, headerStyles, detailsStyles } from "./styles";
import { CustomButton } from "../../components";

const Login = ({ navigation }) => {
  function renderHeader() {
    return (
      <View style={headerStyles.container}>
        <ImageBackground
          source={images.loginBackground}
          resizeMode="cover"
          style={headerStyles.image}
        >
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
            colors={[COLORS.transparent, COLORS.black]}
            style={headerStyles.gradient}
          >
            <Text style={headerStyles.title}>
              Cooking a Delicious Food Easily
            </Text>
          </LinearGradient>
        </ImageBackground>
      </View>
    );
  }

  function renderDetail() {
    return (
      <View style={detailsStyles.container}>
        {/* Description */}
        <Text style={detailsStyles.description}>
          Discover more than 1200 food recipes in your hand and cooking them
          easily!
        </Text>

        {/* Buttons */}
        <View style={detailsStyles.buttonsContainer}>
          {/* Login */}
          <CustomButton
            buttonText="Login"
            colors={[COLORS.darkGreen, COLORS.lime]}
            buttonContainerStyle={{
              paddingVertical: 18,
              borderRadius: 20,
            }}
            onPress={() => navigation.replace("Home")}
          />

          {/* Sign Up */}
          <CustomButton
            buttonText="Sign Up"
            colors={[]}
            buttonContainerStyle={{
              marginTop: SIZES.radius,
              paddingVertical: 18,
              borderRadius: 20,
              borderColor: COLORS.darkLime,
              borderWidth: 1,
            }}
            onPress={() => navigation.replace("Home")}
          />
        </View>
      </View>
    );
  }

  return (
    <View style={generalStyles.container}>
      <StatusBar barStyle="light-content" />
      {/* Header */}
      {renderHeader()}

      {/* Detail */}
      {renderDetail()}
    </View>
  );
};

export default Login;
