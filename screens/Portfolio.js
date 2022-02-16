import { Text, View, Image } from "react-native";
import React from "react";
import { globalStyles } from "../styles/AppStyles";

const Logo = () => {
  return (
    <Image
      source={require("../assets/images/camera.png")}
      style={{ width: 30, height: 30 }}
    />
  );
};
const Portfolio = ({ navigation }) => {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.text}>{navigation.getParam("name")}</Text>
      <Text style={globalStyles.text}>{navigation.getParam("country")}</Text>
      <Text style={globalStyles.text}>{navigation.getParam("totalImg")}</Text>
    </View>
  );
};

Portfolio.navigationOptions = {
  headerTitle: () => <Logo />,
};

export default Portfolio;
