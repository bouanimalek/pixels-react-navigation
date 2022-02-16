import { Text, View, Image, Platform } from "react-native";
import React from "react";
import { globalStyles } from "../styles/AppStyles";
import Colors from "../styles/Colors";

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
      <Text style={globalStyles.text}>{navigation.getParam("favColor")}</Text>
    </View>
  );
};

// Portfolio.navigationOptions = {
//   headerTitle: "Profil",
//   headerStyle: {
//     backgroundColor: Platform.OS === "android" ? "blue" : "",
//   },
//   headerTintColor: Platform.OS === "android" ? Colors.white : "",
//   headerTitleStyle: {
//     fontStyle: "italic",
//   },
// };

Portfolio.navigationOptions = (navigationData) => {
  const name = navigationData.navigation.getParam("name");
  const favColor = navigationData.navigation.getParam("favColor");

  return {
    headerTitle: `Profil de ${name}`,
    headerStyle: {
      backgroundColor: favColor,
    },
    headerTintColor: Colors.white,
  };
};
export default Portfolio;
