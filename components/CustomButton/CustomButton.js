import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

import { LinearGradient } from "expo-linear-gradient";

import styles from "./CustomButton.style.js";

const CustomButton = ({
  buttonText,
  buttonContainerStyle,
  colors,
  onPress,
}) => {
  if (colors.length > 0) {
    return (
      <TouchableOpacity onPress={onPress}>
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          colors={colors}
          style={{ ...buttonContainerStyle }}
        >
          <Text style={styles.buttonText}>{buttonText}</Text>
        </LinearGradient>
      </TouchableOpacity>
    );
  } else {
    return (
      <TouchableOpacity onPress={onPress} style={{ ...buttonContainerStyle }}>
        <Text style={styles.buttonColoredText}>{buttonText}</Text>
      </TouchableOpacity>
    );
  }
};

export default CustomButton;
