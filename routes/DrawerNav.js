import { createDrawerNavigator } from "react-navigation-drawer";
import { createAppContainer } from "react-navigation";
import StackNav from "./HomeStackNav";
import FaqStackNav from "./FaqStackNav";
import Colors from "../styles/Colors";
import BottomTabNav from "./BottomTabNav";

const RouteConfig = {
  Home: {
    screen: BottomTabNav,
    navigationOptions: {
      drawerLabel: "Accueil",
    },
  },
  Faq: {
    screen: FaqStackNav,
    navigationOptions: {
      drawerLabel: "FAQ",
    },
  },
};

const DrawerNavigatorConfig = {
  hideStatusBar: true,
  drawerBackgroundColor: Colors.darkGrey,
  drawerWidth: 110,
  drawerType: "slide",
  contentOptions: {
    activeTintColor: Colors.clicked,
    inactiveTintColor: Colors.white,
    labelStyle: {
      fontSize: 19,
    },
  },
};
const MainNavigator = createDrawerNavigator(RouteConfig, DrawerNavigatorConfig);

export default createAppContainer(MainNavigator);
