import { Text, View } from "react-native";
import React from "react";
import { globalStyles } from "../styles/AppStyles";

const Portfolio = ({ navigation }) => {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.text}>{navigation.getParam("name")}</Text>
      <Text style={globalStyles.text}>{navigation.getParam("country")}</Text>
      <Text style={globalStyles.text}>{navigation.getParam("totalImg")}</Text>
    </View>
  );
};

export default Portfolio;
