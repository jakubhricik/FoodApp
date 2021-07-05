import React from "react";
import { Image, View, StyleSheet } from "react-native";
import { COLORS } from "../constants";

const TabIcon = ({ focused, icon }) => {
  return (
    <View style={styles.container}>
      <Image
        source={icon}
        resizeMode="contain"
        style={[
          styles.icon,
          { tintColor: focused ? COLORS.darkGreen : COLORS.lightLime },
        ]}
      />

      {focused && <View style={styles.bottonLine} />}
    </View>
  );
};

export default TabIcon;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    height: 80,
    width: 50,
  },
  icon: {
    width: 30,
    height: 30,
  },
  bottonLine: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: 5,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    backgroundColor: COLORS.darkGreen,
  },
});
