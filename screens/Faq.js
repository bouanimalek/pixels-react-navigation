import { Text, View } from "react-native";
import React from "react";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import MaterialIconsHeader from "../components/MaterialIconsHeader";

const Faq = () => {
  return (
    <View>
      <Text>Faq</Text>
    </View>
  );
};

Faq.navigationOptions = ({ navigation }) => {
  return {
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={MaterialIconsHeader}>
        <Item
          title="menu"
          iconName="menu"
          // navigation.toggleDrawer()
          // navigation.openDrawer()
          onPress={() => navigation.toggleDrawer()}
        />
      </HeaderButtons>
    ),
  };
};

export default Faq;
