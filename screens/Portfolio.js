import React from "react";
import { Text, View, Image, Platform, Button } from "react-native";
import {
  HeaderButtons,
  HeaderButton,
  Item,
  HiddenItem,
  OverflowMenu,
} from "react-navigation-header-buttons";
import { globalStyles } from "../styles/AppStyles";
import Colors from "../styles/Colors";
import MaterialIconsHeader from "../components/MaterialIconsHeader";

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
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={MaterialIconsHeader}>
        <Item
          title="info"
          iconName="info-outline"
          onPress={() => alert("Portfolio de " + name)}
        />
        <Item
          title="infoTwo"
          iconName="info"
          onPress={() => alert("Portfolio de " + name)}
        />
      </HeaderButtons>
    ),
  };
};
export default Portfolio;
