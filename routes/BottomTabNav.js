import { createBottomTabNavigator } from "react-navigation-tabs";
import Selected from "../screens/Selected";
import Colors from "../styles/Colors";
import StackNav from "./HomeStackNav";
import { MaterialIcons } from "@expo/vector-icons";

const RouteConfigs = {
  Home: {
    screen: StackNav,
    navigationOptions: {
      tabBarIcon: (tabInfo) => (
        <MaterialIcons name="home" size={24} color={tabInfo.tintColor} />
      ),
      tabBarLabel: "Accueil",
    },
  },
  Likes: {
    screen: Selected,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <MaterialIcons name="thumb-up" size={24} color={tintColor} />
      ),
      title: "Sélections",
    },
  },
};
const TabNavigatorConfig = {
  tabBarOptions: {
    inactiveTintColor: Colors.darkGrey,
    activeTintColor: Colors.clicked,
  },
};
const BottomTabNav = createBottomTabNavigator(RouteConfigs, TabNavigatorConfig);

export default BottomTabNav;
