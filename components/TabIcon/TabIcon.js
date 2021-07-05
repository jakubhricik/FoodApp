import React from "react";
import { Image, View } from "react-native";
import { COLORS } from "../../constants";

import styles from "./TabIcon.style.js";

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
