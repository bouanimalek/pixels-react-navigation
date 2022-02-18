import { Platform } from "react-native";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { MaterialIcons } from "@expo/vector-icons";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import Selected from "../screens/Selected";
import StackNav from "./HomeStackNav";
import Colors from "../styles/Colors";

const RouteConfigs = {
  Home: {
    screen: StackNav,
    navigationOptions: {
      tabBarIcon: (tabInfo) => (
        <MaterialIcons name="home" size={24} color={tabInfo.tintColor} />
      ),
      tabBarLabel: "Accueil",
      tabBarColor: Colors.lightBrown,
    },
  },
  Likes: {
    screen: Selected,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <MaterialIcons name="thumb-up" size={24} color={tintColor} />
      ),
      title: "Sélections",
      tabBarColor: Colors.darkGrey,
    },
  },
};
const TabNavigatorConfig = {
  tabBarOptions: {
    inactiveTintColor: Colors.darkGrey,
    activeTintColor: Colors.clicked,
  },
};

const MaterialBottomTabNavigatorConfig = {
  inactiveColor: Colors.white,
  shifting: true,
};
const BottomTabNav =
  Platform.OS === "android"
    ? createMaterialBottomTabNavigator(
        RouteConfigs,
        MaterialBottomTabNavigatorConfig
      )
    : createBottomTabNavigator(RouteConfigs, TabNavigatorConfig);

export default BottomTabNav;
