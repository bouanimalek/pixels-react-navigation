import { Text, View } from "react-native";
import React from "react";

const Portfolio = ({ navigation }) => {
  return (
    <View>
      <Text>{navigation.getParam("name")}</Text>
    </View>
  );
};

export default Portfolio;
